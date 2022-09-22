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

      <Container  sx={{ padding: 2, }}>
        {/* ------------------------------ */}

        <Typography
          sx={{
            marginTop: 4,
            marginBottom: 2,
            color: '#8B5704',
            fontWeight: 'bolder',
          }}
          variant="h6"
        >
          E-commerce Master
        </Typography>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              url="/eCommerce/metal/view-metal"
              title="Metal"
              desc="create, update, delete Metals"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Metal Groups"
              desc="create, update, delete Metal Groups relate them to Metal"
              url="/eCommerce/metalGroup/view-metalGroup"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Ornaments"
              desc="create, update, delete Ornaments"
              url="/eCommerce/ornament/view-ornament"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Units"
              desc="create, update, delete Units"
              url="/eCommerce/unit/view-unit"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Cut"
              desc="create, update, delete Cut"
              url="/eCommerce/cut/view-cut"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Colors"
              desc="create, update, delete Colors"
              url="/eCommerce/color/view-color"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Shape"
              desc="create, update, delete Shape"
              url="/eCommerce/shape/view-shape"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Clarity"
              desc="create, update, delete Clarity"
              url="/eCommerce/clarity/view-clarity"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Style"
              desc="create, update, delete Style"
              url="/eCommerce/style/view-style"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Collections"
              desc="create, update, delete Collections"
              url="/eCommerce/collection/view-collection"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Categories"
              desc="create, update, delete Categories"
              url="/eCommerce/category/view-category"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Varieties"
              desc="create, update, delete Varieties"
              url="/eCommerce/variety/view-variety"
            />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Items"
              desc="create, update, delete Items"
              url="/eCommerce/item/view-item"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Product Types"
              desc="create, update, delete Product Types"
              url="/eCommerce/productType/view-productType"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="FAQ"
              desc="create, update, delete FAQs"
              url="/eCommerce/faq/view-faq"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Policy"
              desc="create, update, delete Policies"
              url="/eCommerce/policy/view-policy"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Return Reason"
              desc="create, update, delete return reason"
              url="/eCommerce/returnReason/view-returnReason"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Reject Reason"
              desc="create, update, delete return reason"
              url="/eCommerce/rejectReason/view-rejectReason"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Supplier"
              desc="create, update, delete Supplier"
              url="/eCommerce/supplier/view-supplier"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Making Charges"
              desc="create, update, delete making charges"
              url="/eCommerce/makingCharge/view-makingCharge"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Certificates"
              desc="create, update, delete making charges"
              url="/eCommerce/certificate/view-certificate"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Label"
              desc="create, update, delete making charges"
              url="/eCommerce/label/view-label"
            />
          </Grid>
        </Grid>

        <Typography
          sx={{
            marginTop: 4,
            marginBottom: 2,
            color: '#8B5704',
            fontWeight: 'bolder',
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
              url="/eCommerce/plan/view-plan"
            />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <InfoCard
              title="Cycle Periods"
              desc="create, update, delete Plans"
              url="/eCommerce/cyclePeriod/view-cyclePeriod"
            />
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
eCommerce.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
