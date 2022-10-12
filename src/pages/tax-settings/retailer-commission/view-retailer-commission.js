import Head from 'next/head';
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

import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getGst, deleteGst, postGst, updateGst } from 'src/apis/hsn';

import React, { useEffect } from 'react';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import { useTheme } from '@mui/styles';
import { CustomTextField } from 'src/components/customMUI';
import { BuySaveCard } from 'src/components/cards/buySaveCard';
import { getCalculation, updateCalculation } from 'src/apis/calculation';

//=======================================================
export default function RetailerCommission() {
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
    queryKey: 'retailerCommission',
    queryFn: () => getCalculation("Retailer Commission"),

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
     
      <Typography sx={[theme.custom.typography.dashBoard.h1, { mt: 8, mb: 1, p: 2 }]}>
        Retailer Commission View
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
RetailerCommission.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;