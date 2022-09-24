import Head from "next/head";
import {
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
} from "@mui/material";
import { DashboardLayout } from "../../../components/layout/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { postPolicy, postReturnReason } from "src/apis/returnReason";
import { useMutation } from "@tanstack/react-query";
import { getCyclePeriod } from "src/apis/cyclePeriod";
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
export default function AddReturnReason() {
  const [cycle, setCycle] = useState([]);
  useEffect(() => {
    getCyclePeriod().then((res) => setCycle(res.data.data));
  }, []);
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
    },
    validationSchema: yup.object({
      title: yup.string("Enter Title").required("Title is required"),
      type: yup.string("Enter type").required("type is required"),
    }),
    onSubmit: (values) => {
      returnReasonMutation.mutate(values);
    },
  });

  const returnReasonMutation = useMutation({
    mutationFn: postReturnReason,
    onSuccess: (res) => {
      swal("Return Reason Added !", res.message, "success"), router.push("/eCommerce/returnReason/view-returnReason");
    },
    onError: (err) => swal("Erro !", err.message, "error"),
  });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Return Reason </title>
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
          Add Return Reason
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add Return Reason for the App
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
              {" "}
              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Return Reason Description
              </Typography>
              <CustomTextField
                multiline
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label=" title"
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
                Return Reason Type
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
                  <MenuItem key="collection" value="item">
                    Item
                  </MenuItem>
                  <MenuItem key="category" value="order">
                    Order
                  </MenuItem>
                 
                </Select>
              </CustomFormControl>
             
              <LoadingButton
                disabled={returnReasonMutation.isLoading}
                loading={returnReasonMutation.isLoading}
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
                Add Return Reason
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddReturnReason.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
