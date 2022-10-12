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
  getLoanInterest,
  deleteLoanInterest,
  postLoanInterest,
  updateLoanInterest,
} from 'src/apis/loanInterest';
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
import { useController } from 'src/controller/loanInterest';
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
//=======================================================
export default function LoanInterest() {
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
  //===============
   const columns = [
     {
       field: 'interest',
       headerName: 'Interest',
       width: 150,
       editable: true,
       flex:1,
       renderCell: (params) => (
        <p style={theme.custom.typography.table}>{params.value} %</p>
      ),
     },
    {
      field: 'minMonth',
      headerName: 'Minimum Month',
      width: 150,
      editable: true,
      flex:1,
      renderCell: (params) => (
        <p style={{color:"black",textAlign:"center"}}>{params.row.minMonth} month</p>
      ),
      
    },
    {
      field: 'maxMonth',
      headerName: 'Maximum Month',
      width: 150,
      editable: true,
      flex:1,
      renderCell: (params) => (
        console.log("--->",params.row),
        <p style={{color:"black",textAlign:"center"}}>{params.row.maxMonth} month</p>
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
          deleting={deleteLoanInterest}
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
        <title>Dashboard | Loan Interest </title>
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
              Edit Loan Interest
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 1,
                fontWeight: 'bold',
              }}
            >
              Edit Loan Interest for products used in E-commerce
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
                Minimum Month
              </Typography>

              <CustomTextField
                error={editForm.touched.minMonth && Boolean(editForm.errors.minMonth)}
                helperText={editForm.touched.minMonth && editForm.errors.minMonth}
                id="minMonth"
                name="minMonth"
                type="number"
                value={editForm.values.minMonth}
                onChange={editForm.handleChange}
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
                error={editForm.touched.maxMonth && Boolean(editForm.errors.maxMonth)}
                helperText={editForm.touched.maxMonth && editForm.errors.maxMonth}
                id="maxMonth"
                name="maxMonth"
                type="number"
                value={editForm.values.maxMonth}
                onChange={editForm.handleChange}
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
                error={editForm.touched.interest && Boolean(editForm.errors.interest)}
                helperText={editForm.touched.interest && editForm.errors.interest}
                id="interest"
                name="interest"
                type="number"
                value={editForm.values.interest}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="interest"
              />
              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Loan Interest
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
              Add Loan Interest
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Loan Interest for products used in E-commerce
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
                Minimum Month
              </Typography>

              <CustomTextField
                error={addForm.touched.minMonth && Boolean(addForm.errors.minMonth)}
                helperText={addForm.touched.minMonth && addForm.errors.minMonth}
                id="minMonth"
                name="minMonth"
                type="number"
                value={addForm.values.minMonth}
                onChange={addForm.handleChange}
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
                error={addForm.touched.maxMonth && Boolean(addForm.errors.maxMonth)}
                helperText={addForm.touched.maxMonth && addForm.errors.maxMonth}
                id="maxMonth"
                name="maxMonth"
                type="number"
                value={addForm.values.maxMonth}
                onChange={addForm.handleChange}
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
                error={addForm.touched.interest && Boolean(addForm.errors.interest)}
                helperText={addForm.touched.interest && addForm.errors.interest}
                id="interest"
                name="interest"
                type="number"
                value={addForm.values.interest}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="interest"
              />

              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Loan Interest
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
            Loan Interest View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Loan Interest
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
LoanInterest.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
