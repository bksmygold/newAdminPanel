import Head from "next/head";
import { DashboardSidebar } from "src/components/sidebar/dashboard-sidebar";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { DashboardLayout } from "../components/layout/dashboard-layout";
import { InfoCard } from "../components/cards/infoCard";
import { useTheme } from "@mui/styles";
import { infoCard } from "src/constant";
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
              title={infoCard.promo.offer.title}
              desc={infoCard.promo.offer.desc}
              url={infoCard.promo.offer.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.promo.appSlider.title}
              desc={infoCard.promo.appSlider.desc}
              url={infoCard.promo.appSlider.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.promo.video.title}
              desc={infoCard.promo.video.desc}
              url={infoCard.promo.video.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.promo.testi.title}
              desc={infoCard.promo.testi.desc}
              url={infoCard.promo.testi.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.promo.offerPopup.title}
              desc={infoCard.promo.offerPopup.desc}
              url={infoCard.promo.offerPopup.url} />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.promo.referratlType.title}
              desc={infoCard.promo.referratlType.desc}
              url={infoCard.promo.referratlType.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.promo.merchNatBanner.title}
              desc={infoCard.promo.merchNatBanner.desc}
              url={infoCard.promo.merchNatBanner.url}
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
            <InfoCard sx={{ overFlowWrap: "break-word" }}
              title={infoCard.promo.offer.title}
              desc={infoCard.promo.offer.desc}
              url={infoCard.promo.offer.url} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
promotionalSetting.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
