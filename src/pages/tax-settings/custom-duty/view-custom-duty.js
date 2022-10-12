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
import { useController } from 'src/controller/customDuty';
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
//=======================================================
export default function CustomDuty() {
  
  const theme = useTheme();

  const {
    add,
    edit,
    addForm,
    editForm,
    query,
    setShowAdd,
    showAdd,
    setShowEdit,
    showEdit
  } = useController()

  if (query.isLoading) return <Loading />;
  console.log("---",query)
  //===============
  const columns = [
    {
      field: 'name', 
      headerName: 'Custom Duty Name',
       width: 150,
        flex: 1,
        renderCell: (params) => (
          <p style={theme.custom.typography.table}>{params.value}</p>
        ),
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
      renderCell: (params) => (
        <EditButton
          onClick={() => {
            editForm.setValues(params.row);
            setShowEdit(params.row);
          }}
        />),
      flex: 1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <DeleteButton
          id={params.id}
          deleting={deleteCustomDuty}
        />
      ),
      flex: 1
    }
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

            <form onSubmit={editForm.handleSubmit}>
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
                error={editForm.touched.name && Boolean(editForm.errors.name)}
                helperText={editForm.touched.name && editForm.errors.name}
                id="name"
                name="name"
                value={editForm.values.name}
                onChange={editForm.handleChange}
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
                error={editForm.touched.value && Boolean(editForm.errors.value)}
                helperText={editForm.touched.value && editForm.errors.value}
                id="value"
                name="value"
                type="number"
                value={editForm.values.value}
                onChange={editForm.handleChange}
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
                error={editForm.touched.surcharge && Boolean(editForm.errors.surcharge)}
                helperText={editForm.touched.surcharge && editForm.errors.surcharge}
                id="surcharge"
                name="surcharge"
                type="number"
                value={editForm.values.surcharge}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty surcharge"
              />
              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
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

            <form onSubmit={addForm.handleSubmit}>
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
                error={addForm.touched.name && Boolean(addForm.errors.name)}
                helperText={addForm.touched.name && addForm.errors.name}
                id="name"
                name="name"
                value={addForm.values.name}
                onChange={addForm.handleChange}
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
                error={addForm.touched.value && Boolean(addForm.errors.value)}
                helperText={addForm.touched.value && addForm.errors.value}
                id="value"
                name="value"
                type="number"
                value={addForm.values.value}
                onChange={addForm.handleChange}
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
                error={addForm.touched.surcharge && Boolean(addForm.errors.surcharge)}
                helperText={addForm.touched.surcharge && addForm.errors.surcharge}
                id="surcharge"
                name="surcharge"
                type="number"
                value={addForm.values.surcharge}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty surcharge"
              />
              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
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
      <Table rows={query?.data?.docs} columns={columns} />
    </>
  );
}
CustomDuty.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;






