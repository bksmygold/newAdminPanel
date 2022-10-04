import Head from "next/head";
import { DashboardSidebar } from "src/components/sidebar.js/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/layout/dashboard-layout";
import { InfoCard } from "../components/cards/infoCard";
import { useRouter } from "next/router";
import { useTheme } from "@mui/styles";
import { infoCard } from "src/constants/constant";
//=======================================================
export default function eCommerce() {
  const theme = useTheme()
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>E-Commerce </title>
      </Head>

      <Container sx={{ padding: 2, marginLeft: 2 }}>
        {/* ------------------------------ */}

        <Typography
          sx={theme.custom.typography.infoCard.h1}

        >
          E-commerce Master
        </Typography>
        <Grid container spacing={5} >
          {infoCard.eComm.map(x => (

            <Grid item md={3} xl={3} lg={3} sm={6} xs={12} >
              <InfoCard
                title={x.title}
                desc={x.desc}
                url={x.url}
              />
            </Grid>
          ))}
          {/* <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.metalGroup.title}
              desc={infoCard.eComm.metalGroup.desc}
              url={infoCard.eComm.metalGroup.url}
            />
          </Grid>

          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.ornament.title}
              desc={infoCard.eComm.ornament.desc}
              url={infoCard.eComm.ornament.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.unit.title}
              desc={infoCard.eComm.unit.desc}
              url={infoCard.eComm.unit.url}
            />
          </Grid>

          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.cut.title}
              desc={infoCard.eComm.cut.desc}
              url={infoCard.eComm.cut.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.color.title}
              desc={infoCard.eComm.color.desc}
              url={infoCard.eComm.color.url}
            />
          </Grid>

          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.shape.title}
              desc={infoCard.eComm.shape.desc}
              url={infoCard.eComm.shape.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.clarity.title}
              desc={infoCard.eComm.clarity.desc}
              url={infoCard.eComm.clarity.url}

            />
          </Grid>

          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.style.title}
              desc={infoCard.eComm.style.desc}
              url={infoCard.eComm.style.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.collection.title}
              desc={infoCard.eComm.collection.desc}
              url={infoCard.eComm.collection.url}
            />
          </Grid>

          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.category.title}
              desc={infoCard.eComm.category.desc}
              url={infoCard.eComm.category.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.variety.title}
              desc={infoCard.eComm.variety.desc}
              url={infoCard.eComm.variety.url}
            />
          </Grid>

          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.item.title}
              desc={infoCard.eComm.item.desc}
              url={infoCard.eComm.item.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.productType.title}
              desc={infoCard.eComm.productType.desc}
              url={infoCard.eComm.productType.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.faq.title}
              desc={infoCard.eComm.faq.desc}
              url={infoCard.eComm.faq.url}
            />
          </Grid>
          
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.policy.title}
              desc={infoCard.eComm.policy.desc}
              url={infoCard.eComm.policy.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.retReason.title}
              desc={infoCard.eComm.retReason.desc}
              url={infoCard.eComm.retReason.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.rejReturn.title}
              desc={infoCard.eComm.rejReturn.desc}
              url={infoCard.eComm.rejReturn.url}
            />
          </Grid>
       <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.certi.title}
              desc={infoCard.eComm.certi.desc}
              url={infoCard.eComm.certi.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.label.title}
              desc={infoCard.eComm.label.desc}
              url={infoCard.eComm.label.url}
            />
          </Grid>
        </Grid>

        <Typography
          sx={theme.custom.typography.infoCard.h1}

        >
          Plans
        </Typography>
        <Grid container spacing={3}>
        <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.plan.title}
              desc={infoCard.eComm.plan.desc}
              url={infoCard.eComm.plan.url}
            />
          </Grid>
          <Grid item md={4} xl={4} lg={4} sm={6} xs={12}>
            <InfoCard
              title={infoCard.eComm.cycle.title}
              desc={infoCard.eComm.cycle.desc}
              url={infoCard.eComm.cycle.url}
            />
          </Grid> */}
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
eCommerce.getLayout = (page) => <DashboardLayout showFilter={false}>{page}</DashboardLayout>;
