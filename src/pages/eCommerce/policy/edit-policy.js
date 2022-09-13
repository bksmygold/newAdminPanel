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
import { DashboardLayout } from "../../../components/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { getPolicyById,updatePolicy } from "src/apis/policy";
import { useMutation, useQuery } from "@tanstack/react-query";
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
export default function EditPolicy() {
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
      description: "",
      consignmentRequired: false,
    },
    validationSchema: yup.object({
      title: yup.string("Enter Title").required("Title is required"),
      description: yup.string("Enter description").required("description is required"),
    }),
    onSubmit: (values) => {
      policyMutation.mutate({data:values,id:router.query.id});
    },
  });
  
  const query = useQuery({
    queryKey: ["policy", router.query.id],
    queryFn: () => getPolicyById(router.query.id),
    onSuccess: (res) => formik.setValues(res.data),
    enabled: !!router.query.id,
  });
  const policyMutation = useMutation({
    mutationFn: updatePolicy,
    onSuccess: (res) => {
      swal("Policy Updated !", res.message, "success"), router.push("/policy/view-policy");
    },
    onError: (err) => swal("Erro !", err.message, "error"),
  });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Policy </title>
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
          Edit Policy
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Policy for the App
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
                Policy title
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  name="title"
                >
                  <MenuItem key="collection" value="privacy">
                    Privacy
                  </MenuItem>
                  <MenuItem key="category" value="terms">
                    Terms
                  </MenuItem>
                  <MenuItem key="variety" value="shipping">
                    Shipping
                  </MenuItem>
                  <MenuItem key="item" value="cancellation">
                    Cancellation
                  </MenuItem>
                  <MenuItem key="variety" value="return">
                    Return
                  </MenuItem>
                  <MenuItem key="item" value="refund">
                    Refund
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
                Policy description
              </Typography>
              <CustomTextField
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label=" description"
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
                Consignment
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="consignmentRequired"
                  value={formik.values.consignmentRequired}
                  onChange={formik.handleChange}
                  name="consignmentRequired"
                >
                  <MenuItem key="weight" value={true}>
                    yes
                  </MenuItem>
                  <MenuItem key="value" value={false}>
                    no
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={policyMutation.isLoading}
                loading={policyMutation.isLoading}
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
                Edit Policy
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditPolicy.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
