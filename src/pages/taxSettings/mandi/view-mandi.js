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

//=======================================================
export default function Mandi() {
  const router = useRouter();
  const theme = useTheme();

  const [viewTable, setViewTable] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
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
    },
    validationSchema: yup.object({
      name: yup.string('Enter Collection Name').required('Collection is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Collection',
    queryFn: () => getCollection(),
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
    mutationFn: updateCollection,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Collection Updated !', 'Continue with the e-comm panel', 'success');
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
            editFormik.setValues(params.row);
            setShowEdit(params.row);
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
      field: 'months',
      headerName: 'Holding in months',
      width: 250,
      editable: true, flex: 1
    },
    {
      field: 'value',
      headerName: '% bonus',
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

  const row= [
    {
      id:1,
      months:"1 month",
      value:"1%"
    },
    {
      id:14,
      months:"3 month",
      value:"2%"
    },
    {
      id:15,
      months:"6 month",
      value:"4%"
    },
    {
      id:14,
      months:"12 month",
      value:"5%"
    },
  ]
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Collection </title>
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
                Mandi Interest Rate
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
                label="Mandi"
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
      <Table  rows={row} columns={columns} />
      </Modal>
      {/* =============================================================== */}
      <Typography variant="h5" sx={{ color: '#8B5704', marginBottom: 3 }}>
        Treasury Gold Mandi View
      </Typography>
      <Grid
        spacing={5}
        container
        sx={{ p: 5 }}
      >

        <Grid item lg={6} sm={6} xs={12}>
          <MandiCard name="Treasury Gold Mandi Rate" value={12} setShowEdit={setShowEdit}/>
        </Grid>

        <Grid item lg={6} sm={6} xs={12}>
          <MandiCard name="Interest Rate" view value={12} setViewTable={setViewTable}/>
        </Grid>

      </Grid>{' '}
    </>
  );
}
Mandi.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
