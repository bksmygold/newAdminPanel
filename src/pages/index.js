import Head from "next/head";
import { Box, Container, Grid, Typography, Skeleton } from "@mui/material";
import { GraphCard } from "../components/dashboard/cards/graphCard";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Graph } from "../components/dashboard/graph";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { RateCard } from "../components/dashboard/cards/rateCard";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/layout/dashboard-layout";
import { Line } from "react-chartjs-2";
import { styled } from "@mui/material/styles";
import "chart.js/auto";
import Paper from "@mui/material/Paper";
import { RetailCard } from "../components/dashboard/cards/myGoldRetailCard";
import { PeopleCard } from "../components/dashboard/cards/myGoldPeopleCard";
import { FinancialsCard } from "src/components/dashboard/cards/myGoldFinancialsCard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTheme } from "@mui/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useContext } from "react"
import { useQuery } from "@tanstack/react-query";
import { getGoldPrice } from "src/apis/goldPrice";
import Loading from "src/components/loading";
import { order } from "src/constants/constant";
import { Chart as ChartJS, TimeScale, N } from "chart.js";
import { useDashboardFilter } from "src/context/dashboardFilter";
import { useController } from "src/controller/dashboard";
import GeneralDetails from "src/components/dashboard/general-details";
import { getDashboardAnalytics } from "src/apis/dashboard";
import OrderDetails from "src/components/dashboard/order-detail";
import PeopleDetails from "src/components/dashboard/people-details";
import FinancialsDetails from "src/components/dashboard/financial-details";
//====================================================================
const Dashboard = () => {
  const theme = useTheme()
  const router = useRouter();
  const { query } = useController()
  const filter = useDashboardFilter()


  // if (query.isLoading) return <Loading />

  // console.log("=======> Query", query.data)
// useEffect(()=>{
//   getDashboardAnalytics("01/10/2022","31/10/2022").then(res =>console.log("aayaa ----", res))
// },[])
  //====================================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard </title>
      </Head>
      {/* ------------------------------ */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // py: 8,
        }}
      >
        <Container
          sx={{
            // width: "100vw",
            height: "100%",
            marginLeft: 2
          }}
          maxWidth={true}
        >
          {/* -----------   General Information------------------- */}

          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2 }]}
          >
            General Information
          </Typography>
          <GeneralDetails />


          {/* -----------   My Gold Financials------------------- */}
          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2, cursor: "pointer" }]}

            onClick={() => {
              router.push("/financialDashobard/myGoldFinancials");
            }}
          >
            MyGold Financials <ArrowForwardIosIcon />
          </Typography>
          <FinancialsDetails/>
          {/* -----------   My Gold Retails------------------- */}

          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2 }]}

          >
            MyGold Retials
          </Typography>
          <OrderDetails/>
          
          {/* -----------   My Gold People------------------- */}
          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2 }]}


          >
            MyGold People
          </Typography>
          <PeopleDetails/>

          {/* <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice sx={{ height: "100%" }} />
          </Grid> */}
          {/* <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid> */}
          {/* <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid> */}
          {/* -----------   My Gold Inventory------------------- */}

          {/* <Grid item lg={8} md={12} xl={9} xs={12}> */}
          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2 }]}
            onClick={() => {
              router.push("/inventoryDashboard/inventory");
            }}
          >
            MyGold Inventory  <ArrowForwardIosIcon/>
          </Typography>
          <Graph />
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout showFilter={true}>{page}</DashboardLayout>;

export default Dashboard;
