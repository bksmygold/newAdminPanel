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

      <Container sx={{ padding: 4 }}>
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
            <InfoCard url="/metal/view-metal" title="Metal" desc="create, update, delete Metals" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Metal Groups"
              desc="create, update, delete Metal Groups relate them to Metal"
              url="/metalGroup/view-metalGroup"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Ornaments"
              desc="create, update, delete Ornaments"
              url="/ornament/view-ornament"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Units" desc="create, update, delete Units" url="/unit/view-unit" />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Cut" desc="create, update, delete Cut" url="/cut/view-cut" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Colors" desc="create, update, delete Colors" url="/color/view-color" />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Shape" desc="create, update, delete Shape" url="/shape/view-shape" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Clarity"
              desc="create, update, delete Clarity"
              url="/clarity/view-clarity"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Style" desc="create, update, delete Style" url="/style/view-style" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Collections"
              desc="create, update, delete Collections"
              url="/collection/view-collection"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Categories"
              desc="create, update, delete Categories"
              url="/category/view-category"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Varieties"
              desc="create, update, delete Varieties"
              url="/variety/view-variety"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="Items" desc="create, update, delete Items" url="/item/view-item" />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Product Types"
              desc="create, update, delete Product Types"
              url="/productType/view-productType"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard title="FAQ" desc="create, update, delete FAQs" url="/faq/view-faq" />
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginTop: 4,
            marginBottom: 2,
            color: "#8B5704",
            fontWeight: "bolder",
          }}
          variant="h6"
        >
          Plans
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Standard Plans"
              desc="create, update, delete Plans"
              url="/plan/view-plan"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Cycle Periods"
              desc="create, update, delete Plans"
              url="/cyclePeriod/view-cyclePeriod"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
eCommerce.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
