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
import { postUnit} from "src/apis/unit";
import { useMutation} from '@tanstack/react-query'
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
export default function AddUnit() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
      conversionFactor: '',
    },
    validationSchema: yup.object({
      name: yup.string("Enter Unit Name").required("Unit is required"),
      conversionFactor: yup
        .number("Enter Conversion Factor")
        .required("Conversion Factor is required"),
    }),
    onSubmit: (values) => {
      unitMutation.mutate(values)
    },
  });

    const unitMutation = useMutation({
      mutationFn: postUnit,
      onSuccess: (res) => {
        swal("Unit Added !", res.message, "success"),
          router.push("/unit/view-unit");
      },
      onError: (err) => 
      swal("Erro !", err.message, "error"),
    });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Unit </title>
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
          Add Unit
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add Unit for products used in E-commerce
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
            <Typography
              variant="body1"
              sx={{
                color: "#8B5704",
                marginBottom: 2,
                marginTop: 2,
                fontWeight: 600,
              }}
            >
              Unit Type Name
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <CustomTextField
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Unit Type name"
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
                Conversion Factor
              </Typography>
              <CustomTextField
                error={formik.touched.conversionFactor && Boolean(formik.errors.conversionFactor)}
                helperText={formik.touched.conversionFactor && formik.errors.conversionFactor}
                id="conversionFactor"
                name="conversionFactor"
                value={formik.values.conversionFactor}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Conversion Factor "
                sx={{ mt: 1 }}
              />

              <LoadingButton
                disabled={unitMutation.isLoading}
                loading={unitMutation.isLoading}
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
                Add Unit
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddUnit.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
