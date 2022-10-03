import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Modal,
  Box,
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
  getCertificate,
  deleteCertificate,
  postCertificate,
  updateCertificate,
} from 'src/apis/certificate';
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
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
import { useController } from 'src/controller/certificate';
//=======================================================
export default function Certificate() {

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
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <p style={theme.custom.typography.table}>{params.value}</p>
      ),
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
          deleting={deleteCertificate}
        />
      ),
      flex: 1
    }
  ];
  if (query.isLoading) return <Loading />
  console.log(query.data.docs)
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Certificate </title>
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
        aria-describedby="modal-modal-name"
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
              Edit Certificate
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Certificate for products used in E-commerce
            </Typography>

            <form onSubmit={editForm.handleSubmit}>

              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Certificate Title
              </Typography>
              <CustomTextField
                multiline
                error={
                  editForm.touched.name &&
                  Boolean(editForm.errors.name)
                }
                helperText={
                  editForm.touched.name &&
                  editForm.errors.name
                }
                id="name"
                name="name"
                value={editForm.values.name}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label=" name"
              />

              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Certificate
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
        aria-describedby="modal-modal-name"
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
              Add Certificate
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Certificate for products used in E-commerce
            </Typography>

            <form onSubmit={addForm.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Certificate Title
              </Typography>
              <CustomTextField
                multiline
                error={
                  addForm.touched.name &&
                  Boolean(addForm.errors.name)
                }
                helperText={
                  addForm.touched.name &&
                  addForm.errors.name
                }
                id="name"
                name="name"
                value={addForm.values.name}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label=" name"
              />
              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Certificate
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
            Certificate View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Certificate
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query?.data?.docs} columns={columns} />
    </>
  );
}
Certificate.getLayout = (page) => <DashboardLayout >{page}</DashboardLayout>;
