import Head from "next/head";
import { styled, TextField, Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import { useFormik } from "formik";
import * as yup from "yup";
import { getOrnamentById, updateOrnament } from "src/apis/ornament";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import swal from "sweetalert";
import Loading from "src/components/loading";

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
export default function EditOrnament(props) {
  const router = useRouter();
  console.log(router);
  //======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Ornament Name").required("Ornament Name is required"),
    }),
    onSubmit: (values) => {
      mutationOrna.mutate({ data: values, id: router.query.id });
    },
  });
  console.log("formik", formik);

  const query = useQuery({
    queryKey: ["ornament", router.query.id],
    queryFn: () => getOrnamentById(router.query.id),
    onSuccess: (res) => formik.setValues(res.data),
    onError: (err) => console.log(err),
    enabled: !!router.query.id,
  });
  const mutationOrna = useMutation({
    mutationFn: updateOrnament,
    onSuccess: (res) => {
      swal("Ornament Updated !", res.message, "success"),
        router.push("/ornament/view-ornament");
    },
    onError: (err) => console.log(err),
  });
  if (query.isLoading) return <Loading />;

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Ornament </title>
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
          Edit Ornament
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Ornament for products used in E-commerce
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
              Ornament Name
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <CustomTextField
                error={formik.touched?.name && Boolean(formik.errors?.name)}
                helperText={formik.touched?.name && formik.errors?.name}
                id="name"
                name="name"
                value={formik.values?.name}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                // value={ ornamentEdit.name}
              />

              {/* <Button
                type="submit"
                variant="outlined"
                sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
              >
                Add Ornament
              </Button> */}
              <LoadingButton
                disabled={mutationOrna.isLoading}
                loading={mutationOrna.isLoading}
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
                Edit Ornament
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditOrnament.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;