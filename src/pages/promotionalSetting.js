import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
import { useTheme } from "@mui/styles";
//=======================================================
export default function promotionalSetting() {
  const theme = useTheme()
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Promotional Settings</title>
      </Head>

      <Container sx={{ padding: 2, marginLeft: 2 }}>
        {/* ------------------------------ */}

        <Typography
          sx={theme.custom.typography.infoCard.h1}

        >
          App Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Offer Sliders"
              desc="create, update, delete Offer Sliders"
              url="/promotionalSetting/offer/view-offer"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="App slider"
              desc="create, update, delete Offer Sliders"
              url="/promotionalSetting/slider/view-slider"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="How-to Videos"
              desc="create, update, delete how To Videos"
              url="how-to-video/view-how-to-video"
            />
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
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Referral Type"
              desc="create, update, delete referral type"
              url="/promotionalSetting/referralType/view-referralType"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
        <Typography
          sx={theme.custom.typography.infoCard.h1}

        >
          Business Related
          <Divider />
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard sx={{ overFlowWrap: "break-word" }} title="Merchant Banners" desc="Approve, disapprove Merchant Banners" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
promotionalSetting.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
