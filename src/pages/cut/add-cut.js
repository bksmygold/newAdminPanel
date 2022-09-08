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
import { postCut } from "src/apis/cut";
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
export default function AddCut() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Cut Name").required("Cut is required")

    }),
    onSubmit: (values) => {
     cutMutation.mutate(values)
    }
  });

const cutMutation = useMutation({
  mutationFn: postCut,
  onSuccess: (res) => {
    swal("Cut Added !", res.message, "success"), router.push("/cut/view-cut");
  },
  onError: (err) => swal("Erro !", err.message, "error"),
});
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Cut </title>
      </Head>
     
    </>
  );
}
AddCut.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
