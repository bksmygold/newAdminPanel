import Head from "next/head";
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
} from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { postVariety } from "src/apis/merchant";
import { useMutation } from "@tanstack/react-query";
import GoogleMapReact from "google-map-react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { RoleCard } from "../../../components/roleCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
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
export default function AddVariety() {
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
      name: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter merchant Name").required("merchant is required"),
    }),
    onSubmit: (values) => {
      varietyMutation.mutate(values);
    },
  });

  const varietyMutation = useMutation({
    mutationFn: postVariety,
    onSuccess: (res) => {
      swal("merchant Added !", res.message, "success"),
        router.push("/userManagement/merchant/view-merchant");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });

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
            boxShadow: "0px 4px 1px 0px #d2c6c6",
            marginTop: 5,
            border: "1px solid #d2c6c657",
          }}
        >
          {/* ------------------------------ */}
          <Typography
            variant="h5"
            sx={{
              color: "#8B5704",
            }}
          >
            Add merchant
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#cba56a",
              marginBottom: 5,
              fontWeight: "bold",
            }}
          >
            Add merchant for products used in E-commerce
          </Typography>
          {/* ------------------------------------------------------------------------- */}
          <Grid
            sx={{
              padding: 5,
              borderRadius: 2,
              boxShadow: "0px 4px 1px 0px #d2c6c6",
              marginTop: 5,
              border: "1px solid #d2c6c657",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
            container
          >
            <Typography
              variant="h6"
              sx={{
                color: "#8B5704",
                marginBottom: 2,
                marginTop: 2,

                fontWeight: 600,
              }}
            >
              1.General Details
            </Typography>

            <Grid sx={{ marginLeft: 3 }} item xl={3} lg={3} sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Name
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
                label="merchant name"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                mobile
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
                label="merchant phone"
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                email
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
                label="merchant email"
              />
            </Grid>
          </Grid>
          {/* ------------------------------------------------------------------------- */}
          <Grid
            sx={{
              padding: 5,
              borderRadius: 2,
              boxShadow: "0px 4px 1px 0px #d2c6c6",
              marginTop: 5,
              border: "1px solid #d2c6c657",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            container
          >
            <Typography
              variant="h6"
              sx={{
                color: "#8B5704",
                marginBottom: 2,
                marginTop: 2,

                fontWeight: 600,
              }}
            >
              2.KYC Details
            </Typography>

            <Grid sx={{ marginLeft: 3 }} item xl={3} lg={3} sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Adhaar
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
                label="adhaar number"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                PAN
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
                label="PAN number"
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                GST
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
                label="GST number"
              />
            </Grid>
          </Grid>
          {/* ------------------------------------------------------------------------- */}
          <Grid
            sx={{
              padding: 5,
              borderRadius: 2,
              boxShadow: "0px 4px 1px 0px #d2c6c6",
              marginTop: 5,
              border: "1px solid #d2c6c657",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
            container
          >
            <Typography
              variant="h6"
              sx={{
                color: "#8B5704",
                marginBottom: 2,
                marginTop: 2,

                fontWeight: 600,
              }}
            >
              3.Address Details
            </Typography>

            <Grid sx={{ marginLeft: 3 }} item xl={3} lg={3} sm={6} xs={12}>
              <Typography
                variant="overline"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                place the pin at your location
              </Typography>

              <div style={{ height: "50vh", width: "55vw" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
              </div>

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Address
              </Typography>

              <CustomTextField
                multiline
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                id="name"
                fullWidth
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                variant="outlined"
                label="address"
              />
            </Grid>
          </Grid>
          {/* ------------------------------ */}
          {/* ------------------------------------------------------------------------- */}

          <Grid
            sx={{
              padding: 5,
              borderRadius: 2,
              boxShadow: "0px 4px 1px 0px #d2c6c6",
              marginTop: 5,
              border: "1px solid #d2c6c657",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            container
          >
            <Typography
              variant="h6"
              sx={{
                color: "#8B5704",
                marginBottom: 2,
                marginTop: 2,

                fontWeight: 600,
              }}
            >
              4.Retainer Details
            </Typography>

            <Grid sx={{ marginLeft: 3 }} item xl={3} lg={3} sm={6} xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
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
                  id="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  name="type"
                >
                  <MenuItem key="collection" value="collection">
                    Collection
                  </MenuItem>
                  <MenuItem key="category" value="category">
                    Category
                  </MenuItem>
                  <MenuItem key="variety" value="variety">
                    Variety
                  </MenuItem>
                  <MenuItem key="item" value="item">
                    Item
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Retainer Value
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
                label="PAN number"
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Sell Commission
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
                label="GST number"
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Buy Commission
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
                label="GST number"
                sx={{ marginBottom: 4 }}
              />

              <Typography
                variant="overline"
                sx={{
                  color: "#8B5704",
                }}
              >
                modules applicable
              </Typography>

              {/* ====================================== */}
              {/* <Grid container spacing={8} sx={{ backgroundColor: "", p: 5,width:"100%" }}> */}
              {/* <Grid item xl={3} lg={3} sm={6} xs={12}> */}
              <Box
                sx={{
                  backgroundColor: "",
                  p: 3,
                  marginTop: 2,
                  borderRadius: 1,
                  border: "1px solid gray",
                }}
              >
                <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                  <ContentPasteIcon sx={{ color: "gray", height: 30, width: 30 }} />
                </Avatar>
                <Typography
                  sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                  gutterBottom
                  variant="h6"
                >
                  Custodian
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "",
                  p: 3,
                  marginTop: 2,
                  borderRadius: 1,
                  border: "1px solid gray",
                }}
              >
                <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                  <DeliveryDiningIcon sx={{ color: "gray", height: 30, width: 30 }} />
                </Avatar>
                <Typography
                  sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                  gutterBottom
                  variant="h6"
                >
                  Pickup
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "",
                  p: 3,
                  marginTop: 2,
                  borderRadius: 1,
                  border: "1px solid gray",
                }}
              >
                <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                  <LocalShippingIcon sx={{ color: "gray", height: 30, width: 30 }} />
                </Avatar>
                <Typography
                  sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                  gutterBottom
                  variant="h6"
                >
                  Delivery
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "",
                  p: 3,
                  marginTop: 2,
                  borderRadius: 1,
                  border: "1px solid gray",
                }}
              >
                <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                  <VerifiedIcon sx={{ color: "gray", height: 30, width: 30 }} />
                </Avatar>
                <Typography
                  sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                  gutterBottom
                  variant="h6"
                >
                  Verifier
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "",
                  p: 3,
                  marginTop: 2,
                  borderRadius: 1,
                  border: "1px solid gray",
                }}
              >
                <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                  <FilterAltIcon sx={{ color: "gray", height: 30, width: 30 }} />
                </Avatar>
                <Typography
                  sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                  gutterBottom
                  variant="h6"
                >
                  Refiner
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Settlement
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
                label="Days"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Limit
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
                label="grams"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                E-Invoice
              </Typography>

              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  name="type"
                >
                  <MenuItem key="collection" value="collection">
                    Collection
                  </MenuItem>
                  <MenuItem key="category" value="category">
                    Category
                  </MenuItem>
                  <MenuItem key="variety" value="variety">
                    Variety
                  </MenuItem>
                  <MenuItem key="item" value="item">
                    Item
                  </MenuItem>
                </Select>
              </CustomFormControl>

              {/* </Grid> */}

              {/* <Grid container>
                <Grid
                  item
                  xl={3}
                  lg={3}
                  sm={6}
                  xs={12}
                  sx={{
                    borderRadius: 1.5,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 2,
                    border: "1px solid gray",
                  }}
                >
                  <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                    <PersonAddIcon sx={{ color: "gray", height: 30, width: 30 }} />
                  </Avatar>
                  <Typography
                    sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                    gutterBottom
                    variant="h6"
                  >
                    Custodian
                  </Typography>
                </Grid>

                <Grid
                  xl={3}
                  lg={3}
                  sm={6}
                  xs={12}
                  item
                  sx={{
                    borderRadius: 1.5,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 2,
                    border: "1px solid gray",
                  }}
                >
                  <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                    <PersonAddIcon sx={{ color: "gray", height: 30, width: 30 }} />
                  </Avatar>
                  <Typography
                    sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                    gutterBottom
                    variant="h6"
                  >
                    Delivery
                  </Typography>
                </Grid>

                <Grid
                  xl={3}
                  lg={3}
                  sm={6}
                  xs={12}
                  item
                  sx={{
                    borderRadius: 1.5,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 2,
                    border: "1px solid gray",
                  }}
                >
                  <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                    <PersonAddIcon sx={{ color: "gray", height: 30, width: 30 }} />
                  </Avatar>
                  <Typography
                    sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                    gutterBottom
                    variant="h6"
                  >
                    Pickup
                  </Typography>
                </Grid>

                <Grid
                  xl={3}
                  lg={3}
                  sm={6}
                  xs={12}
                  item
                  sx={{
                    borderRadius: 1.5,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 2,
                    border: "1px solid gray",
                  }}
                >
                  <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                    <PersonAddIcon sx={{ color: "gray", height: 30, width: 30 }} />
                  </Avatar>
                  <Typography
                    sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                    gutterBottom
                    variant="h6"
                  >
                    Verifier
                  </Typography>
                </Grid>

                <Grid
                  xl={3}
                  lg={3}
                  sm={6}
                  xs={12}
                  item
                  sx={{
                    borderRadius: 1.5,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    p: 2,
                    border: "1px solid gray",
                  }}
                >
                  <Avatar sx={{ margin: "auto", backgroundColor: "white" }}>
                    <PersonAddIcon sx={{ color: "gray", height: 30, width: 30 }} />
                  </Avatar>
                  <Typography
                    sx={{ color: "#8b5704", fontWeight: "bolder", textAlign: "center" }}
                    gutterBottom
                    variant="h6"
                  >
                    Refiner
                  </Typography>
                </Grid>
              </Grid> */}
              {/* ================================================ */}
            </Grid>
          </Grid>
          <LoadingButton
            disabled={varietyMutation.isLoading}
            loading={varietyMutation.isLoading}
            type="submit"
            sx={{
              marginTop: 2,
              backgroundColor: "#DDB070",
              border: "none",
              color: "white",
              "&:hover": {
                backgroundColor: "#DBA251",
              },
            }}
          >
            Add merchant
          </LoadingButton>
        </Container>
      </form>
    </>
  );
}
AddVariety.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
