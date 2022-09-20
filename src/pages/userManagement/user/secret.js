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
import { DashboardLayout } from '../../../components/dashboard-layout';
import FormInput from '../../../components/utility/formInput';
import Form from '../../../components/utility/form';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import swal from 'sweetalert';
import { postPlan } from 'src/apis/plan';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCyclePeriod } from 'src/apis/cyclePeriod';
import { getRole } from 'src/apis/role';
import { postUser } from 'src/apis/user';
import { useFormik } from 'formik';

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
export default function AddOrganisationUser() {
  const router = useRouter();

  let mfa = router.query;
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Secret </title>
      </Head>
      <Container
        sx={{
          padding: 1,
          mb: 5,
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
          Your 2FA Secret
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Keep these secret with you securily for your next authentication
        </Typography>
        {/* -------------------------------------------------------------------- */}
        <Grid
          container
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Grid item md={12} xs={12}>
            <Box
              sx={{
                boxShadow: '0px 4px 1px 0px #d2c6c6',
                marginTop: 2,
                p: 5,
                borderRadius: 1.5,
                border: '1px solid #d2c6c657',
                height: '100%',
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
                overflowWrap: 'break-word',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#8B5704',
                  textAlign: 'center',
                }}
              >
                MFA QR
              </Typography>
              <Box sx={{
                display: "flex",
            justifyContent:"center"
              }}>
                <img src={mfa.qr} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  mt: 4,
                  color: '#8B5704',
                  textAlign: 'center',
                }}
              >
                MFA Secret
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  color: '#8B5704',
                  textAlign: 'center',
                  overflowWrap: 'break-word',
                }}
              >
                {mfa.secret}
              </Typography>
            </Box>
          </Grid>

          {/* -------------------------------------- */}
        </Grid>

        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddOrganisationUser.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
