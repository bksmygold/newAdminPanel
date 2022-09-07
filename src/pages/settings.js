import Head from 'next/head';
import {Grid, Box, Container, Typography, Divider, TextField, Button ,Card,CardHeader,CardContent} from "@mui/material";
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
import Image from "next/image";

//=======================================================================
const Settings = (props) => {
  return (
    //=======================================================================
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
        <Container maxWidth="lg">
          <Typography sx={{ mb: 1, color: "#8B5704" }} variant="h4">
            Settings
          </Typography>
          {/* <SettingsNotifications /> */}
          <Box sx={{ pt: 3 }}>
            <form {...props}>
              <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }}>
                <CardHeader
                  subheader="Settings for the BKS MyGold Organization"
                  title="Organization Profile"
                />
                <Divider />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Organization Name"
                    // onChange={handleChange}
                    // value={values.password}
                    variant="outlined"
                    sx={{ mb: 5 }}
                  />
                  <TextField
                    fullWidth
                    label="Organization GST"
                    sx={{ mb: 5 }}
                    // onChange={handleChange}
                    // value={values.password}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Organization CIN"
                    // onChange={handleChange}
                    // value={values.password}
                    sx={{ mb: 5 }}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Organization Address"
                    // onChange={handleChange}
                    value="41/587 set ram jas road, narahi, hazratganj, Lucknow-226001"
                    variant="outlined"
                    sx={{ mb: 5 }}
                  />
                  <TextField
                    fullWidth
                    label="Signature for Invoice"
                    // onChange={handleChange}
                    // value={values.password}
                    variant="outlined"
                    sx={{ mb: 5 }}
                  />
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <Button
                    sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
                    color="primary"
                    variant="outlined"
                  >
                    Update
                  </Button>
                </Box>
              </Card>
            </form>
          </Box>
        </Container>
        {/* ---------------------------------------- */}
        <Container maxWidth="lg">
          <Typography sx={{ mb: 2, mt: 2, color: "#8B5704" }} variant="h4">
            App Related Settings
          </Typography>
          {/* <SettingsNotifications /> */}
          <Box sx={{ pt: 3 }}>
            <form {...props}>
              <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }}>
                <Divider />
                <CardContent>
                  <Typography sx={{ mb: 2, color: "#8B5704" }} variant="h5">
                    App Logo
                  </Typography>
                  <TextField
                    fullWidth
                    type="file"
                    // onChange={handleChange}
                    // value={values.password}
                    variant="outlined"
                    sx={{ mb: 5 }}
                  />{" "}
                  <Image  src="/logo.png" alt="me" width="80" height="80" />
                  <Divider />
                  <Divider />
                  
                </CardContent>

                <Typography sx={{ ml: 5, color: "#8B5704" }} variant="h5">
                  App Color
                </Typography>
                <CardContent>
                  <Grid container>
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
                      <Box
                        sx={{
                          width: 150,
                          height: 150,
                          borderRadius: 2,
                          backgroundColor: "#fffdfa",
                          border: "4px solid grey",
                        }}
                      ></Box>{" "}
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        Background Color
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
                      <Box
                        sx={{
                          width: 150,
                          height: 150,
                          borderRadius: 2,
                          backgroundColor: "#905e0f",
                          border: "4px solid grey",
                        }}
                      ></Box>
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        Primary Color
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
                      <Box
                        sx={{
                          width: 150,
                          height: 150,
                          borderRadius: 2,
                          backgroundColor: "#050505",
                          border: "4px solid grey",
                        }}
                      ></Box>
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        Text Color
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
                      <Box
                        sx={{
                          width: 150,
                          height: 150,
                          borderRadius: 2,
                          backgroundColor: "#fdfaf2",
                          border: "4px solid grey",
                        }}
                      ></Box>
                      <Typography
                        sx={{ color: "#8B5704", fontWeight: "bolder" }}
                        variant="captions"
                      >
                        Secondary Color
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <Button
                    sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
                    color="primary"
                    variant="outlined"
                  >
                    Update
                  </Button>
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
