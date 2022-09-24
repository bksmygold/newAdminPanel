import Head from "next/head";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Grid,
  styled,
  TextField,
} from "@mui/material";
import { DashboardLayout } from "../../components/layout/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { postVideo } from "src/apis/howToVideo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddModeratorRounded } from "@mui/icons-material";

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
export default function AddVideo() {
  //=======================
  const router = useRouter();
  //=======================================================
  const formik = useFormik({
    initialValues: {
      title: "",
      language: "",
      category: "",
      video: "",
    },
    validationSchema: yup.object({
      title: yup.string("Enter how-to-video title").required("how-to-video title  is required"),
      language: yup.string("Enter language").required("language is required"),
      category: yup.string("Enter category Name").required("categoryis required"),
    }),
    onSubmit: (values) => {
        console.log("payload --->",values);

      videoMutation.mutate(values);
      // console.log('hua ')
    },
  });



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

  const videoMutation = useMutation({
    mutationFn: postVideo,
    onSuccess: (res) => {
      swal("how-to-video Added !", res.message, "success"),
        router.push("/howToVideo/view-howToVideo");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-how-to-video</title>
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
          Add How-To-Video
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add how-to-video used in as a Banner in the App
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
              Video Title
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <CustomTextField
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                label="Video Title"
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
                Video Language
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="language"
                  value={formik.values.language}
                  onChange={formik.handleChange}
                  name="language"
                >
                  <MenuItem key="Hi" value="hindi">
                    Hindi
                  </MenuItem>
                  <MenuItem key="En" value="english">
                    English
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
                Video Category
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  name="category"
                >
                  <MenuItem key="testimonial" value="testimonial">
                    Testimonials
                  </MenuItem>
                  <MenuItem key="how_to" value="how_to">
                    How-To
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
                Upload Video
              </Typography>
              <CustomTextField
                // error={formik.touched.icon && Boolean(formik.errors.icon)}
                // helperText={formik.touched.icon && formik.errors.icon}
                type="file"
                id="video"
                name="video"
                value={formik.values.video}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
              />

              <LoadingButton
                disabled={videoMutation.isLoading}
                loading={videoMutation.isLoading}
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
                Add how-to-video
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddVideo.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
