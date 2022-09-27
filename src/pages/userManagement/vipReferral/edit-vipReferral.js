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
//=======================================================
export default function EditVipReferral() {
  //=======================
  const router = useRouter();
  const theme = useTheme();

  const [referralType, setReferralType] = useState([]);

  useEffect(() => {
    getReferralType().then((res) => setReferralType(res.docs));
  }, []);
  //=======================================================
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      mobile: '',
      accountType: 'individual',
      isWhatsapp: false,
      referralType: '',
      referralCode: '',
      subscriptions: 0,
      downloads: 0,
    },
    validationSchema: yup.object({
      fullName: yup.string('Enter  Name').required('Name is required'),
      email: yup.string('Enter  email').required('email is required'),
      mobile: yup.string('Enter  mobile').required('mobile is required'),
      referralType: yup
        .string('Enter  referral Type')
        .required('referral Type is required'),
      referralCode: yup
        .string('Enter  referral Code')
        .required('referral Code is required'),

      subscriptions: yup
        .number('Enter subscriptions')
        .required('subscriptions is required'),
      downloads: yup
        .number('Enter downloads')
        .required('downloads is required'),
    }),
    onSubmit: (values) => {
      referralUserMutation.mutate(values);
    },
  });

  const query = useQuery({
    queryKey: ['referralUser', router.query.id],
    queryFn: () => getPlanById(router.query.id),
    onSuccess: (res) => formik.setValues(res),
    enabled: !!router.query.id,
  });


  const referralUserMutation = useMutation({
    mutationFn: postUnit,
    onSuccess: (res) => {
      swal('Unit Updated !', res.message, 'success'),
        router.push('/userManagement/referralUsers/view-referralUsers');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
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
          minWidth:"100%"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#8B5704',
          }}
        >
          Edit Sale Referral 
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Edit Sale Referral Users for schemes for propmotions
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
                Referral Users Name
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
                Referral Type
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="referralType"
                  value={formik.values.referralType}
                  onChange={formik.handleChange}
                  name="referralType"
                >
                   {referralType.map(x => {
                    if (x.userType  == 'vip') {
                      return (

                        <MenuItem key={x.id} value={x.id}>
                          {x.userType}
                        </MenuItem>
                      )
                    }
                  })}
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
                Referral Code
              </Typography>
              <CustomTextField
                error={
                  formik.touched.referralCode &&
                  Boolean(formik.errors.referralCode)
                }
                helperText={
                  formik.touched.referralCode && formik.errors.referralCode
                }
                id="referralCode"
                name="referralCode"
                value={formik.values.referralCode}
                onChange={formik.handleChange}
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
                  value={formik.values.isWhatsapp}
                  onChange={formik.handleChange}
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
                error={
                  formik.touched.subscriptions &&
                  Boolean(formik.errors.subscriptions)
                }
                helperText={
                  formik.touched.subscriptions && formik.errors.subscriptions
                }
                id="subscriptions"
                type="number"
                name="subscriptions"
                value={formik.values.subscriptions}
                onChange={formik.handleChange}
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
                error={
                  formik.touched.downloads && Boolean(formik.errors.downloads)
                }
                helperText={formik.touched.downloads && formik.errors.downloads}
                id="downloads"
                type="number"
                name="downloads"
                value={formik.values.downloads}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="downloads"
                sx={{ mt: 1 }}
              />

              <LoadingButton
                disabled={referralUserMutation.isLoading}
                loading={referralUserMutation.isLoading}
                type="submit"
                sx={[theme.custom.editButton,{mt:2}]}
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
EditVipReferral .getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
