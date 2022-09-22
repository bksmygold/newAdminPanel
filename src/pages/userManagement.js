import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
import { useTheme } from "@mui/styles";
//=======================================================
export default function userManagement() {
  const theme = useTheme()
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>User Management </title>
      </Head>

      <Container sx={{ marginLeft: 2 }}>
        {/* ------------------------------ */}

        <Typography
          sx={theme.custom.typography.infoCard.h1}
          // variant="h6"
        >
          Organization Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Roles & Permissions"
              desc="create, update, delete user roles and manage thier permission"
              url="/userManagement/role/view-rolesPermission"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Organisation Users"
              desc="create, update, delete user for MyGold Organiation"
              url="/userManagement/user/view-organisationUser"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
        <Typography
          sx={theme.custom.typography.infoCard.h1}

        >
          Marketing Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Referrals Users"
              desc="create, update, delete VIP/influencer Referral"
              url="/userManagement/referralUsers/view-referralUsers"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="GBP Users"
              desc="create, update, delete GBP Users"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Sales Referrals"
              desc="create, update, delete sales referrals"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
        <Typography
                sx={theme.custom.typography.infoCard.h1}

        >
          Buisness Related
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Merchant"
              desc="create, update, delete merchants, commissions and manage their approvals"
              url="/userManagement/merchant/view-merchant"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Retail"
              desc="create, update, delete retail Merchant Accounts and manage them"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Suppliers"
              desc="create, update, delete suppliers for e-commerce"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
userManagement.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
