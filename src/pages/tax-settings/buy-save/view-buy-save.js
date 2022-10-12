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
import { getGst, deleteGst, postGst, updateGst } from 'src/apis/hsn';

import React, { useEffect } from 'react';
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
import { BuySaveCard } from 'src/components/cards/buySaveCard';
import { getCalculation, updateCalculation } from 'src/apis/calculation';

//=======================================================
export default function BuySave() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');


  const [calculation, setCalculation] = useState([])
  useEffect(() => {
    getCalculation().then(res => setCalculation(res.docs))
  }, [])
  //=======================

  const editFormik = useFormik({
    initialValues: {

      value: 0,
    },
    validationSchema: yup.object({
      value: yup.number("Enter calculation value ").required("calculation value is required"),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: values.id })
    },
  });

  const query = useQuery({
    queryKey: 'buySave',
    queryFn: () => getCalculation(['Hold','Plan Bonus','Handling Charge']),
    // onSuccess: () => query.refetch()
  });

  const addMutation = useMutation({
    mutationFn: postGst,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Calculation Added !', 'Continue with the tax panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateCalculation,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Calculation Updated !', 'Continue with the tax panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  if (query.isLoading) return <Loading />;
  // console.log("<<-----",query.data.docs)
  //===============

  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | HSN/GSt </title>
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
              Edit Calculation
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 1,
                fontWeight: 'bold',
              }}
            >
              Edit Calculation for plans in the Buys & Save Modules
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
                calculation name
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
                calculation value
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
                label="GST value"
              />
              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Calculation
              </LoadingButton>
            </form>
          </Grid>
        </Box>
      </Modal>
      {/* =============== ADD ================================================ */}
      {/* <Modal
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
                HSN Code
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
                label="HSN code"
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
                GST Value
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
                label="GST value"
              />


              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add HSN/GST
              </LoadingButton>
            </form>
          </Grid>
        </Box>
      </Modal> */}
      {/* =============================================================== */}

      <Typography sx={[theme.custom.typography.dashBoard.h1, { mt: 8, mb: 1, p: 2 }]}>
        Buy & Save View
      </Typography>

      <Grid
        spacing={5}
        container
        sx={{ p: 5 }}
      >
        {query.data.docs.map(x => (

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


      </Grid>
    </>
  );
}
BuySave.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;