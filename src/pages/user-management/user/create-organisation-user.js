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
import { postUser } from 'src/apis/user';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import Loading from 'src/components/loading';
import { useController } from 'src/controller/orgUser';
//=======================================================
export default function AddOrganisationUser() {
  const router = useRouter();

  // const theme = useTheme();
  const {
    add,
    addForm,
    roleQuery,
    showEdit
  } = useController()



  // const roleQuery = useQuery({
  //   queryFn: () => getRole(),
  //   onSuccess: () => console.log('Success !'),
  // });

  if (roleQuery.isLoading) return <Loading />

  console.log("roles ===", roleQuery.data.docs)
  //===============
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-User </title>
      </Head>
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
          Add User
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Add Bks MyGold organisation user
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
                User Name
              </Typography>
              <CustomTextField
                error={
                  addForm.touched.fullName && Boolean(addForm.errors.fullName)
                }
                helperText={addForm.touched.fullName && addForm.errors.fullName}
                id="fullName"
                name="fullName"
                value={addForm.values.fullName}
                onChange={addForm.handleChange}
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
                error={addForm.touched.email && Boolean(addForm.errors.email)}
                helperText={addForm.touched.email && addForm.errors.email}
                id="email"
                name="email"
                value={addForm.values.email}
                onChange={addForm.handleChange}
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
                error={addForm.touched.mobile && Boolean(addForm.errors.mobile)}
                helperText={addForm.touched.mobile && addForm.errors.mobile}
                id="mobile"
                name="mobile"
                value={addForm.values.mobile}
                onChange={addForm.handleChange}
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
                error={addForm.touched.dob && Boolean(addForm.errors.dob)}
                helperText={addForm.touched.dob && addForm.errors.dob}
                id="dob"
                type='date'
                name="dob"
                value={addForm.values.dob}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
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
                  addForm.touched.password && Boolean(addForm.errors.password)
                }
                helperText={addForm.touched.password && addForm.errors.password}
                id="password"
                name="password"
                value={addForm.values.password}
                onChange={addForm.handleChange}
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
                  value={addForm.values.role}
                  onChange={addForm.handleChange}
                  name="role"
                >
                  {roleQuery.data?.docs?.map((x) => (
                    <MenuItem key="weight" value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
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
                Department
              </Typography>
              <CustomTextField
                error={
                  addForm.touched.department && Boolean(addForm.errors.department)
                }
                helperText={addForm.touched.department && addForm.errors.department}
                id="department"
                name="department"
                value={addForm.values.department}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="department"
              />


              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <LoadingButton
                  disabled={add.isLoading}
                  loading={add.isLoading}
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
                  Add User
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
AddOrganisationUser.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
