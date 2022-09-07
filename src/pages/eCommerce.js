import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
import { useRouter } from "next/router";
//=======================================================
export default function eCommerce() {
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>E-Commerce </title>
      </Head>

          <Container sx={{backgroundColor:""}}>
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
          E-commerce Master
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard url = '/metal' title="Metal" desc="create, update, delete Metals" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Metal Groups"
              desc="create, update, delete Metal Groups relate them to Metal"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Ornaments" desc="create, update, delete Ornaments  " />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Units" desc="create, update, delete Units" />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Cut" desc="create, update, delete Cut" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Colors" desc="create, update, delete Colors" />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Shape" desc="create, update, delete Shape" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Clarity" desc="create, update, delete Clarity" />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Style" desc="create, update, delete Style" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Collections" desc="create, update, delete Collections" />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Categories" desc="create, update, delete Categories" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Varieties" desc="create, update, delete Varieties" />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Items"
              desc="create, update, delete Items"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Product Types"
              desc="create, update, delete Product Types"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
eCommerce.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
