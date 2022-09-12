import Head from "next/head";
import {
  Container,
  Typography,
  Grid,
  Button,
  styled,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Box,
} from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik, FormikProvider, FieldArray } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { updateMakingCharge, getMakingChargeById } from "src/apis/makingCharge";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSupplier } from "src/apis/supplier";
import { getProductType } from "src/apis/productType";
import { getItem } from "src/apis/item";
import { getMetalGroup } from "src/apis/metalGroup";
import { getVariety } from "src/apis/variety";
import Loading from "src/components/loading";
//=======================================================

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
export default function EditMakingCharge() {
  //=======================
  const router = useRouter();

  const [supplier, setSupplier] = useState([]);
  const [variety, setVariety] = useState([]);
  const [productType, setProductType] = useState([]);
  const [item, setItem] = useState([]);
  const [metalGroup, setMetalGroup] = useState([]);

  useEffect(() => {
    getSupplier().then((res) => setSupplier(res.data.data));
    getVariety().then((res) => setVariety(res.data.data));
    getItem().then((res) => setItem(res.data.data));
    getProductType().then((res) => setProductType(res.data.data));
    getMetalGroup().then((res) => setMetalGroup(res.data.data));
  }, []);

  //=======================================================
  const formik = useFormik({
    initialValues: {
      supplier: "",
      variety: "",
      item: "",
      productType: "",
      metalGroup: "",
      rates: [],
    },
    validationSchema: yup.object({
      supplier: yup.string("Enter supplier Name").required("supplier is required"),
      variety: yup.string("Enter variety").required("variety is required"),
      item: yup.string("Enter item").required("item is required"),
      productType: yup.string("Enter product type").required("product type is required"),
      metalGroup: yup.string("Enter metal group").required("metal group is required"),
    }),
    onSubmit: (values) => {
      makingChargeMutation.mutate({ data: values, id: router.query.id });
      console.log(values);
    },
  });

  const query = useQuery({
    queryKey: ["making charge", router.query.id],
    queryFn: () => getMakingChargeById(router.query.id),
    onSuccess: (res) => formik.setValues(res.data),
    onError: (err) => console.log(err),
    enabled: !!router.query.id,
  });

  const makingChargeMutation = useMutation({
    mutationFn: updateMakingCharge,
    onSuccess: (res) => {
      swal("Making Charge Updated !", res.message, "success"),
        router.push("/makingCharge/view-makingCharge");
    },
    onError: (err) => swal("Erro !", err.message, "error"),
  });
  if (query.isLoading) return <Loading />;

  //=======================================================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Making Charge </title>
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
          Edit Making Charge
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Making Charge for products used in E-commerce
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
                Supplier Name
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">supplier name</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="supplier"
                  value={formik.values.supplier}
                  onChange={formik.handleChange}
                  name="supplier"
                >
                  {supplier?.map((x) => (
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
                Variety Name
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">variety name</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="variety"
                  value={formik.values.variety}
                  onChange={formik.handleChange}
                  name="variety"
                >
                  {variety?.map((x) => (
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
                Item Name
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">item name</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="item"
                  value={formik.values.item}
                  onChange={formik.handleChange}
                  name="item"
                >
                  {item?.map((x) => (
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
                Product Type
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">product type </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="productType"
                  value={formik.values.productType}
                  onChange={formik.handleChange}
                  name="productType"
                >
                  {productType?.map((x) => (
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
                Metal Group
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">metal group </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="metalGroup"
                  value={formik.values.metalGroup}
                  onChange={formik.handleChange}
                  name="metalGroup"
                >
                  {metalGroup?.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.shortName} {x.metal.name}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>
              {/* ----------------------- Rates --------------------- */}
              <FormikProvider value={formik}>
                <FieldArray
                  name="rates"
                  render={(arrayHelpers) => (
                    <div>
                      {formik.values.rates.map((rate, index) => (
                        <div key={index}>
                          {/** both these conventions do the same  */}

                          <Typography
                            variant="body1"
                            sx={{
                              color: "#8B5704",
                              marginBottom: 2,
                              marginTop: 2,
                              fontWeight: 600,
                            }}
                          >
                            From Weight
                          </Typography>
                          <TextField
                            name={`rates[${index}].fromWeight`}
                            type="number"
                            value={formik.values.rates[index].fromWeight}
                            onChange={formik.handleChange}
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
                            To Weight
                          </Typography>
                          <TextField
                            name={`rates.${index}.toWeight`}
                            type="number"
                            value={formik.values.rates[index].toWeight}
                            onChange={formik.handleChange}
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
                            Rate Type
                          </Typography>
                          <CustomFormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">supplier name</InputLabel>
                            <Select
                              defaultValue=""
                              name={`rates.${index}.rateType`}
                              value={formik.values.rates[index].rateType}
                              onChange={formik.handleChange}
                            >
                              <MenuItem value="net_weight">Net Weight</MenuItem>
                              <MenuItem value="gross_weight"> Gross Weight</MenuItem>
                              <MenuItem value="per_piece"> Per Piece</MenuItem>
                              <MenuItem value="fixed"> Fixed</MenuItem>
                              <MenuItem value="gross_weight_percentage">
                                {" "}
                                Gross Weight Percentage
                              </MenuItem>

                              <MenuItem value="net_weight_percentage">
                                {" "}
                                Net Weight Percentage
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
                            Rate
                          </Typography>
                          <TextField
                            name={`rates.${index}.rate`}
                            type="number"
                            value={formik.values.rates[index].rate}
                            onChange={formik.handleChange}
                          />
                          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Button
                              sx={{ backgroundColor: "#ff6d6d", color: "white", marginTop: 1 }}
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove
                            </Button>
                          </Box>
                        </div>
                      ))}
                      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Button
                          sx={{
                            m: 2,
                            backgroundColor: "#70dd89",
                            color: "white",
                            justifyContent: "center",
                          }}
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ fromWeight: 0, toWeight: 0, rate: 0, rateType: "" })
                          }
                        >
                          Add
                        </Button>
                      </Box>
                    </div>
                  )}
                />
              </FormikProvider>

              {/* --------------------------------------------------- */}
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <LoadingButton
                  disabled={makingChargeMutation.isLoading}
                  loading={makingChargeMutation.isLoading}
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
                  Edit Making Charge
                </LoadingButton>
              </Box>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditMakingCharge.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
