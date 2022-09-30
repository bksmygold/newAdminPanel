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
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { postMetalGroup } from "src/apis/metalGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddModeratorRounded } from "@mui/icons-material";
import { getMetal } from "src/apis/metal";
import { getUnit } from "src/apis/unit";
import { getOrnament } from "src/apis/ornament";
import { useTheme } from '@mui/styles';

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
export default function AddMetalGroup() {
  //=======================
  const router = useRouter();
  const theme = useTheme()
  //=======================================================
  const formik = useFormik({
    initialValues: {
      shortName: "",
      metal: "",
      purity: 0,
      roundingDigits: 0,
      unit: "",
      ornament: "",
      gst:3
    },
    validationSchema: yup.object({
      shortName: yup.string("Enter Metal Group Name").required("Metal Group is required"),
      metal: yup.string("Choose Metal ").required("Metal is required"),
      purity: yup.number("Enter Purity").required("Purity is required"),
      roundingDigits: yup.number("Enter Rounding digits").required("Rounding digits is required"),
      unit: yup.string("Enter  Unit").required("Unit is required"),
      ornament: yup.string("Enter Ornament").required("Ornament is required"),
    }),
    onSubmit: (values) => {
      metalGroupMutation.mutate(values);
      // console.log('hua ')
    },
  });
      // console.log(formik.errors)

  const [metal, setMetal] = React.useState([]);
  const [unit, setUnit] = React.useState([]);
  const [ornament, setOrnament] = React.useState([]);

  React.useEffect(() => {
    getMetal().then((res) => setMetal(res.docs));
    getUnit().then((res) => setUnit(res.docs));
    getOrnament().then((res) => setOrnament(res.docs));
  }, []);

  //----------

  // const metalQuery = useQuery({
  //   queryKey: "metalGetting",
  //   queryFn: getMetal,
  //   onSuccess: (res) => console.log("Success ---", res.message),
  //   onError: (err) => console.log("Error --->", err),
  // })

  // if(metalQuery.isLoading){
  //   console.log("Fetching ....")
  // }

  const metalGroupMutation = useMutation({
    mutationFn: postMetalGroup,
    onSuccess: (res) => {
      swal("Metal Group Added !", "Continue with the eComm panel", "success"),
        router.push("/eCommerce/metalGroup/view-metalGroup");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Metal Group</title>
      </Head>
      <Container
        sx={{
          padding: 5,
          borderRadius: 2,
          boxShadow: "0px 4px 1px 0px #d2c6c6",
          marginTop: 5,
          border: "1px solid #d2c6c657",
          backgroundColor: "white",
          minWidth:"100%"
        }}
      >
        {/* ------------------------------ */}
        <Typography
          variant="h6"
          sx={{
            color: "#8B5704",
          }}
        >
          Add Metal Group
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add Metal Group for products used in E-commerce
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
          <Grid item sm={8} xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: "#8B5704",
                marginBottom: 2,
                marginTop: 2,
                fontWeight: 600,
              }}
            >
              Metal Group Name
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <CustomTextField
                error={formik.touched.shortName && Boolean(formik.errors.shortName)}
                helperText={formik.touched.shortName && formik.errors.shortName}
                id="shortName"
                name="shortName"
                value={formik.values.shortName}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Metal Group name"
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
                Metal
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.metal}
                  onChange={formik.handleChange}
                  name="metal"
                >
                  {metal?.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
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
                Unit
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.unit}
                  onChange={formik.handleChange}
                  name="unit"
                >
                  {unit?.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
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
                Ornament
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  // value={age}
                  value={formik.values.ornament}
                  onChange={formik.handleChange}
                  name="ornament"
                >
                  {ornament?.map((x) => (
                    <MenuItem key={x.id} value={x.name}>
                      {x.name}
                    </MenuItem>
                  ))}
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
                Purity
              </Typography>
              <CustomTextField
                error={formik.touched.purity && Boolean(formik.errors.purity)}
                helperText={formik.touched.purity && formik.errors.purity}
                id="purity"
                name="purity"
                type="number"
                value={formik.values.purity}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Purity"
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
                Rounding Digits
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  value={formik.values.roundingDigits}
                  onChange={formik.handleChange}
                  name="roundingDigits"
                >
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={metalGroupMutation.isLoading}
                loading={metalGroupMutation.isLoading}
                type="submit"
                fullWidth
                sx={ theme.custom.addButton}
              >
                Add Metal Group
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddMetalGroup.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
