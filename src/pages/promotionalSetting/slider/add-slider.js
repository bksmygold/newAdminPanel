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
import { postSlider } from "src/apis/slider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddModeratorRounded } from "@mui/icons-material";

import { getCollection } from "src/apis/collection";
import { getCategory } from "src/apis/category";
import { getVariety } from "src/apis/variety";
import { getItem } from "src/apis/item";
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
export default function AddSlider() {
  //=======================
  const router = useRouter();
  const theme = useTheme();

  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      typeId: "",
      image: [],
    },
    validationSchema: yup.object({
      name: yup.string("Enter Slider Name").required("Slider name is required"),
      type: yup.string("Enter Slider Type Name").required("Slider Type is required"),
      typeId: yup.string("Enter Slider Sub Type Name").required("Slider Sub Type is required"),
    }),
    onSubmit: (values) => {
      sliderMutation.mutate(values);
      // console.log('hua ')
    },
  });
  console.log(formik.values);

  const [collection, setCollection] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [variety, setVariety] = React.useState([]);
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    getCollection().then((res) => setCollection(res.docs));
    getCategory().then((res) => setCategory(res.docs));
    getVariety().then((res) => setVariety(res.docs));
    getItem().then((res) => setItem(res.docs));
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

  const sliderMutation = useMutation({
    mutationFn: postSlider,
    onSuccess: (res) => {
      swal("Slider Added !", res.message, "success"),
        router.push("/slider/view-slider");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Slider</title>
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
          Add Slider used in as a Banner in the App
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
              Slider Name
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
                label="Slider name"
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
                Slider Type
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  name="type"
                >
                  <MenuItem key="collection" value="collection">
                    Collection
                  </MenuItem>
                  <MenuItem key="category" value="category">
                    Category
                  </MenuItem>
                  <MenuItem key="variety" value="variety">
                    Variety
                  </MenuItem>
                  <MenuItem key="item" value="item">
                    Item
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
                Slider Sub Type
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sub Type</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="typeId"
                  value={formik.values.typeId}
                  onChange={formik.handleChange}
                  name="typeId"
                >
                  {collection.map((x) => {
                    if (formik.values.type === "collection") {
                      return (
                        <MenuItem key={x.id} value={x.id}>
                          {x.name}
                        </MenuItem>
                      );
                    }
                  })}
                  {category.map((x) => {
                    if (formik.values.type === "category") {
                      return (
                        <MenuItem key={x.id} value={x.id}>
                          {x.name}
                        </MenuItem>
                      );
                    }
                  })}
                  {variety.map((x) => {
                    if (formik.values.type === "variety") {
                      return (
                        <MenuItem key={x.id} value={x.id}>
                          {x.name}
                        </MenuItem>
                      );
                    }
                  })}
                  {item.map((x) => {
                    if (formik.values.type === "item") {
                      return (
                        <MenuItem key={x.id} value={x.id}>
                          {x.name}
                        </MenuItem>
                      );
                    }
                  })}
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
                Slider Image
              </Typography>
              <CustomTextField
                // error={formik.touched.icon && Boolean(formik.errors.icon)}
                // helperText={formik.touched.icon && formik.errors.icon}
                type="file"
                id="image"
                name="image"
                // value={formik.values.image}
                onChange={(w) => {
                  formik.setFieldValue("image", w.target.files[0])
                }}
                fullWidth
                variant="outlined"
              />

              <LoadingButton
                disabled={sliderMutation.isLoading}
                loading={sliderMutation.isLoading}
                type="submit"
                fullWidth
                sx={theme.custom.addButton}
              >
                Add Slider
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddSlider.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
