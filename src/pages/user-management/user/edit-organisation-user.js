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
import { useController } from 'src/controller/orgUser';
//=======================================================
export default function EditOrganisationUser() {
  const router = useRouter();

  const {
    edit,
    editForm,
    query,
    roleQuery,
  } = useController()

  const user = useQuery({
    queryKey: ['OrgaUser', router.query.id],
    queryFn: () => getUserById(router.query.id),
    onSuccess: (res) => editForm.setValues(res),
    enabled: !!router.query.id,
  });
  
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
                User Name
              </Typography>
              <CustomTextField
                error={
                  editForm.touched.fullName && Boolean(editForm.errors.fullName)
                }
                helperText={editForm.touched.fullName && editForm.errors.fullName}
                id="fullName"
                name="fullName"
                value={editForm.values.fullName}
                onChange={editForm.handleChange}
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
                error={editForm.touched.email && Boolean(editForm.errors.email)}
                helperText={editForm.touched.email && editForm.errors.email}
                id="email"
                name="email"
                value={editForm.values.email}
                onChange={editForm.handleChange}
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
                error={editForm.touched.mobile && Boolean(editForm.errors.mobile)}
                helperText={editForm.touched.mobile && editForm.errors.mobile}
                id="mobile"
                name="mobile"
                value={editForm.values.mobile}
                onChange={editForm.handleChange}
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
                error={editForm.touched.dob && Boolean(editForm.errors.dob)}
                helperText={editForm.touched.dob && editForm.errors.dob}
                id="dob"
                name="dob"
                value={editForm.values.dob}
                onChange={editForm.handleChange}
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
                  editForm.touched.password && Boolean(editForm.errors.password)
                }
                helperText={editForm.touched.password && editForm.errors.password}
                id="password"
                name="password"
                value={editForm.values.password}
                onChange={editForm.handleChange}
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
                  value={editForm.values.role}
                  onChange={editForm.handleChange}
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
                  disabled={edit.isLoading}
                  loading={edit.isLoading}
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
