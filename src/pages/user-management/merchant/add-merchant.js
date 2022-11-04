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
import { useMutation } from '@tanstack/react-query';
import GoogleMapReact from 'google-map-react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { RoleCard } from '../../../components/cards/roleCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useTheme } from '@mui/material/styles';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import MapPicker from 'react-google-map-picker';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { CustomTextField } from 'src/components/customMUI';
import { CustomFormControl } from 'src/components/customMUI';
//=======================================================


const modules = [
  { name: 'custodian',icon:<VpnKeyIcon sx={{ color: 'gray', height: 30, width: 30 }}/> },
  { name: 'e-commerce' ,icon:<ShoppingCartIcon sx={{ color: 'gray', height: 30, width: 30 }}/>},
  { name: 'verifier' ,icon:<VerifiedIcon sx={{ color: 'gray', height: 30, width: 30 }}/>},
  { name: 'refiner' ,icon:<FilterAltIcon sx={{ color: 'gray', height: 30, width: 30 }}/>},
];
//=======================================================
export default function AddMerchant() {
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
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 1,
  };
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
      retainershipType: '',
      retainershipValue: 0, //--->
      address: '',
      location: [], //--->
      commission: {
        buy: 0,
        sell: 0,
      },
      modules: [], //--->
      settlementInDays: 0,
      limit: 0,
      eInvoiceApplicable: true,
    },
    validationSchema: yup.object({
      name: yup
        .string('Enter Merchant Name')
        .required('Merchant Name is required'),
      email: yup.string('Enter email').required('email is required'),
      mobile: yup.string('Enter mobile').required('mobile is required'),
      aadhaar: yup.string('Enter aadhaar').required('aadhaar is required'),
      pan: yup.string('Enter pan').required('pan is required'),

      gstNo: yup.string('Enter gst no.').required('gst no. is required'),
      retainershipType: yup
        .string('Enter retainership type')
        .required('retainership type is required'),

      address: yup.string('Enter address').required('address is required'),
      settlementInDays: yup
        .number('Enter settlement In Days')
        .required('settlement is required'),
      limit: yup.number('Enter limit').required('limit is required'),
    }),
    onSubmit: (values) => {
      console.log('payload ---', values);
      try {
        merchantMutation.mutate(values);
      } catch (e) {
        console.log('e--', e);
      }
    },
  });

  const merchantMutation = useMutation({
    mutationFn: postMerchant,
    onSuccess: (res) => {
      swal('Merchant Added !', 'continue with the admin panel', 'success');
      router.push('/user-management/merchant/view-merchant');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
  });

  const isActive = (name) => {
    if (formik.values.modules?.find((e) => e === name)) return true;
    return false;
  };

  console.log('error --', formik.errors);
  // console.log('values --', formik.values);

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Merchant</title>
      </Head>
      <form onSubmit={formik.handleSubmit}>
        <Container
        
          sx={{
            padding: 5,
            borderRadius: 2,
            boxShadow: '0px 4px 1px 0px #d2c6c6',
            marginTop: 5,
            border: '1px solid #d2c6c657',
            minWidth:"100%"
          }}
        >
          {/* ------------------------------ */}
          <Typography
            variant="h5"
            sx={{
              color: '#8B5704',
            }}
          >
            Add merchant
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#cba56a',
              marginBottom: 5,
              fontWeight: 'bold',
            }}
          >
            Add merchant for products used in E-commerce
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
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Address
              </Typography>
              <CustomTextField
                fullWidth
                multiline
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                variant="outlined"
                label=""
              />{' '}
            </Grid>
          </Grid>
          {/* ---------------------------------- Retainer Type --------------------------------------- */}
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
                4.Retainer Details
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
                Retainer Type
              </Typography>

              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="retainershipType"
                  value={formik.values.retainershipType}
                  onChange={formik.handleChange}
                  name="retainershipType"
                >
                  <MenuItem key="collection" value="commission_based">
                    commission based
                  </MenuItem>
                  <MenuItem key="category" value="monthly_based">
                    monthly based
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
                Retainer Value
              </Typography>

              <CustomTextField
                error={
                  formik.touched.retainershipValue &&
                  Boolean(formik.errors.retainershipValue)
                }
                helperText={
                  formik.touched.retainershipValue &&
                  formik.errors.retainershipValue
                }
                id="retainershipValue"
                name="retainershipValue"
                type="number"
                value={formik.values?.retainershipValue}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="retainership value"
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
                Sell Commission
              </Typography>

              <CustomTextField
                // error={
                //   formik.touched.commission.sell &&
                //   Boolean(formik.errors.commission.sell)
                // }
                // helperText={
                //   formik.touched.commission.sell &&
                //   formik.errors.commission.sell
                // }
                id="commission.sell"
                type="number"
                name="commission.sell"
                value={formik.values?.commission?.sell}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="sell commission"
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
                Buy Commission
              </Typography>

              <CustomTextField
                // error={
                //   formik.touched.commission.buy &&
                //   Boolean(formik.errors.commission.buy)
                // }
                // helperText={
                //   formik.touched.commission.buy && formik.errors.commission.buy
                // }
                id="commission.buy"
                name="commission.buy"
                value={formik.values?.commission?.buy}
                onChange={formik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
                label="buy commission"
                sx={{ marginBottom: 4 }}
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 2,
                width: '100%',
              }}
              spacing={2}
            >
              {modules.map((x) => (
              <Grid sx={{ marginRight: 0}} item sm={4} md={6} lg={2} xl={2} xs={12}>
                  <Box
                    sx={{

                      p: 3,
                      marginTop: 2,
                      borderRadius: 1,
                      border:`${isActive(x.name) ? "1px solid #976413" :"1px solid gray"}`,
                      background : ` ${isActive(x.name) ?  'linear-gradient(43deg, #8b5704, #ddb070)' : null}`,
                      overflowWrap:"anywhere"

                    }}
                    onClick={() => {
                      if (isActive(x.name)) {
                        formik.setFieldValue(
                          'modules',
                          formik.values.modules.filter((e) => e !== x.name)
                        );
                        return;
                      }
                      formik.setFieldValue(
                        'modules',
                        [...formik.values.modules, x.name].filter(Boolean)
                      );
                    }}

                    //   formik.setValues({
                    //     ...formik.values,
                    //     modules: formik.values.modules
                    //       ? [...formik.values.modules, x.name]
                    //       : [x.name],
                    //   });
                    // }}
                  >
                    <Avatar sx={{ margin: 'auto', backgroundColor: 'white' }}>
                      {/* <VpnKeyIcon
                        sx={{ color: 'gray', height: 30, width: 30 }}
                      /> */}
                      {x.icon}
                    </Avatar>
                    <Typography
                      sx={{
                        color : `${isActive(x.name) ?  'white' : "#a65704"}`,
                        fontWeight: 'bolder',
                        textAlign: 'center',
                      }}
                      gutterBottom
                      variant="h6"
                    >
                      {x.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Grid container sx={{ marginTop: 5 }}>
              <Grid item sm={4} xs={12}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8B5704',
                    marginBottom: 2,
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                >
                  Settlement
                </Typography>

                <Box sx={{ '& > :not( color: #a88143;)': { m: 1 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <CustomTextField
                      error={
                        formik.touched.settlementInDays &&
                        Boolean(formik.errors.settlementInDays)
                      }
                      helperText={
                        formik.touched.settlementInDays &&
                        formik.errors.settlementInDays
                      }
                      id="settlementInDays"
                      name="settlementInDays"
                      value={formik.values.settlementInDays}
                      onChange={formik.handleChange}
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">DAYS</InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item sm={4} xs={12}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8B5704',
                    marginBottom: 2,
                    marginTop: 2,
                    marginLeft: 5,

                    fontWeight: 600,
                  }}
                >
                  Limit
                </Typography>

                <Box sx={{ '& > :not( color: #a88143;)': { m: 1 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <CustomTextField
                      error={
                        formik.touched.limit && Boolean(formik.errors.limit)
                      }
                      helperText={formik.touched.limit && formik.errors.limit}
                      id="limit"
                      name="limit"
                      type="number"
                      value={formik.values.limit}
                      onChange={formik.handleChange}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">GRAMS</InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8B5704',
                    marginBottom: 2,
                    marginTop: 4,
                    fontWeight: 600,
                  }}
                >
                  E-invoice
                </Typography>

                <CustomFormControl fullWidth>
                  <Select
                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="eInvoiceApplicable"
                    value={formik.values.eInvoiceApplicable}
                    onChange={formik.handleChange}
                    name="eInvoiceApplicable"
                  >
                    <MenuItem key="collection" value={true}>
                      Yes
                    </MenuItem>
                    <MenuItem key="category" value={false}>
                      No
                    </MenuItem>
                  </Select>
                </CustomFormControl>
              </Grid>
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
              disabled={merchantMutation.isLoading}
              loading={merchantMutation.isLoading}
              type="submit"
              sx={[theme.custom.addButton,{width:"50%",m:5}]}
            >
              Add merchant
            </LoadingButton>
          </Box>
        </Container>
      </form>
    </>
  );
}
AddMerchant.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
