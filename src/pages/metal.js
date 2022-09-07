import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
import { useRouter } from "next/router";
//=======================================================
export default function metal() {
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Metal </title>
      </Head>

      <Container sx={{ backgroundColor: "" }}>
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
          Metal Master
        </Typography>
       
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
metal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
