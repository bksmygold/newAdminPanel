import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
import { useTheme } from "@mui/styles";
import { infoCard } from "src/constant";
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
              title="Buy & Save"
              desc="Create , Update, delete bonus and calculation percentages applicable on buy and save plans"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Interest Rates"
              desc="Create , Update, delete interest rates for Reserving gold , gold loans."
              url="/taxSettings/loanInterest/view-loanInterest"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Treasury Gold Mandi "
              desc="Update Mandi Government Treasury Gold for the gold declared"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Refer and Earn"
              desc="Create , Update, delete referral and joining bonus"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Bid - Buy and Sell"
              desc="Create , Update, delete commissions and calculation percentages applicable on Bids"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="E-commerce"
              desc="Create , Update, delete commissions and calculation percentages applicable on Bids"
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
              title="Retailer Commissions"
              desc="Create , Update, delete commission percentages "
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Subscriptions(Bids)"
              desc="Create , Update, delete subscription plans for Bid-Buy and Sell Users"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Subscriptions(Ads)"
              desc="Create , Update, delete subscription plans for Ads for Retailers"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="GBP Levels"
              desc="Create , Update, delete GBP levels, commissions etc settings"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
taxSettings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
