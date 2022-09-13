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
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { getReferralTypeById, postReferralType, updateReferralType } from "src/apis/referralType";
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
export default function EditReferralType() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      userType: "",
      referredBonus: 0,
      joiningBonus: {
        min: 0,
        max: 0,
      },
      criteria: "",
    },
    validationSchema: yup.object({
      userType: yup.string("Enter User Type").required("user type is required"),
      referredBonus: yup.number("Enter  referred bonus").required("referred bonus is required"),
      criteria: yup.string("Enter  criteria ").required("criteria is required"),
    }),
    onSubmit: (values) => {
      referralTypeMutation.mutate({data:values,id:router.query.id});
    },
  });

    const query = useQuery({
      querKey: ["referral type", router.query.id],
      queryFn: () => getReferralTypeById(router.query.id),
      onSuccess: (res) =>
        formik.setValues(res.data),
      enabled: !!router.query.id,
    });


  const referralTypeMutation = useMutation({
    mutationFn: updateReferralType,
    onSuccess: (res) => {
      swal("Referral Type Updated !", res.message, "success"),
        router.push("/promotionalSetting/referralType/view-referralType");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Referral Type</title>
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
          Edit Referral Type
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Referral Type for products used in E-commerce
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
                User Type
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">userType</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="userType"
                  value={formik.values.userType}
                  onChange={formik.handleChange}
                  name="userType"
                >
                  <MenuItem key="customer" value="customer">
                    Customer
                  </MenuItem>
                  <MenuItem key="sales_offer" value="sales_offer">
                    Sales Offers
                  </MenuItem>
                  <MenuItem key="sales_associate" value="sales_associate">
                    Sales Associate
                  </MenuItem>
                  <MenuItem key="vip" value="vip">
                    VIP
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
                Referred Bonus
              </Typography>
              <CustomTextField
                error={formik.touched.referredBonus && Boolean(formik.errors.referredBonus)}
                helperText={formik.touched.referredBonus && formik.errors.referredBonus}
                id="referredBonus"
                type="number"
                name="referredBonus"
                value={formik.values.referredBonus}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
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
                Minimum Percentage
              </Typography>
              <CustomTextField
                // error={formik.touched.min && Boolean(formik.errors.min)}
                // helperText={formik.touched.min && formik.errors.min}
                id="joiningBonus.min"
                name="joiningBonus.min"
                value={formik.values.joiningBonus.min}
                onChange={formik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
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
                Maximum Amount
              </Typography>
              <CustomTextField
                // error={formik.touched.max && Boolean(formik.errors.max)}
                // helperText={formik.touched.max && formik.errors.max}
                id="joiningBonus.max"
                name="joiningBonus.max"
                value={formik.values.joiningBonus.max}
                onChange={formik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
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
                Criteria
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">criteria</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="criteria"
                  value={formik.values.criteria}
                  onChange={formik.handleChange}
                  name="criteria"
                >
                  <MenuItem key="customer" value="plan_maturity">
                    Plan Maturity
                  </MenuItem>
                  <MenuItem key="sales_offer" value="download_subscriptions">
                    Download Subscriptions
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={referralTypeMutation.isLoading}
                loading={referralTypeMutation.isLoading}
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
                Edit Referral Type
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditReferralType.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
