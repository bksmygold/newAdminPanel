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
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
import { useFormik } from "formik";
import * as yup from "yup";
import { updateOffer,getOfferById } from "src/apis/offer";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { useMutation,useQuery } from "@tanstack/react-query";
import Loading from "src/components/loading";

import { getCollection } from "src/apis/collection";
import { getCategory } from "src/apis/category";
import { getVariety } from "src/apis/variety";
import { getItem } from "src/apis/item";

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
export default function AddOffer() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      typeId: "",
      value: 0,
      valueType: "",
      image: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Offer Name").required("Offer Name is required"),
      type: yup.string("Enter Type").required("Type  is required"),
      typeId: yup.string("Enter Type Id").required("Type ID is required"),
      value: yup.string("Enter Offer value").required("Offer value is required"),
      valueType: yup.string("Enter Offer value type").required("Offer value type is required"),
    }),
    onSubmit: (values) => {
      offerMutation.mutate({data:values,id:router.query.id});
    },
  });

    const query = useQuery({
      querKey: ["offer", router.query.id],
      queryFn: () => getOfferById(router.query.id),
      onSuccess: (res) =>
        formik.setValues({
          name: res.data.name,
          type: res.data.type,
          typeId: res.data.typeId,
          value: res.data.value,
          valueType: res.data.valueType,
        }),
      enabled: !!router.query.id,
    });


  const offerMutation = useMutation({
    mutationFn: updateOffer,
    onSuccess: (res) => {
      swal("Offer updated !", res.message, "success"), router.push("/offer/view-offer");
    },
    onError: (err) => swal("Erro !", err.message, "error"),
  });

  const [collection, setCollection] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [variety, setVariety] = React.useState([]);
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    getCollection().then((res) => setCollection(res.data.data));
    getCategory().then((res) => setCategory(res.data.data));
    getVariety().then((res) => setVariety(res.data.data));
    getItem().then((res) => setItem(res.data.data));
  }, []);

  // if (offerMutation.isLoading) return <Loading />;

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Offer </title>
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
          Edit Offer
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Offer for products used in E-commerce
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
                Offer Name
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
                label="Offer name"
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
                Offer Type
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
                Offer Sub Type
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
                Value
              </Typography>
              <CustomTextField
                error={formik.touched.value && Boolean(formik.errors.value)}
                helperText={formik.touched.value && formik.errors.value}
                id="value"
                name="value"
                value={formik.values.value}
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
                Value Type
              </Typography>
              <CustomTextField
                error={formik.touched.valueType && Boolean(formik.errors.valueType)}
                helperText={formik.touched.valueType && formik.errors.valueType}
                id="valueType"
                name="valueType"
                value={formik.values.valueType}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="value type "
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
                Offer Image
              </Typography>
              <CustomTextField
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
                id="image"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                fullWidth
                type="file"
                variant="outlined"
              />

              {/* <Button
                type="submit"
                variant="outlined"
                sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
              >
                Edit Offer
              </Button> */}
              <LoadingButton
                disabled={offerMutation.isLoading}
                loading={offerMutation.isLoading}
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
                // sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
              >
                Edit Offer
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddOffer.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
