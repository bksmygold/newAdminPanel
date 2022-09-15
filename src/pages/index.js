import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { Line } from "react-chartjs-2";
import { styled } from "@mui/material/styles";
import "chart.js/auto";
import Paper from "@mui/material/Paper";
import { RetailCard } from "../components/dashboard/myGoldRetail";
import { PeopleCard } from "../components/dashboard/myGoldPeople";
import { FinancialsCard } from "src/components/dashboard/myGoldFinancials";
import { useRouter } from "next/router";
import { useEffect } from "react";

//====================================================================
const Dashboard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const router = useRouter();
  //=====================================================
  // useEffect(() => {
  //   if (localStorage.getItem("token") === null) router.push("/login");
  // }, []);
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
            width: "100%",
            height: "100%",
            border: "1px solid gray",
            padding: "10px",
          }}
          // maxWidth={true}
        >
          {/* -----------   General Information------------------- */}

          <Typography
            sx={{
              marginTop: 5,
              marginBottom: 1,
            }}
            variant="h6"
          >
            General Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget title="Visits" stats={32451} statsPer={14} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget title="Apps Downloads" stats={15451} statsPer={14} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget title="Conversions" stats={42451} statsPer={21} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget title="Orders" stats={30451} statsPer={21} />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCustomers
                title="Current Buy Rate"
                rate={5840}
                percentage={10}
                updatedAt={"2:04"}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCustomers
                title="Current Sell Rate"
                rate={5440}
                percentage={8}
                updatedAt={"2:04"}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCustomers
                title="Average Buy Rate"
                rate={5650}
                percentage={10}
                updatedAt={"2:04"}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCustomers
                title="Average Sell Rate"
                rate={5320}
                percentage={4}
                updatedAt={"2:04"}
              />
            </Grid>

            {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalProfit sx={{ height: "100%" }} />
              </Grid> */}
          </Grid>

          {/* -----------   My Gold Financials------------------- */}
          <Typography
            xl={1}
            variant="h6"
            sx={{
              marginTop: 5,
              marginBottom: 1,
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/myGoldFinancials");
            }}
          >
            MyGold Financials
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
            xl={1}
            variant="h6"
            sx={{
              marginTop: 5,
              marginBottom: 1,
            }}
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
          {/* -----------   My Gold Peopple------------------- */}
          <Typography
            xl={1}
            variant="h6"
            sx={{
              marginTop: 5,
              marginBottom: 1,
            }}
          >
            MyGold People
          </Typography>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total Customers" stats={369} percentage={10} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total Merchants" stats={36} percentage={12} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total Retails" stats={12} percentage={14} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <PeopleCard totalOrder title="Total VIP Referrals" stats={786} percentage={54} />
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
          <Sales />
          {/* </Grid> */}
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
