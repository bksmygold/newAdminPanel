import Head from "next/head";
import { Container, Typography, Grid, Button, styled, TextField } from "@mui/material";
import { DashboardLayout } from "../../components/layout/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { postBadla } from "src/apis/badla";
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
export default function AddBadla() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      value: 0,
    },
    validationSchema: yup.object({
      value: yup.number("Enter badla value").required("value is required"),
    }),
    onSubmit: (values) => {
      badlaMutation.mutate(values);
    },
  });

  const badlaMutation = useMutation({
    mutationFn: postBadla,
    onSuccess: (res) => {
      swal("Badla Added !", res.message, "success"), router.push("/badla/view-badla");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });


  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Badla</title>
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
          Add Badla
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add Badla for products used in E-commerce
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
                Badla Value
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
                label="Badla value"
              />

              <LoadingButton
                disabled={badlaMutation.isLoading}
                loading={badlaMutation.isLoading}
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
                Add Badla
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddBadla.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
