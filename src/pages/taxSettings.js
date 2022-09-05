import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
//=======================================================
export default function taxSettings() {
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>User Management </title>
      </Head>

      <Container>
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
          Third Party Tax Settings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Government Taxes"
              desc="create, update, delete taxes imposed by government like Central Excise etc.,"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="HSN & GST"
              desc="create, update, delete HSN and GST related Information  "
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="TDS & TCS "
              desc="create, update, delete TDS and TCS related Information    "
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
              title="Interest Rates"
              desc="Create , Update, delete interest rates for Reserving gold , gold loans."
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
              title="Subscriptions for Ads"
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
