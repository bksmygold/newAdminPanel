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

        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
eCommerce.getLayout = (page) => <DashboardLayout showFilter={false}>{page}</DashboardLayout>;
