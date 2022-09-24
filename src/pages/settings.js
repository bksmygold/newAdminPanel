import Head from 'next/head';
import { Grid, Box, Container, Typography, Divider, TextField, Button, Label, Card, CardHeader, CardContent, styled } from "@mui/material";
import { DashboardLayout } from '../components/layout/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
import Image from "next/image";
import { useFormik } from "formik";
import { useTheme } from '@mui/styles';
import { getSettings, getSettingsById, postSetting, updateSetting } from 'src/apis/setting';
import * as yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingButton from "@mui/lab/LoadingButton";
import Loading from 'src/components/loading';

//================================
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
//=======================================================================
const Settings = (props) => {
  const theme = useTheme()
  //=======================================================
  const formik = useFormik({
    initialValues: {
      organizationName: "",
      organizationLogo: "",
      organizationGST: "",
      organizationCIN: "",
      organizationAddress: "",
      organizationSignature: "",
      appBackgroundColor: "",
      appPrimaryColor: "",
      appSecondaryColor: "",
      appTextColor: "",
    },
    validationSchema: yup.object({
      organizationName: yup.string("Enter organization Name").required("organization Name is required"),
      // organizationLogo: yup.string("Enter organization Logo").required("organization Logo is required"),
      organizationGST: yup.string("Enter  organization GST").required("organization GST is required"),
      organizationCIN: yup.string("Enter organization CIN").required("organization CIN is required"),
      organizationAddress: yup.string("Enter organization Address").required("organization Address is required"),
      // organizationSignature: yup.string("Enter organization Signature").required("organization Signature is required"),
      appBackgroundColor: yup.string("Enter appBackground Color").required("appBackground Color is required"),
      appPrimaryColor: yup.string("Enter appPrimary Color").required("appPrimary Color is required"),
      appSecondaryColor: yup.string("Enter appSecondary Color").required("appSecondary Color is required"),
      appTextColor: yup.string("Enter app TextColor").required("app TextColor is required"),

    }),
    onSubmit: (values) => {
      console.log("payload --->", values);
      settingMutation.mutate({ data: values, id: "632d50e5182402051bb066ff" });
    },
  });

  const query = useQuery({
    querKey: ['settings', "632d50e5182402051bb066ff"],
    queryFn: () => getSettingsById("632d50e5182402051bb066ff"),
    onSuccess: (res) => formik.setValues(res),

  })

  const settingMutation = useMutation({
    mutationFn: updateSetting,
    onSuccess: (res) => {
      swal("Settings updated !", "Settings updated", "success"), router.push("/");
    },
    onError: (err) => swal("Error !", err.message, "error"),
  });

  if (query.isLoading) return <Loading />

  console.log("-->", query.data)
  //=======================================================================
  return (
    <>
      <Head>
        <title>Dashboard | Settings</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Typography sx={[theme.custom.typography.dashBoard.h1, { mt: 5 }]}>
            Settings
          </Typography>
          {/* <SettingsNotifications /> */}
          <Box sx={{ pt: 3 }}>
            <form onSubmit={formik.handleSubmit}>
              <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }}>
                <CardHeader
                  subheader="Settings for the BKS MyGold Organization"
                  title="Organization Profile"
                />
                <Divider />
                <CardContent >
                  <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                      <CustomTextField
                        error={formik.touched.organizationName && Boolean(formik.errors.organizationName)}
                        helperText={formik.touched.organizationName && formik.errors.organizationName}
                        id="organizationName"
                        name="organizationName"
                        value={formik.values?.organizationName}
                        onChange={formik.handleChange}
                        fullWidth
                        label="Organization Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <CustomTextField

                        label="Organization GST"
                        error={formik.touched.organizationGST && Boolean(formik.errors.organizationGST)}
                        helperText={formik.touched.organizationGST && formik.errors.organizationGST}
                        id="organizationGST"
                        name="organizationGST"
                        value={formik.values?.organizationGST}
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>

                      <CustomTextField

                        label="Organization CIN"
                        error={formik.touched.organizationCIN && Boolean(formik.errors.organizationCIN)}
                        helperText={formik.touched.organizationCIN && formik.errors.organizationCIN}
                        id="organizationCIN"
                        name="organizationCIN"
                        value={formik.values?.organizationCIN}
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>

                      <CustomTextField
                        fullWidth
                        label="Organization Address"
                        error={formik.touched.organizationAddress && Boolean(formik.errors.organizationAddress)}
                        helperText={formik.touched.organizationAddress && formik.errors.organizationAddress}
                        id="organizationAddress"
                        name="organizationAddress"
                        value={formik.values?.organizationAddress}
                        onChange={formik.handleChange}

                      />
                    </Grid>
                    <Grid item md={6} sm={6}xs={12}>
                    <Typography sx={[theme.custom.typography.dashBoard.h1, { mb: 5 }]}>
                      Organization Signature
                    </Typography>
                      <img src={query.data.organizationSignature} />
                      <CustomTextField
                        fullWidth
                        error={formik.touched.organizationSignature && Boolean(formik.errors.organizationSignature)}
                        helperText={formik.touched.organizationSignature && formik.errors.organizationSignature}
                        id="organizationSignature"
                        name="organizationSignature"
                        type="file"
                        onChange={formik.handleChange}
                      />
                    </Grid>


                    <Grid item md={6} sm ={6}xs={12}>

                      <Typography sx={[theme.custom.typography.dashBoard.h1, { mb: 5 }]}>
                        App Logo
                      </Typography>


                      <img src={query.data.organizationLogo} />

                      <CustomTextField
                        fullWidth
                        type="file"
                        error={formik.touched.organizationLogo && Boolean(formik.errors.organizationLogo)}
                        helperText={formik.touched.organizationLogo && formik.errors.organizationLogo}
                        id="organizationLogo"
                        name="organizationLogo"
                        onChange={formik.handleChange}

                      // onChange={(e) =>
                      //   formik.setFieldValue('organizationLogo', e.target.files[0])
                      // } 
                      />{" "}

                    </Grid>
                  </Grid>
                  {/* <CardContent> */}

                  <Typography sx={[theme.custom.typography.dashBoard.h1, { mb: 5 }]}>
                    App Color
                  </Typography>
                  <Grid container>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        // border:"1px solid red"
                      }}
                      item
                      xl={3}
                      lg={3}
                      sm={6}
                      md={3}
                      xs={12}
                    >
                      <CustomTextField
                        type="color"
                        error={formik.touched.appBackgroundColor && Boolean(formik.errors.appBackgroundColor)}
                        helperText={formik.touched.appBackgroundColor && formik.errors.appBackgroundColor}
                        id="appBackgroundColor"
                        name="appBackgroundColor"
                        value={formik.values?.appBackgroundColor}
                        onChange={formik.handleChange}
                        label="Background Color"

                      />
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        {query.data.appBackgroundColor}
                      </Typography>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      item
                      xl={3}
                      lg={3}
                      sm={6}
                      xs={12}
                    >

                      <CustomTextField
                        type="color"
                        error={formik.touched.appPrimaryColor && Boolean(formik.errors.appPrimaryColor)}
                        helperText={formik.touched.appPrimaryColor && formik.errors.appPrimaryColor}
                        id="appPrimaryColor"
                        name="appPrimaryColor"
                        value={formik.values?.appPrimaryColor}
                        onChange={formik.handleChange}
                        label="Primary Color"


                      />
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        {query.data.appPrimaryColor}
                      </Typography>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      item
                      xl={3}
                      lg={3}
                      sm={6}
                      xs={12}
                    >
                      <CustomTextField
                        type="color"
                        error={formik.touched.appSecondaryColor && Boolean(formik.errors.appSecondaryColor)}
                        helperText={formik.touched.appSecondaryColor && formik.errors.appSecondaryColor}
                        id="appSecondaryColor"
                        name="appSecondaryColor"
                        value={formik.values?.appSecondaryColor}
                        onChange={formik.handleChange}
                        label="Secondary Color"
                      />
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        {query.data.appSecondaryColor}
                      </Typography>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      item
                      xl={3}
                      lg={3}
                      sm={6}
                      xs={12}
                    >
                      <CustomTextField
                        type="color"
                        error={formik.touched.appTextColor && Boolean(formik.errors.appTextColor)}
                        helperText={formik.touched.appTextColor && formik.errors.appTextColor}
                        id="appTextColor"
                        name="appTextColor"
                        value={formik.values?.appTextColor}
                        onChange={formik.handleChange}
                        label="Text Color"

                      />
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        {query.data.appTextColor}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                {/* </CardContent>   */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <LoadingButton
                    disabled={settingMutation.isLoading}
                    loading={settingMutation.isLoading}
                    type="submit"
                    sx={theme.custom.addButton}
                  >
                    Add Settings
                  </LoadingButton>
                </Box>
              </Card>

            </form>
          </Box>
        </Container>

        {/* ------------------------------------------------ */}
      </Box>
    </>
  );
};

Settings.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Settings;
