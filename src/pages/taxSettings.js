import Head from "next/head";
import { DashboardSidebar } from "src/components/sidebar.js/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/layout/dashboard-layout";
import { InfoCard } from "../components/cards/infoCard";
import { useTheme } from "@mui/styles";
import { infoCard } from "src/constants/constant";
//=======================================================
export default function taxSettings() {
  const theme = useTheme()

  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Tax Settings </title>
      </Head>

      <Container sx={{ padding: 1, marginLeft: 2 }}>
        {/* ------------------------------ */}

        <Typography
          sx={theme.custom.typography.infoCard.h1}
        >
          Third Party Tax Settings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.taxes.governmentTax.title}
              desc={infoCard.taxes.governmentTax.desc}
              url={infoCard.taxes.governmentTax.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.taxes.gst.title}
              desc={infoCard.taxes.gst.desc}
              url={infoCard.taxes.gst.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.taxes.tds.title}
              desc={infoCard.taxes.tds.desc}
              url={infoCard.taxes.tds.url}
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
        <Typography
          sx={theme.custom.typography.infoCard.h1}

          variant="h6"
        >
          Modules Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.taxes.buySave.title}
              desc={infoCard.taxes.buySave.desc}
              url={infoCard.taxes.buySave.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
            title={infoCard.taxes.interest.title}
            desc={infoCard.taxes.interest.desc}
            url={infoCard.taxes.interest.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
               title={infoCard.taxes.mandi.title}
               desc={infoCard.taxes.mandi.desc}
               url={infoCard.taxes.mandi.url}
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
            title={infoCard.taxes.referEarn.title}
            desc={infoCard.taxes.referEarn.desc}
            url={infoCard.taxes.referEarn.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
           title={infoCard.taxes.buySell.title}
           desc={infoCard.taxes.buySell.desc}
           url={infoCard.taxes.buySell.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
                   title={infoCard.taxes.eComm.title}
                   desc={infoCard.taxes.eComm.desc}
                   url={infoCard.taxes.eComm.url}
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
        <Typography
          sx={theme.custom.typography.infoCard.h1}

          variant="h6"
        >
          Business Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
             title={infoCard.taxes.retailComm.title}
                   desc={infoCard.taxes.retailComm.desc}
                   url={infoCard.taxes.retailComm.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
            title={infoCard.taxes.subBid.title}
            desc={infoCard.taxes.subBid.desc}
            url={infoCard.taxes.subBid.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
                title={infoCard.taxes.subAds.title}
                desc={infoCard.taxes.subAds.desc}
                url={infoCard.taxes.subAds.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
               title={infoCard.taxes.gbpLevel.title}
               desc={infoCard.taxes.gbpLevel.desc}
               url={infoCard.taxes.gbpLevel.url}
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
taxSettings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
