import Head from "next/head";
import { Container, Typography, Grid, Button, styled,TextField } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
import { useFormik } from "formik";
import * as yup from "yup";
import { getUnitById,updateUnit } from "src/apis/unit";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
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
export default function EditMetal() {
  //=======================
const router =useRouter()

  const formik = useFormik({
    initialValues: {
      name: "",
      conversionFactor: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Unit Type Name").required("Unit Type is required"),
      conversionFactor: yup
        .number("Enter Conversion Factor")
        .required("Conversion Factor is required"),
    }),
    onSubmit: (values) => {
      unitMutation.mutate({ data: values, id: router.query.id });
    },
  });
  console.log("formik", formik);

  const query = useQuery({
    queryKey: ["Unit", router.query.id],
    queryFn: () => getUnitById(router.query.id),
    onSuccess: (res) => formik.setValues(res.data),
    onError: (err) => console.log(err),
    enabled: !!router.query.id,
  });
  const unitMutation = useMutation({
    mutationFn: updateUnit,
    onSuccess: (res) => {
      swal("Unit Updated !", res.message, "success"),
        router.push("/unit/view-unit");
    },
    onError: (err) => console.log(err),
  });
  if (query.isLoading) return <Loading />;

  
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Unit </title>
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
          Edit Unit
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Edit Unit for products used in E-commerce
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
              Unit Type Name
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
                label="Unit Type name"
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
                Conversion Factor
              </Typography>
              <CustomTextField
                error={formik.touched.conversionFactor && Boolean(formik.errors.conversionFactor)}
                helperText={formik.touched.conversionFactor && formik.errors.conversionFactor}
                id="conversionFactor"
                name="conversionFactor"
                value={formik.values.conversionFactor}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Conversion Factor "
                sx={{ mt: 1 }}
              />

              <LoadingButton
                disabled={unitMutation.isLoading}
                loading={unitMutation.isLoading}
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
                Edit Unit
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
