import Head from "next/head";
import { DashboardSidebar } from "src/components/sidebar.js/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/layout/dashboard-layout";
import { InfoCard } from "../components/cards/infoCard";

import { useTheme } from "@mui/styles";
import { infoCard } from "src/constants/constant";
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
              title={infoCard.userManagement.department.title}
              desc={infoCard.userManagement.department.desc}
              url={infoCard.userManagement.department.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.userManagement.rolesPerma.title}
              desc={infoCard.userManagement.rolesPerma.desc}
              url={infoCard.userManagement.rolesPerma.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.userManagement.orgaUser.title}
              desc={infoCard.userManagement.orgaUser.desc}
              url={infoCard.userManagement.orgaUser.url}
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
              title={infoCard.userManagement.referUser.title}
              desc={infoCard.userManagement.referUser.desc}
              url={infoCard.userManagement.referUser.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.userManagement.gbpUser.title}
              desc={infoCard.userManagement.gbpUser.desc}
              url={infoCard.userManagement.gbpUser.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.userManagement.saleRefer.title}
              desc={infoCard.userManagement.saleRefer.desc}
              url={infoCard.userManagement.saleRefer.url}
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
              title={infoCard.userManagement.merchant.title}
              desc={infoCard.userManagement.merchant.desc}
              url={infoCard.userManagement.merchant.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.userManagement.retail.title}
              desc={infoCard.userManagement.retail.desc}
              url={infoCard.userManagement.retail.url}
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title={infoCard.userManagement.supplier.title}
              desc={infoCard.userManagement.supplier.desc}
              url={infoCard.userManagement.supplier.url}
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
userManagement.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
