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
import { deleteSubAds } from 'src/apis/subAds';
//=======================================================
export default function SubscriptionsAds() {
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
      field: 'position',
      headerName: 'Position',
      width: 150,
      flex: 1,
      renderCell: (params) => (
        <p style={theme.custom.typography.table}>{params.row.position}</p>
      ),
    },
    {
      field: 'validity',
      headerName: 'Validity',
      width: 150,
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      flex: 1,

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
          deleting={deleteSubAds}
        />
      ),
      flex: 1
    }
  ];

  const row = [
    {
      id: 1,
      position: "Senior",
      validity: "12/2/2025",
      price: 20
    },
    {
      id: 2,
      position: "Junior",
      validity: "12/2/2025",
      price: 20
    },
    {
      id: 3,
      position: "Mid",
      validity: "12/2/2025",
      price: 20
    },

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
              Edit Subscriptions Bids
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 1,
                fontWeight: 'bold',
              }}
            >
              Edit Subscriptions Bids for Bid Module
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
                Position
              </Typography>
              <CustomTextField
                error={editForm.touched.position && Boolean(editForm.errors.position)}
                helperText={editForm.touched.position && editForm.errors.position}
                id="position"
                name="position"
                value={editForm.values.position}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="position"
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
                Validity
              </Typography>
              <CustomTextField
                error={editForm.touched.validity && Boolean(editForm.errors.validity)}
                helperText={editForm.touched.validity && editForm.errors.validity}
                id="validity"
                name="validity"
                type="text"
                value={editForm.values.validity}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="validity"
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
                Price
              </Typography>
              <CustomTextField
                error={editForm.touched.price && Boolean(editForm.errors.price)}
                helperText={editForm.touched.price && editForm.errors.price}
                id="price"
                name="price"
                type="number"
                value={editForm.values.price}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="price"
              />
              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Bids
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
              Add Subscriptions Bids
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Subscriptions Bids for Bid Module
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
                Position
              </Typography>
              <CustomTextField
                error={addForm.touched.position && Boolean(addForm.errors.position)}
                helperText={addForm.touched.position && addForm.errors.position}
                id="position"
                name="position"
                value={addForm.values.position}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="position"
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
                Validity
              </Typography>
              <CustomTextField
                error={addForm.touched.validity && Boolean(addForm.errors.validity)}
                helperText={addForm.touched.validity && addForm.errors.validity}
                id="validity"
                name="validity"
                type="text"
                value={addForm.values.validity}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="validity"
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
                Price
              </Typography>
              <CustomTextField
                error={addForm.touched.price && Boolean(addForm.errors.price)}
                helperText={addForm.touched.price && addForm.errors.price}
                id="price"
                name="price"
                type="number"
                value={addForm.values.price}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="price"
              />
              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Bids
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
            Subscriptions Ads View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Subscriptions Ads
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={row} columns={columns} />
    </>
  );
}
SubscriptionsAds.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;