import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
//=======================================================
export default function userManagement() {
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
          Organization Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Roles & Permissions"
              desc="create, update, delete user roles and manage thier permission"
              url="/create-rolesPermission"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Organisation Users"
              desc="create, update, delete user for MyGold Organiation"
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
          Marketing Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="VIP Referrals" desc="create, update, delete VIP/influencer Referral" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="GBP Users" desc="create, update, delete GBP Users" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Sales Referrals" desc="create, update, delete sales referrals" />
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
          Buisness Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Merchant"
              desc="create, update, delete merchants, commissions and manage their approvals"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Retail"
              desc="create, update, delete retail Merchant Accounts and manage them"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Suppliers" desc="create, update, delete suppliers for e-commerce" />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
userManagement.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
