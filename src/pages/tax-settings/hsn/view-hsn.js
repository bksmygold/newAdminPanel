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
import { getGst, deleteGst, postGst, updateGst, deleteHsn } from 'src/apis/hsn';

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
import { useController } from 'src/controller/hsn';
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
//=======================================================
export default function Hsn() {
  const router = useRouter();
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

  //=======================

  if (query.isLoading) return <Loading />;


  const columns = [
    {
      field: 'description',
      headerName: 'Descriptions',
      width: 150,
      flex: 1,
      renderCell: (params) => (
        <p style={theme.custom.typography.table}>{params.value}</p>
      ),
    },
    {
      field: 'code',
      headerName: 'HSN Code',
      width: 150,
      flex: 1,
    },
    {
      field: 'gst', 
      headerName: 'GST', 
      width: 150,
       flex: 1,
       renderCell: (params) => (
        <p style={{color:"black"}}>{params.row.gst} %</p>
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
          deleting={deleteHsn}
        />
      ),
      flex: 1
    }
  ];

  const row = [
    {
      id: 1,
      code: "BKS3690",
      value: 20
    },
    {
      id: 2,
      code: "BKS3690",
      value: 20
    },
    {
      id: 3,
      code: "BKS3690",
      value: 20
    }
  ]
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard |HSN/GSt </title>
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
              Edit HSN/GST
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 1,
                fontWeight: 'bold',
              }}
            >
              Edit HSN/GST for products used in E-commerce
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
                HSN Code
              </Typography>
              <CustomTextField
                error={editForm.touched.code && Boolean(editForm.errors.code)}
                helperText={editForm.touched.code && editForm.errors.code}
                id="code"
                name="code"
                value={editForm.values.code}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="HSN Code"
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
                Description
              </Typography>
              <CustomTextField
                error={editForm.touched.description && Boolean(editForm.errors.description)}
                helperText={editForm.touched.description && editForm.errors.description}
                id="description"
                name="description"
                type="text"
                value={editForm.values.description}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Description"
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
                Gst
              </Typography>
              <CustomTextField
                error={editForm.touched.gst && Boolean(editForm.errors.gst)}
                helperText={editForm.touched.gst && editForm.errors.gst}
                id="gst"
                name="gst"
                type="number"
                value={editForm.values.gst}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="GST"
              />
              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit HSN/GST
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
              Add HSN/GST
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add HSN/GST for products used in E-commerce
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
                HSN Code
              </Typography>
              <CustomTextField
                error={addForm.touched.code && Boolean(addForm.errors.code)}
                helperText={addForm.touched.code && addForm.errors.code}
                id="code"
                name="code"
                value={addForm.values.code}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="HSN Code"
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
                Description
              </Typography>
              <CustomTextField
                error={addForm.touched.description && Boolean(addForm.errors.description)}
                helperText={addForm.touched.description && addForm.errors.description}
                id="description"
                name="description"
                type="text"
                value={addForm.values.description}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="Description"
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
                Gst
              </Typography>
              <CustomTextField
                error={addForm.touched.gst && Boolean(addForm.errors.gst)}
                helperText={addForm.touched.gst && addForm.errors.gst}
                id="gst"
                name="gst"
                type="number"
                value={addForm.values.gst}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="GST"
              />
              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add HSN/GST
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
            HSN/GST View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create HSN/GST
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
Hsn.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;






