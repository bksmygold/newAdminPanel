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
import { postFaq } from "src/apis/faq";
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
export default function AddFaq() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
    },
    validationSchema: yup.object({
      question: yup.string("Enter question").required("question is required"),
      answer: yup.string("Enter answer").required("answer is required"),
    }),
    onSubmit: (values) => {
      faqMutation.mutate(values);
    },
  });

  const faqMutation = useMutation({
    mutationFn: postFaq,
    onSuccess: (res) => {
      swal("FAQ Added !", res.message, "success"), router.push("/faq/view-faq");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });


  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-item</title>
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
          Add FAQ
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add FAQ used in the Apps
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
                FAQ Question
              </Typography>
              <CustomTextField
                error={formik.touched.question && Boolean(formik.errors.question)}
                helperText={formik.touched.question && formik.errors.question}
                id="question"
                name="question"
                value={formik.values.question}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="question"
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
                FAQ Answer
              </Typography>
              <CustomTextField
                error={formik.touched.answer && Boolean(formik.errors.answer)}
                helperText={formik.touched.answer && formik.errors.answer}
                id="answer"
                name="answer"
                value={formik.values.answer}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="answer"
              />

              <LoadingButton
                disabled={faqMutation.isLoading}
                loading={faqMutation.isLoading}
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
                Add FAQ
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddFaq.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
