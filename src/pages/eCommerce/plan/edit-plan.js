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

//=======================================================
const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
const CustomFormControl = styled(FormControl)`
  & label.Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
//=======================================================
export default function EditPlan() {
  const [cycle, setCycle] = useState([]);
  useEffect(() => {
    getCyclePeriod().then((res) => setCycle(res.docs));
  }, []);
  //=======================
  const router = useRouter();
    const theme = useTheme();

  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: '',
      mode: '',
      type: '',
      duration: 0,
      cyclePeriod: '',
      min: 0,
    },
    validationSchema: yup.object({
      name: yup.string('Enter Unit Name').required('Unit is required'),
      mode: yup.string('Enter mode').required('modeis required'),
      type: yup.string('Enter type').required('type is required'),
      cyclePeriod: yup
        .string('Enter cycle period')
        .required('Cycle Period is required'),
      duration: yup.number('Enter duration').required('duration is required'),
      min: yup.number('Enter minimum').required('minimum is required'),
    }),
    onSubmit: (values) => {
      planMutation.mutate({
        data: values,
        id: router.query.id,
      });
    },
  });

  const query = useQuery({
    queryKey: ['plan', router.query.id],
    queryFn: () => getPlanById(router.query.id),
    onSuccess: (res) => formik.setValues(res),
    enabled: !!router.query.id,
  });

  const planMutation = useMutation({
    mutationFn: updatePlan,
    onSuccess: (res) => {
      swal('Plan Updated !', res.message, 'success'),
        router.push('/plan/view-plan');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Unit </title>
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
            sm={ 8}
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <form onSubmit={formik.handleSubmit}>
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
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
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
                <InputLabel id="demo-simple-select-label">mode</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="mode"
                  value={formik.values.mode}
                  onChange={formik.handleChange}
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
                error={formik.touched.type && Boolean(formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
                id="type"
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
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
                  formik.touched.duration && Boolean(formik.errors.duration)
                }
                helperText={formik.touched.duration && formik.errors.duration}
                id="duration"
                name="duration"
                type="number"
                value={formik.values.duration}
                onChange={formik.handleChange}
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
                error={formik.touched.min && Boolean(formik.errors.min)}
                helperText={formik.touched.min && formik.errors.min}
                id="min"
                type="number"
                name="min"
                value={formik.values.min}
                onChange={formik.handleChange}
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
                <InputLabel id="demo-simple-select-label">
                  cycle period
                </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="cyclePeriod"
                  value={formik.values.cyclePeriod}
                  onChange={formik.handleChange}
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
                  disabled={planMutation.isLoading}
                  loading={planMutation.isLoading}
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
