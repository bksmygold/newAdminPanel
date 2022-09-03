import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
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

// import {
//   Chart as ChartJS,
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
// } from "chart.js";
//====================================================================
const Dashboard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  // ChartJS.register(
  //   LineController,
  //   LineElement,
  //   PointElement,
  //   LinearScale,
  //   Title
  // )
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
          {/* <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container> */}

          <Grid class="flee" container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
          <Grid class="flee" container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <div className="card">
                  <div>
                    <p id="title">Visits</p>
                    <p id="stats">32,457</p>
                    <p id="statsNo">+14.00(+.50%)</p>
                  </div>
                  <div>
                    <Line
                      style={{
                        width: "100%",
                      }}
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                        ],

                        datasets: [
                          {
                            borderColor: "#905e0f",
                            backgroundColor: "white",
                            id: 1,
                            label: "data",
                            data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                          },
                        ],
                      }}
                    />
                    {/* <p id="title">Chart</p> */}
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Container>
        <Line
          style={{
            width: "100%",
          }}
          data={{
            labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov"],

            datasets: [
              {
                borderColor: "white",
                backgroundColor: "white",
                id: 1,
                label: "data",
                data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
              },
            ],
          }}
        />
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
