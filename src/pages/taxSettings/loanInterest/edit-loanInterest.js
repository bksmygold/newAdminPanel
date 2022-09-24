import Head from "next/head";
import { Container, Typography, Grid, Button, styled, TextField } from "@mui/material";
import { DashboardLayout } from "../../../components/layout/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { updateLoanInterest,getLoanInterestById } from "src/apis/loanInterest";
import { useMutation,useQuery } from "@tanstack/react-query";

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
export default function EditLoanInterest() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      minMonth: 0,
      maxMonth: 0,
      interest: 0,
    },
    validationSchema: yup.object({
      minMonth: yup.number("Enter minimum month").required("minimum month is required"),
      maxMonth: yup.number("Enter maximum month").required("maximum monthis required"),
      interest: yup.number("Enter Interest").required("Interest is required"),
    }),
    onSubmit: (values) => {
      loanInterestMutation.mutate({
        data: values,
        id:router.query.id
      });
    },
  });

const query = useQuery({
  querKey: ["loanInterest", router.query.id],
  queryFn: () => getLoanInterestById(router.query.id),
  onSuccess: (res) => formik.setValues(res.data),
  enabled: !!router.query.id,
});

  const loanInterestMutation = useMutation({
    mutationFn: updateLoanInterest,
    onSuccess: (res) => {
      swal("Loan Interest Updated !", res.message, "success"),
        router.push("/loanInterest/view-loanInterest");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Loan Interest</title>
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
          Edit Loan Interest
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Loan Interest
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
                Minimum Month
              </Typography>

              <CustomTextField
                error={formik.touched.minMonth && Boolean(formik.errors.minMonth)}
                helperText={formik.touched.minMonth && formik.errors.minMonth}
                id="minMonth"
                name="minMonth"
                typ="number"
                value={formik.values.minMonth}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Min.Month"
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
                Maximum Month
              </Typography>

              <CustomTextField
                error={formik.touched.maxMonth && Boolean(formik.errors.maxMonth)}
                helperText={formik.touched.maxMonth && formik.errors.maxMonth}
                id="maxMonth"
                name="maxMonth"
                typ="number"
                value={formik.values.maxMonth}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Max.Month"
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
                Loan Interest
              </Typography>

              <CustomTextField
                error={formik.touched.interest && Boolean(formik.errors.interest)}
                helperText={formik.touched.interest && formik.errors.interest}
                id="interest"
                name="interest"
                typ="number"
                value={formik.values.interest}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="interest"
              />

              <LoadingButton
                disabled={loanInterestMutation.isLoading}
                loading={loanInterestMutation.isLoading}
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
                Edit Loan Interest
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditLoanInterest.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
