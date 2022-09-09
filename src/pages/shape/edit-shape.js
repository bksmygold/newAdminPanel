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
import { getShapeById,updateShape } from "src/apis/shape";
import { useMutation,useQuery } from "@tanstack/react-query";
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
export default function EditShape() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Shape Name").required("Shape is required"),
    }),
    onSubmit: (values) => {
      shapeMutation.mutate({data:values,id:router.query.id});
    },
  });

  const query = useQuery({
    queryKey:['shape',router.query.id],
    queryFn:()=>getShapeById(router.query.id),
    onSuccess:(res)=> formik.setValues(res.data),
    enabled: !!router.query.id,

  })

  const shapeMutation = useMutation({
    mutationFn: updateShape,
    onSuccess: (res) => {
      swal("Shape Updated !", res.message, "success"), router.push("/shape/view-shape");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });
  if (query.isLoading) return <Loading />

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Shape</title>
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
          Edit Shape
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Shape for products used in E-commerce
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
              Shape Name
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
                label="Shape name"
              />

              <LoadingButton
                disabled={shapeMutation.isLoading}
                loading={shapeMutation.isLoading}
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
                Edit Shape
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditShape.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
