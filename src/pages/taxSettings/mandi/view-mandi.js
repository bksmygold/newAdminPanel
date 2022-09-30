import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Modal,
  TextField,
} from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getCollection,
  deleteCollection,
  postCollection,
  updateCollection,
} from 'src/apis/collection';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/styles';
import { CustomTextField } from 'src/components/customMUI';
import { MandiCard } from 'src/components/cards/mandiCard';
import { updateCalculation, getCalculation } from 'src/apis/calculation';
import { BuySaveCard } from 'src/components/cards/buySaveCard';
import { getLoanInterest, getLoanInterestById, updateLoanInterest } from 'src/apis/loanInterest';

//=======================================================
export default function Mandi() {
  const router = useRouter();
  const theme = useTheme();

  const [viewTable, setViewTable] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  const [editTable, setEditTable] = useState(false);

  //=======================
  const formik = useFormik({
    initialValues: {
      minMonth: 0,
      maxMonth: 0,
      interest: 0,
    },
    validationSchema: yup.object({
      minMonth: yup.number("Enter minimum month").required("minimum month is required"),
      maxMonth: yup.number("Enter maximum month").required("maximum monthis required"),
      interest: yup.number("Enter Interest").required("Interest is required"),
    }),
    onSubmit: (values) => {
      loanInterestMutation.mutate({
        data: values,
        id:id
      });
    },
  });

  const loanQuery = useQuery({
    querKey: ["loanInterest", id],
    queryFn: () => getLoanInterestById(id),
    onSuccess: (res) => formik.setValues(res.data),
    enabled: !!router.query.id,
  });
  const loanInterestMutation = useMutation({
    mutationFn: updateLoanInterest,
    onSuccess: (res) => {
      swal("Loan Interest Updated !", "Loan interest updated", "success")
      // loanQuery.refetch();
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });

  
  //========================
  const addFormik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: yup.object({
      name: yup.string('Enter Collection Name').required('Collection is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      name: '',
      value: 0
    },
    validationSchema: yup.object({
      name: yup.string('Enter  Name').required('Name is required'),
      value: yup.string('Enter Value').required('Value is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: values.id });
    },
  });


  const query = useQuery({
    queryKey: 'mandi',
    queryFn: () => getCalculation("Mandi Rate"),
    // onSuccess: () => query.refetch(),
  });


  const tableQuery = useQuery({
    queryKey: 'loadn interest',
    queryFn: () => getLoanInterest(),
    // onSuccess: () => query.refetch(),
  });

  const addMutation = useMutation({
    mutationFn: postCollection,
    onSuccess: (res) => {
      query.refetch();
      setViewTable(false);
      addFormik.resetForm();
      swal('Collection Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateCalculation,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Rates Updated !', 'Continue with the tax panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  if (query.isLoading) return <Loading />;
  //===============

  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.editButton}
          size="small"
          onClick={() => {
            // console.log("params ---", params.row);
            setId(params.row.id);
            setEditTable(true)
            formik.setValues(params.row);
            setEditTable(params.row);
          }}
        >
          Edit <EditIcon sx={theme.custom.editButton.iconStyle} />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteCollection}
        url="/collection/view-collection"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'minMonth',
      headerName: 'Min. Month',
      width: 250,
      editable: true, flex: 1
    },
    {
      field: 'maxMonth',
      headerName: 'Max. Month',
      width: 250,
      editable: true, flex: 1
    },
    {
      field: 'interest',
      headerName: 'Interest',
      width: 250,
      editable: true, flex: 1
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: editButton, flex: 1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: deleteButton, flex: 1
    },
  ];

  const row = [
    {
      id: 1,
      months: "1 month",
      value: "1%"
    },
    {
      id: 14,
      months: "3 month",
      value: "2%"
    },
    {
      id: 15,
      months: "6 month",
      value: "4%"
    },
    {
      id: 14,
      months: "12 month",
      value: "5%"
    },
  ]
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Mandi Rates </title>
      </Head>
      {/* =================================================== */}
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={!!showEdit}
        onClose={() => setShowEdit(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={theme.custom.modal}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: '#8B5704',
                fontWeight: 'bolder',
              }}
            >
              Edit Mandi  Rate
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit mandi rate for plans used in Buy and save
            </Typography>

            <form onSubmit={editFormik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Name
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.name && Boolean(editFormik.errors.name)
                }
                helperText={editFormik.touched.name && editFormik.errors.name}
                id="name"
                name="name"
                value={editFormik.values.name}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="name"
              />
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Interest Rate
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.value && Boolean(editFormik.errors.value)
                }
                helperText={editFormik.touched.value && editFormik.errors.value}
                id="value"
                name="value"
                value={editFormik.values.value}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="value"
              />

              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Mandi Rate
              </LoadingButton>
            </form>
          </Grid>
        </Box>
        {/* <Table  rows={row} columns={columns} /> */}

      </Modal>
      {/* =============== VIEW_TABLE ================================================ */}
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={viewTable}
        onClose={() => setViewTable(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={theme.custom.modal}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: '#8B5704',
                fontWeight: 'bolder',
              }}
            >
              Add Collection
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                fontWeight: 'bold',
              }}
            >
              Add Collection for products used in E-commerce
            </Typography>

            <form onSubmit={addFormik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 7,
                  fontWeight: 600,
                }}
              >
                Collection Type Name
              </Typography>
              <CustomTextField
                error={addFormik.touched.name && Boolean(addFormik.errors.name)}
                helperText={addFormik.touched.name && addFormik.errors.name}
                id="name"
                name="name"
                value={addFormik.values.name}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Collection Type name"
              />

              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Collection
              </LoadingButton>
            </form>
          </Grid>
        </Box> */}
        <Table rows={tableQuery.data?.docs} columns={columns} />
      </Modal>
      {/* ================== EDIT_TABLE  ================================= */}
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={editTable}
        onClose={() => setEditTable(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={theme.custom.modal}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: '#8B5704',
                fontWeight: 'bolder',
              }}
            >
              Edit Mandi interest rate
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                fontWeight: 'bold',
              }}
            >
              Edit Mandi interest rate for gold rates
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Minimum Month
              </Typography>

              <CustomTextField
                error={formik.touched.minMonth && Boolean(formik.errors.minMonth)}
                helperText={formik.touched.minMonth && formik.errors.minMonth}
                id="minMonth"
                name="minMonth"
                typ="number"
                value={formik.values?.minMonth}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Min.Month"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Maximum Month
              </Typography>

              <CustomTextField
                error={formik.touched.maxMonth && Boolean(formik.errors.maxMonth)}
                helperText={formik.touched.maxMonth && formik.errors.maxMonth}
                id="maxMonth"
                name="maxMonth"
                typ="number"
                value={formik.values?.maxMonth}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Max.Month"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Loan Interest
              </Typography>

              <CustomTextField
                error={formik.touched.interest && Boolean(formik.errors.interest)}
                helperText={formik.touched.interest && formik.errors.interest}
                id="interest"
                name="interest"
                typ="number"
                value={formik.values?.interest}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="interest"
              />

              <LoadingButton
                disabled={loanInterestMutation.isLoading}
                loading={loanInterestMutation.isLoading}
                type="submit"
               sx={theme.custom.editButton}
              >
                Edit Loan Interest
              </LoadingButton>
            </form>
          </Grid>
        </Box>
        {/* <Table rows={tableQuery.data?.docs} columns={columns} /> */}
      </Modal>
      {/* =============================================================== */}
      <Typography variant="h5" sx={{ color: '#8B5704', marginBottom: 3, mt: 5, p: 5 }}>
        Treasury Gold Mandi View
      </Typography>
      <Grid
        spacing={5}
        container
        sx={{ p: 5 }}
      >

        {query.data?.docs.map(x => (

          <Grid item lg={4} sm={4} xs={12}>
            <BuySaveCard
              name={x.name}
              value={x.value}
              data={x}
              formik={editFormik}
              setShowEdit={setShowEdit}
            />
          </Grid>
        ))
        }

        <Grid item lg={4} sm={4} xs={12}>
          <MandiCard name="Interest Rate" view value={12} setViewTable={setViewTable} />
        </Grid>

      </Grid>{' '}
    </>
  );
}
Mandi.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
