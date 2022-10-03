import Head from 'next/head';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Grid,
  Button,
  styled,
  TextField,
  Box,
} from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import FormInput from '../../../components/utility/formInput';
import Form from '../../../components/utility/form';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { postPlan } from 'src/apis/plan';
import { useMutation } from '@tanstack/react-query';
import { getCyclePeriod } from 'src/apis/cyclePeriod';
import { useTheme } from '@mui/styles';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import { useController } from 'src/controller/plan';
//=======================================================
export default function AddPlan() {
  const [cycle, setCycle] = useState([]);
  useEffect(() => {
    getCyclePeriod().then((res) => setCycle(res.docs));
  }, []);
  //=======================
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
  
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Plan </title>
      </Head>
      {/* ------------------------------ */}
      <Container
        sx={{
          padding: 5,
          borderRadius: 2,
          boxShadow: '0px 4px 1px 0px #d2c6c6',
          marginTop: 5,
          border: '1px solid #d2c6c657',
          backgroundColor: 'white',
          minWidth: "100%"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#8B5704',
          }}
        >
          Add plan
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Add plan for Buy and Save Modules
        </Typography>
        {/* ------------------------------ */}

        <Grid
          sx={{
            padding: 5,
            borderRadius: 2,
            boxShadow: '0px 4px 1px 0px #d2c6c6',
            marginTop: 5,
            border: '1px solid #d2c6c657',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          container
        >
          <Grid item xs={8}>
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
                Plan Name
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
                label="Plan name"
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
                Plan Mode
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="mode"
                  value={addForm.values.mode}
                  onChange={addForm.handleChange}
                  name="mode"
                >
                  <MenuItem key="weight" value="weight">
                    By Weight
                  </MenuItem>
                  <MenuItem key="value" value="value">
                    By Value
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Plan Type
              </Typography>
              <CustomTextField
                error={addForm.touched.type && Boolean(addForm.errors.type)}
                helperText={addForm.touched.type && addForm.errors.type}
                id="type"
                name="type"
                value={addForm.values.type}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="type"
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
                Plan Duration
              </Typography>
              <CustomTextField
                error={
                  addForm.touched.duration && Boolean(addForm.errors.duration)
                }
                helperText={addForm.touched.duration && addForm.errors.duration}
                id="duration"
                name="duration"
                type="number"
                value={addForm.values.duration}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="duration"
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
                Plan Min
              </Typography>
              <CustomTextField
                error={addForm.touched.min && Boolean(addForm.errors.min)}
                helperText={addForm.touched.min && addForm.errors.min}
                id="min"
                type="number"
                name="min"
                value={addForm.values.min}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="min"
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
                Cycle Period
              </Typography>
              <CustomFormControl fullWidth>
               
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="cyclePeriod"
                  value={addForm.values.cyclePeriod}
                  onChange={addForm.handleChange}
                  name="cyclePeriod"
                >
                  {cycle.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <LoadingButton
                  disabled={add.isLoading}
                  loading={add.isLoading}
                  type="submit"
                  fullWidth
                  sx={theme.custom.addButton}
                >
                  Add Plan
                </LoadingButton>
              </Box>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddPlan.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
