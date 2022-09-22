import Head from "next/head";
import { Container, Typography, Grid, Button, styled, TextField } from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { getCustomDutyById, updateCustomDuty } from "src/apis/customDuty";
import { useMutation,useQuery } from "@tanstack/react-query";
import Loading from "src/components/loading";

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
export default function EditCustomDuty() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
      value: 0,
      surcharge: 0,
    },
    validationSchema: yup.object({
      name: yup.string("Enter Custom Duty Name").required("Custom Duty Name is required"),
      value: yup.number("Enter Custom Duty value ").required("Custom Duty value is required"),
      surcharge: yup
        .number("Enter Custom Duty surcharge ")
        .required("Custom Duty surcharge is required"),
    }),
    onSubmit: (values) => {
      customDutyMutation.mutate({
        data: values,
        id:router.query.id
      });
    },
  });

 const query = useQuery({
   queryKey: ["Custom Duty", router.query.id],
   queryFn: () => getCustomDutyById(router.query.id),
   onSuccess: (res) => formik.setValues(res.data),
   onError: (err) => console.log(err),
   enabled: !!router.query.id,
 });

  const customDutyMutation = useMutation({
    mutationFn: updateCustomDuty,
    onSuccess: (res) => {
      swal("Custom Duty Updated !", res.message, "success"),
        router.push("/customDuty/view-customDuty");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });
        if (query.isLoading) return <Loading />;

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Custom Duty </title>
      </Head>
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
        {/* ------------------------------ */}
        <Typography
          variant="h6"
          sx={{
            color: "#8B5704",
          }}
        >
          Edit Custom Duty
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Custom Duty
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
                Custom Duty Name
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
                label="Custom Duty name"
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
                Custom Duty Value
              </Typography>
              <CustomTextField
                error={formik.touched.value && Boolean(formik.errors.value)}
                helperText={formik.touched.value && formik.errors.value}
                id="value"
                name="value"
                type="number"
                value={formik.values.value}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty value"
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
                Custom Duty surcharge
              </Typography>
              <CustomTextField
                error={formik.touched.surcharge && Boolean(formik.errors.surcharge)}
                helperText={formik.touched.surcharge && formik.errors.surcharge}
                id="surcharge"
                name="surcharge"
                type="number"
                value={formik.values.surcharge}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Custom Duty surcharge"
              />

              <LoadingButton
                disabled={customDutyMutation.isLoading}
                loading={customDutyMutation.isLoading}
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
                Edit Custom Duty
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditCustomDuty.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
