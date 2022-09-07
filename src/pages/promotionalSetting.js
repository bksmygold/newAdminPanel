import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
//=======================================================
export default function promotionalSetting() {
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Promotional Settings</title>
      </Head>

      <Container sx={{ padding:5 }}>
        {/* ------------------------------ */}

        <Typography
          sx={{
            marginTop: 4,
            marginBottom: 2,
            color: "#8B5704",
            fontWeight: "bolder",
          }}
          variant="h6"
        >
          App Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Offer Sliders" desc="create, update, delete Offer Sliders" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="How-to Videos" desc="create, update, delete how To Videos" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Testimonials" desc="create, update, delete Testimonials Videos" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Ad Position" desc="create, update, delete Ad Position" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Offer Popups"
              desc="create, update, delete offer popups with timeline conditions etc."
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
        <Typography
          sx={{
            marginTop: 4,
            marginBottom: 2,
            color: "#8B5704",
            fontWeight: "bolder",
          }}
          variant="h6"
        >
          Business Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Merchant Banners" desc="Approve, disapprove Merchant Banners" />
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
promotionalSetting.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
