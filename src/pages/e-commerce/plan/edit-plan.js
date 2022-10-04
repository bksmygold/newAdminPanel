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
import { getPlanById, updatePlan } from 'src/apis/plan';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCyclePeriod } from 'src/apis/cyclePeriod';
import { useTheme } from '@mui/styles';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import { useController } from '../../../controller/plan'
//=======================================================
export default function EditPlan() {
  const [cycle, setCycle] = useState([]);
  useEffect(() => {
    getCyclePeriod().then((res) => setCycle(res.docs));
  }, []);

  const router = useRouter();
  const {
    edit,
    editForm,

  } = useController()
  //=======================

  const theme = useTheme();

  //=======================================================

  const query = useQuery({
    queryKey: ['plan', router.query.id],
    queryFn: () => getPlanById(router.query.id),
    onSuccess: (res) => editForm.setValues(res),
    enabled: !!router.query.id,
  });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Plan </title>
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
          Edit plan
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Edit plan for Buy and Save Modules
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
          <Grid
            item
            sm={8}
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
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
                Plan Name
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
                label="Unit Type name"
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
                  value={editForm.values.mode}
                  onChange={editForm.handleChange}
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
                error={editForm.touched.type && Boolean(editForm.errors.type)}
                helperText={editForm.touched.type && editForm.errors.type}
                id="type"
                name="type"
                value={editForm.values.type}
                onChange={editForm.handleChange}
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
                  editForm.touched.duration && Boolean(editForm.errors.duration)
                }
                helperText={editForm.touched.duration && editForm.errors.duration}
                id="duration"
                name="duration"
                type="number"
                value={editForm.values.duration}
                onChange={editForm.handleChange}
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
                error={editForm.touched.min && Boolean(editForm.errors.min)}
                helperText={editForm.touched.min && editForm.errors.min}
                id="min"
                type="number"
                name="min"
                value={editForm.values.min}
                onChange={editForm.handleChange}
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
                  value={editForm.values.cyclePeriod}
                  onChange={editForm.handleChange}
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
                  disabled={edit.isLoading}
                  loading={edit.isLoading}
                  fullWidth
                  type="submit"
                  sx={theme.custom.addButton}
                >
                  Edit Plan
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
EditPlan.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
