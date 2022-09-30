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
import { getCustomDuty, deleteCustomDuty, postCustomDuty, updateCustomDuty } from 'src/apis/customDuty';

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
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
//=======================================================
export default function CustomDuty() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      name: "",
      value: 0,
      surcharge: 0,
    },
    validationSchema: yup.object({
      name: yup.string("Enter Custom Duty Name").required("Custom Duty Name is required"),
      value: yup.number("Enter Custom Duty value ").required("Custom Duty value is required"),
      surcharge: yup
        .number("Enter Custom Duty surcharge ")
        .required("Custom Duty surcharge is required"),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      name: "",
      value: 0,
      surcharge: 0,
    },
    validationSchema: yup.object({
      name: yup.string("Enter Custom Duty Name").required("Custom Duty Name is required"),
      value: yup.number("Enter Custom Duty value ").required("Custom Duty value is required"),
      surcharge: yup
        .number("Enter Custom Duty surcharge ")
        .required("Custom Duty surcharge is required"),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Custom Duty',
    queryFn: () => getCustomDuty(),
  });

  const addMutation = useMutation({
    mutationFn: postCustomDuty,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Custom Duty Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateCustomDuty,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Custom Duty Updated !', 'Continue with the e-comm panel', 'success');
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
        deleting={deleteCustomDuty}
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'name', headerName: 'Custom Duty Name', width: 150, flex: 1
    },
    {
      field: 'value', headerName: 'Custom Duty value', width: 150, flex: 1
    },
    {
      field: 'surcharge', headerName: 'Custom Duty surcharge', width: 150, flex: 1
    },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: editButton,
      flex: 1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: deleteButton,
      flex: 1

    },
  ];
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Custom Duty </title>
      </Head>
      {/* ================= EDIT ================================== */}
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
              Edit Custom Duty
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 1,
                fontWeight: 'bold',
              }}
            >
              Edit Custom Duty for products used in E-commerce
            </Typography>

            <form onSubmit={editFormik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Custom Duty Name
              </Typography>
              <CustomTextField
                error={editFormik.touched.name && Boolean(editFormik.errors.name)}
                helperText={editFormik.touched.name && editFormik.errors.name}
                id="name"
                name="name"
                value={editFormik.values.name}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty name"
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
                Custom Duty Value
              </Typography>
              <CustomTextField
                error={editFormik.touched.value && Boolean(editFormik.errors.value)}
                helperText={editFormik.touched.value && editFormik.errors.value}
                id="value"
                name="value"
                type="number"
                value={editFormik.values.value}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty value"
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
                Custom Duty surcharge
              </Typography>
              <CustomTextField
                error={editFormik.touched.surcharge && Boolean(editFormik.errors.surcharge)}
                helperText={editFormik.touched.surcharge && editFormik.errors.surcharge}
                id="surcharge"
                name="surcharge"
                type="number"
                value={editFormik.values.surcharge}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty surcharge"
              />
              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Custom Duty
              </LoadingButton>
            </form>
          </Grid>
        </Box>
      </Modal>
      {/* =============== ADD ================================================ */}
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={showAdd}
        onClose={() => setShowAdd(false)}
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
              Add Custom Duty
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Custom Duty for products used in E-commerce
            </Typography>

            <form onSubmit={addFormik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Custom Duty Name
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
                label="Custom Duty name"
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
                Custom Duty Value
              </Typography>
              <CustomTextField
                error={addFormik.touched.value && Boolean(addFormik.errors.value)}
                helperText={addFormik.touched.value && addFormik.errors.value}
                id="value"
                name="value"
                type="number"
                value={addFormik.values.value}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty value"
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
                Custom Duty surcharge
              </Typography>
              <CustomTextField
                error={addFormik.touched.surcharge && Boolean(addFormik.errors.surcharge)}
                helperText={addFormik.touched.surcharge && addFormik.errors.surcharge}
                id="surcharge"
                name="surcharge"
                type="number"
                value={addFormik.values.surcharge}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty surcharge"
              />
              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Custom Duty
              </LoadingButton>
            </form>
          </Grid>
        </Box>
      </Modal>
      {/* =============================================================== */}
      <Grid
        sx={{
          marginLeft: 5,
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
        container
      >
        <Grid item>
          <Typography variant="h5" sx={{ color: '#8B5704', marginBottom: 3 }}>
            Custom Duty View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Custom Duty
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
CustomDuty.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;






