import Head from 'next/head';
import {
  Box,
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
  Avatar,
  Paper,
  Input,
  InputAdornment,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import FormInput from '../../../components/utility/formInput';
import Form from '../../../components/utility/form';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { postMerchant } from 'src/apis/merchant';
import { useMutation ,useQuery} from '@tanstack/react-query';
import GoogleMapReact from 'google-map-react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { RoleCard } from '../../../components/cards/roleCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useTheme } from '@mui/material/styles';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import MapPicker from 'react-google-map-picker';

import { CustomTextField } from 'src/components/customMUI';
import { CustomFormControl } from 'src/components/customMUI';
import { postRetail } from 'src/apis/retail';
//=======================================================



const modules = [
  { name: 'custodian' },
  { name: 'e-commerce' },
  { name: 'verifier' },
  { name: 'refiner' },
];
//=======================================================
export default function EditBusiness() {
  const DefaultLocation = { lat: 20.5937, lng: 78.9629 };
  const DefaultZoom = 10;

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [mapLocation, setMapLocation] = useState([]);
  const [zoom, setZoom] = useState(DefaultZoom);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleChangeLocation(lat, lng) {
    // formik.setValues({location:[lat,lng]})
    setMapLocation([lat, lng]);
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  const theme = useTheme();
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      aadhaar: '',
      pan: '',
      gstNo: '',
      businessType: "",
      image: [],
      bank: {
        bankName: "",
        accountNo: "",
        ifsc: "",
        branch: "",
      },
      location: [],
    },

    validationSchema: yup.object({
      name: yup
        .string('Enter Business Name')
        .required('Business Name is required'),
      email: yup.string('Enter email').required('email is required'),
      mobile: yup.string('Enter mobile').required('mobile is required'),
      aadhaar: yup.string('Enter aadhaar').required('aadhaar is required'),
      pan: yup.string('Enter pan').required('pan is required'),

      gstNo: yup.string('Enter gst no.').required('gst no. is required'),



    }),
    onSubmit: (values) => {
      console.log('payload ---', values);
      retailMutation.mutate(values);

      // try {
      //   retailMutation.mutate(values);
      // } catch (e) {
      //   console.log('e--', e);
      // }
    },
  });

  const retailMutation = useMutation({
    mutationFn: postRetail,
    onSuccess: (res) => {
      swal('Business Added !', 'continue with the admin panel', 'success');
      router.push('/userManagement/retail/view-retail');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
  });

  const isActive = (name) => {
    if (formik.values.modules?.find((e) => e === name)) return true;
    return false;
  };

  console.log('error --', formik.errors);
  // console.log('values --', formik.values);

const query = useQuery({
  
})

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Business</title>
      </Head>
      <form onSubmit={formik.handleSubmit}>
        <Container

          sx={{
            padding: 5,
            borderRadius: 2,
            boxShadow: '0px 4px 1px 0px #d2c6c6',
            marginTop: 5,
            border: '1px solid #d2c6c657',
            minWidth: "100%"
          }}
        >
          {/* ------------------------------ */}
          <Typography
            variant="h5"
            sx={{
              color: '#8B5704',
            }}
          >
            Add Business
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#cba56a',
              marginBottom: 5,
              fontWeight: 'bold',
            }}
          >
            Add Business for products used in E-commerce
          </Typography>
          {/* -------------------------------- General Data ----------------------------------------- */}

          <Grid
            fullWidth
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              boxShadow: '0px 4px 1px 0px #d2c6c6',
              marginTop: 5,
              borderRadius: 2,
              p: 5,
              border: '1px solid #d2c6c657',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                1.General Data
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Name
              </Typography>

              <CustomTextField
                fullWidth
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                variant="outlined"
                label=" name"
              />
            </Grid>
            <Grid item xs={6}>
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
                fullWidth
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                id="mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                variant="outlined"
                label=" phone"
              />{' '}
            </Grid>
            <Grid item sm={6} xs={12}>
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
                fullWidth
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                variant="outlined"
                label=" email"
              />{' '}
            </Grid>
          </Grid>
          {/* --------------------------------- KYC Details ---------------------------------------- */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              boxShadow: '0px 4px 1px 0px #d2c6c6',
              marginTop: 5,
              borderRadius: 2,
              p: 5,
              border: '1px solid #d2c6c657',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                2.KYC Details
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Aadhaar
              </Typography>

              <CustomTextField
                fullWidth
                error={formik.touched.aadhaar && Boolean(formik.errors.aadhaar)}
                helperText={formik.touched.aadhaar && formik.errors.aadhaar}
                id="aadhaar"
                name="aadhaar"
                value={formik.values.aadhaar}
                onChange={formik.handleChange}
                variant="outlined"
                label="aadhaar"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                PAN
              </Typography>
              <CustomTextField
                fullWidth
                error={formik.touched.pan && Boolean(formik.errors.pan)}
                helperText={formik.touched.pan && formik.errors.pan}
                id="pan"
                name="pan"
                value={formik.values.pan}
                onChange={formik.handleChange}
                variant="outlined"
                label="PAN"
              />{' '}
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                GST Number
              </Typography>
              <CustomTextField
                fullWidth
                error={formik.touched.gstNo && Boolean(formik.errors.gstNo)}
                helperText={formik.touched.gstNo && formik.errors.gstNo}
                id="gstNo"
                name="gstNo"
                value={formik.values.gstNo}
                onChange={formik.handleChange}
                variant="outlined"
                label="GST"
              />{' '}
            </Grid>
          </Grid>
          {/* ---------------------------------- Address --------------------------------------- */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              boxShadow: '0px 4px 1px 0px #d2c6c6',
              marginTop: 5,
              borderRadius: 2,
              p: 5,
              border: '1px solid #d2c6c657',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                3.Address Details
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                place the pin at your location
              </Typography>
            </Grid>

            <Grid item xs={12}>
              {/* <div style={{ height: '50vh', width: '100%' }}> */}
              {/* <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyCA4fXUrR-ojQbLMY9GTDKjk_OOWO1qbSo',
                    region: 'in',
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact> */}
              {/* <button onClick={() => setShow(!show)}>Show</button> */}
              {/* 
              <button onClick={handleResetLocation}>Reset Location</button>
              <label>Latitute:</label>
              <input type="text" value={location.lat} disabled />
              <label>Longitute:</label>
              <input type="text" value={location.lng} disabled />
              <label>Zoom:</label>
              <input type="text" value={zoom} disabled /> */}
              {show && (
                <MapPicker
                  defaultLocation={defaultLocation}
                  zoom={zoom}
                  mapTypeId="roadmap"
                  onChangeLocation={
                    (lat, lng) => formik.setFieldValue('location', [lat, lng])
                    // formik.setValues({ ...formik.values,location: [lat, lng] })
                  }
                  onChangeZoom={handleChangeZoom}
                  apiKey="AIzaSyCA4fXUrR-ojQbLMY9GTDKjk_OOWO1qbSo"
                />
              )}
              {/* </div> */}
            </Grid>

          </Grid>
          {/* ---------------------------------- Bank Details --------------------------------------- */}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              boxShadow: '0px 4px 1px 0px #d2c6c6',
              marginTop: 5,
              borderRadius: 2,
              p: 5,
              border: '1px solid #d2c6c657',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                4.Bank Details
              </Typography>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Bank name
              </Typography>

              <CustomTextField

                id="bank.bankName"
                name="bank.bankName"
                value={formik.values?.bank.bankName}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="bank name"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Account number
              </Typography>

              <CustomTextField

                id="bank.accountNo"

                name="bank.accountNo"
                value={formik.values?.bank?.accountNo}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="account no."
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                IFSC code
              </Typography>

              <CustomTextField
                // error={
                //   formik.touched.commission.buy &&
                //   Boolean(formik.errors.commission.buy)
                // }
                // helperText={
                //   formik.touched.commission.buy && formik.errors.commission.buy
                // }
                id="bank.ifsc"
                name="bank.ifsc"
                value={formik.values?.bank?.ifsc}
                onChange={formik.handleChange}
                fullWidth

                variant="outlined"
                label="ifsc"
                sx={{ marginBottom: 4 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Bank Branch
              </Typography>

              <CustomTextField
                // error={
                //   formik.touched.commission.buy &&
                //   Boolean(formik.errors.commission.buy)
                // }
                // helperText={
                //   formik.touched.commission.buy && formik.errors.commission.buy
                // }
                id="bank.branch"
                name="bank.branch"
                value={formik.values?.bank?.branch}
                onChange={formik.handleChange}
                fullWidth

                variant="outlined"
                label="branch"
                sx={{ marginBottom: 4 }}
              />
            </Grid>
          </Grid>

          {/* ---------------------------------- Business Details --------------------------------------- */}

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              boxShadow: '0px 4px 1px 0px #d2c6c6',
              marginTop: 5,
              borderRadius: 2,
              p: 5,
              border: '1px solid #d2c6c657',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                5.Business Details
              </Typography>
            </Grid>






            <Grid item sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Business Type
              </Typography>

              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="businessType"
                  value={formik.values.businessType}
                  onChange={formik.handleChange}
                  name="businessType"
                >
                  <MenuItem key="jewellery" value="jewellery">
                    jewellery
                  </MenuItem>
                  <MenuItem key="commodity" value="commodity">
                    commodity
                  </MenuItem>
                </Select>
              </CustomFormControl>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Business Image
              </Typography>

              <CustomTextField
                // error={
                //   formik.touched.commission.buy &&
                //   Boolean(formik.errors.commission.buy)
                // }
                // helperText={
                //   formik.touched.commission.buy && formik.errors.commission.buy
                // }
                id="image"
                name="image"
                type='file'
                // value={formik.values.image}

                onChange={(e) => {
                  formik.setFieldValue("image", e.target.files[0])
                }}
                fullWidth
                variant="outlined"

              />
            </Grid>
          </Grid>
          {/* ================================================ */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LoadingButton
              disabled={retailMutation.isLoading}
              loading={retailMutation.isLoading}
              type="submit"
              sx={theme.custom.Button}
            >
              Add Business
            </LoadingButton>
          </Box>
        </Container>
      </form>
    </>
  );
}
EditBusiness.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
