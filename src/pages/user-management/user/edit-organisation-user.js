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
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCyclePeriod } from 'src/apis/cyclePeriod';
import { getRole } from 'src/apis/role';
import { getUserById, postUser, updateUser } from 'src/apis/user';
import Loading from 'src/components/loading';

import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
//=======================================================
export default function EditOrganisationUser() {
  const router = useRouter();

  //=======================

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      mobile: '',
      userType: 2,
      accountType: 'individual',
      dob: '',
      password: '',
      eInvoiceApplicable: false,
      isWhatsapp: true,
      mfaEnabled: true,
      isPrivacyAccepted: true,
      role: '',
    },
    validationSchema: yup.object({
      fullName: yup.string('Enter  Name').required('Name is required'),
      email: yup.string('Enter  email').required('email is required'),
      mobile: yup.string('Enter  mobile').required('mobile is required'),
     
      dob: yup.string('Enter  dob').required('dob is required'),

      password: yup.string('Enter password').required('password is required'),
      role: yup.string('Choose role').required('role is required'),
    }),
    onSubmit: (values) => {
      userMutation.mutate({data:values,id:router.query.id});
    },
  });

const query = useQuery({
  queryKey: ['OrgaUser', router.query.id],
  queryFn: () => getUserById(router.query.id),
  onSuccess: (res) => formik.setValues(res),
  enabled: !!router.query.id,
});

  const userMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (res) => {
      swal('User Updated !', "User details has been updated", 'success'),
        router.push('/userManagement/user/view-organisationUser');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
  });

  const roleQuery = useQuery({
    queryFn: () => getRole(),
    onSuccess: () => console.log('Success !'),
  });
  //===============
  console.log("error --", formik.errors)
  if(query.isLoading){
    return(
      <Loading/>
    )
  }
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-User </title>
      </Head>
      <Container
        sx={{
          padding: 5,
          borderRadius: 2,
          boxShadow: '0px 4px 1px 0px #d2c6c6',
          marginTop: 5,
          border: '1px solid #d2c6c657',
          backgroundColor: 'white',
          minWidth:"100%"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#8B5704',
          }}
        >
          Edit User
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Edit Bks MyGold organisation user
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
          <Grid item sm={8} xs={12}>
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
                User Name
              </Typography>
              <CustomTextField
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="full name"
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
                Email
              </Typography>
              <CustomTextField
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="email"
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
                Mobile
              </Typography>
              <CustomTextField
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                id="mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="mobile"
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
                DOB
              </Typography>
              <CustomTextField
                error={formik.touched.dob && Boolean(formik.errors.dob)}
                helperText={formik.touched.dob && formik.errors.dob}
                id="dob"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="dob"
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
                Password
              </Typography>
              <CustomTextField
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="password"
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
                Role
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  name="role"
                >
                  {roleQuery.data?.docs?.map((x) => (
                    <MenuItem key="weight" value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <LoadingButton
                  disabled={userMutation.isLoading}
                  loading={userMutation.isLoading}
                  type="submit"
                  sx={{
                    width: '50%',
                    marginTop: 2,
                    background: 'linear-gradient(43deg, #8b5704, #ddb070)',
                    border: 'none',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#DBA251',
                    },
                  }}
                >
                  Edit User
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
EditOrganisationUser.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
