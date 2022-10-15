import Head from "next/head";
import { Box, Container, Grid, Typography,Skeleton } from "@mui/material";
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
//====================================================================
const Dashboard = () => {
  const theme = useTheme()
  const router = useRouter();
  const { query } = useController()
  const filter = useDashboardFilter()


  // if (query.isLoading) return <Loading />
  
  // console.log("=======> Query", query.data)

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
          <GeneralDetails/>


          {/* -----------   My Gold Financials------------------- */}
          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2, cursor: "pointer" }]}

            onClick={() => {
              router.push("/financialDashobard/myGoldFinancials");
            }}
          >
            MyGold Financials <ArrowForwardIosIcon />
          </Typography>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <FinancialsCard isInvoice />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <FinancialsCard title="Receiveables" />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <FinancialsCard title="Settlements" />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <FinancialsCard title="Commissions" />
            </Grid>
          </Grid>
          {/* -----------   My Gold Retails------------------- */}

          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2 }]}

          >
            MyGold Retials
          </Typography>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard totalOrder title="Total Order" stats={369} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard toBePacked title="To be Packed" stats={12} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard toBeShipped title="To be Shipped" stats={100} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard inTransit title="In-Transit" stats={2} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard orderDelivered title="Order Delivered" stats={369} />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard totalReturn title="Total Returns" stats={369} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard toBePicked title="To be Picked" stats={12} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard toBeRecieved title="To be Recieved" stats={100} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard returnAccepted title="Return Accepted" stats={2} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RetailCard returnRejected title="Return Rejected" stats={369} />
            </Grid>



          </Grid>
          {/* -----------   My Gold People------------------- */}
          <Typography
            sx={[theme.custom.typography.dashBoard.heading, { mt: 5, mb: 2 }]}


          >
            MyGold People
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total Customers" stats={369} percentage={10} />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total Merchants" stats={36} percentage={2} />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total Retails" stats={12} percentage={14} />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total VIP Referrals" stats={786} percentage={7} />
            </Grid>
          </Grid>

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
            MyGold Inventory  <ArrowForwardIosIcon />
          </Typography>
          <Graph />
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout showFilter={true}>{page}</DashboardLayout>;

export default Dashboard;
