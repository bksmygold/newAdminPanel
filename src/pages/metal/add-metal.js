import Head from "next/head";
import {
  Container,
  Typography,
  Grid,
  Button,
  styled,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
import { useFormik } from "formik";
import * as yup from "yup";
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
export default function AddMetal() {
  //=======================
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Metal Name").required("Metal Name is required"),
    }),
    onSubmit: (values) => {
      console.log("values ----", values);
    },
  });
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Metal </title>
      </Head>
      {/* //======================================================= */}
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
          Add Metal
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add Metal Group for E-commerce
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
              Metal Name
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
                label="Metal name"
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
                Metal Icon
              </Typography>
              <FormControl sx={{ mt: 1 }} fullWidth>
                {" "}
                <InputLabel id="demo-simple-select-label">Metal Icon</InputLabel>
                <Select label="Search data">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Gold</MenuItem>
                  <MenuItem value={10}>Silver</MenuItem>
                  <MenuItem value={10}>Diamond</MenuItem>
                  <MenuItem value={10}>Stone</MenuItem>
                </Select>
              </FormControl>
              {/* <Grid item xl={3} lg={3} sm={6} xs={12}> */}
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
                >
                  Add Metal
                </Button>
              {/* </Grid> */}
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
