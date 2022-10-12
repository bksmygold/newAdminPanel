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
import { postUnit } from 'src/apis/unit';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useTheme } from '@emotion/react';
import { getReferralType } from 'src/apis/referraltype';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import { postVipReferral } from 'src/apis/referralUser';
import Loading from 'src/components/loading';
import { useController } from 'src/controller/vipReferral';
//=======================================================
export default function AddVipReferral() {
  //=======================
  const router = useRouter();
  const theme = useTheme();
  const {add,addForm} = useController()
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-VIP Referral </title>
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
          Add VIP Referral
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Add VIP Referral Users for schemes for propmotions
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
                Referral Users Name
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
                Referral Code
              </Typography>
              <CustomTextField
                // error={
                //   addForm.touched.referral.code &&
                //   Boolean(addForm.errors.referral.code)
                // }
                // helperText={
                //   addForm.touched.referral.code && addForm.errors.referral.code
                // }
                id="referral.code"
                name="referral.code"
                value={addForm.values.referral.code}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="referral code"
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
                Is Whatsapp
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="isWhatsapp"
                  value={addForm.values.isWhatsapp}
                  onChange={addForm.handleChange}
                  name="isWhatsapp"
                >
                  <MenuItem key="weight" value={true}>
                    Yes
                  </MenuItem>
                  <MenuItem key="value" value={false}>
                    No
                  </MenuItem>
                </Select>
              </CustomFormControl>

              {/* <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Type
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="referral.type"
                  value={addForm.values.referral.type}
                  onChange={addForm.handleChange}
                  name="referral.type"
                  >
                  {referralTypeQuery.data.docs.map(x=>(

                  <MenuItem key={x.id} value={x.id}>
                    {x.userType}
                  </MenuItem>
                  ))}
                  
                </Select>
              </CustomFormControl> */}

              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Subscriptions
              </Typography>
              <CustomTextField
                // error={
                //   addForm.touched.referral.subscriptions &&
                //   Boolean(addForm.errors.referral.subscriptions)
                // }
                // helperText={
                //   addForm.touched.referral.subscriptions && addForm.errors.referral.subscriptions
                // }
                id="referral.subscriptions"
                type="number"
                name="referral.subscriptions"
                value={addForm.values.referral.subscriptions}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="subscriptions"
                sx={{ mt: 1 }}
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
                Downloads
              </Typography>
              <CustomTextField
                // error={
                //   addForm.touched.referral.downloads && Boolean(addForm.errors.referral.downloads)
                // }
                // helperText={addForm.touched.referral.downloads && addForm.errors.referral.downloads}
                id="referral.downloads"
                type="number"
                name="referral.downloads"
                value={addForm.values.referral.downloads}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="downloads"
                sx={{ mt: 1 }}
              />

              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
                type="submit"
                sx={[theme.custom.editButton,{mt:2}]}
                fullWidth
              >
                Add VIP Referral
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddVipReferral.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
