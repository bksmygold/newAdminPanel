import Head from "next/head";
import { Container, Typography, Grid, Button, styled, TextField } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { postSupplier } from "src/apis/supplier";
import { useMutation } from "@tanstack/react-query";
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
//=======================================================
export default function AddSupplier() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      code: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Supplier Name").required("Supplier is required"),
      phone: yup.string("Enter Supplier phone").required("phone is required"),
      email: yup.string("Enter Supplier email").required("email is required"),
      code: yup.string("Enter Supplier code").required("code is required"),
    }),
    onSubmit: (values) => {
      supplierMutation.mutate(values);
    },
  });

  const supplierMutation = useMutation({
    mutationFn: postSupplier,
    onSuccess: (res) => {
      swal("Supplier Added !", res.message, "success"), router.push("/supplier/view-supplier");
    },
    onError: (err) => swal("Erro !", err.message, "error"),
  });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Supplier </title>
      </Head>
      {/* ------------------------------ */}
      <Container
        sx={{
          padding: 5,
          borderRadius: 2,
          boxShadow: "0px 4px 1px 0px #d2c6c6",
          marginTop: 5,
          border: "1px solid #d2c6c657",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#8B5704",
          }}
        >
          Add Supplier
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add Supplier for products used in E-commerce
        </Typography>
        {/* ------------------------------ */}

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
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <form onSubmit={formik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Supplier Name
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
                label="Supplier name"
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
                Supplier Mobile
              </Typography>
              <CustomTextField
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Supplier phone"
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
                Supplier Email
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
                label="Supplier email"
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
                Supplier Code
              </Typography>
              <CustomTextField
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
                id="code"
                name="code"
                value={formik.values.code}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Supplier code"
              />

              <LoadingButton
                disabled={supplierMutation.isLoading}
                loading={supplierMutation.isLoading}
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
                Add Supplier
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddSupplier.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
