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
import { getVipReferralById, updateVipReferral } from 'src/apis/referralUser';
import Loading from 'src/components/loading';
import { useController } from 'src/controller/vipReferral';
//=======================================================
export default function EditVipReferral() {
  //=======================
  const router = useRouter();
  const theme = useTheme();

  const { edit, editForm } = useController()


    const query = useQuery({
      queryKey: ['vipReferralUser', router.query.id],
      queryFn: () => getVipReferralById(router.query.id),
      onSuccess: (res) => editForm.setValues(res),
      enabled: !!router.query.id,
    });

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-VIP Referral  </title>
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
          Edit Vip Referral
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Edit Vip   Referral Users for schemes for propmotions
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
                Referral Users Name
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
                Referral Code
              </Typography>
              <CustomTextField
                // error={
                //   editForm.touched.referral.code &&
                //   Boolean(editForm.errors.referral.code)
                // }
                // helperText={
                //   editForm.touched.referral.code && editForm.errors.referral.code
                // }
                id="referral.code"
                name="referral.code"
                value={editForm.values.referral.code}
                onChange={editForm.handleChange}
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
                  value={editForm.values.isWhatsapp}
                  onChange={editForm.handleChange}
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
                  value={editForm.values.referral.type}
                  onChange={editForm.handleChange}
                  name="referral.type"
                  >

                  <MenuItem key={1} value={1}>
                    {editForm.values.referral.type}
                  </MenuItem>
                  
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
                //   editForm.touched.referral.subscriptions &&
                //   Boolean(editForm.errors.referral.subscriptions)
                // }
                // helperText={
                //   editForm.touched.referral.subscriptions && editForm.errors.referral.subscriptions
                // }
                id="referral.subscriptions"
                type="number"
                name="referral.subscriptions"
                value={editForm.values.referral.subscriptions}
                onChange={editForm.handleChange}
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
                //   editForm.touched.referral.downloads && Boolean(editForm.errors.referral.downloads)
                // }
                // helperText={editForm.touched.referral.downloads && editForm.errors.referral.downloads}
                id="referral.downloads"
                type="number"
                name="referral.downloads"
                value={editForm.values.referral.downloads}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="downloads"
                sx={{ mt: 1 }}
              />
              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
                type="submit"
                sx={[theme.custom.editButton, { mt: 2 }]}
                fullWidth
              >
                Edit VIP Referral
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditVipReferral.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
