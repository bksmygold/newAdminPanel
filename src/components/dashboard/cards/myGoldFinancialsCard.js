import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useTheme } from '@mui/styles'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import { Chart as ChartJS, TimeScale, N } from "chart.js";

let arr = [];

for (let i = 0; i < 100; i++) {
  arr.push({ x: new Date(2022, 1, i + 1), y: i * 50 })
}
//======================================================
export const FinancialsCard = (props) => {
  const options = {
    //animation: true,
    pointStyle: "line",
    spanGaps: true,
    responsive: true,
    scales: {
      y: {
        display: false,
        title: {
          display: false,
          text: "",
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (y, index, ticks) {
            return y;
          },
        },
        weight: 50,
      },
      x: {
        display: false,
        adapters: {
          date: {
            locale: enGB,
          },
        },
        type: "time",
        distribution: "linear",
        time: {
          parser: "MM",
          // unit: format,
        },
        title: {
          display: false,
          text: "Date",
        },
      },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: false,
        text: "Text",
      },
    },
  };
  const theme = useTheme()
  return (
    <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657", height: "100%" }} {...props}>
      <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
        {/* ----------------------------------------------- */}
        {props.isInvoice ? (
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                paddingRight: 0,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={theme.custom.typography.dashBoard.h2}>
                  89,124
                </Typography>
                <Typography variant="overline" sx={{ fontSize: 9, color: "black" }}>
                  Sale-Invoice
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={theme.custom.typography.dashBoard.h2}>
                  89,124
                </Typography>
                <Typography variant="overline" sx={{ fontSize: 9, color: "black" }}>
                  Purchase-Invoice
                </Typography>
              </Box>
            </Grid>
            <Box sx={{ textAlign: "center" }}>
              <Bar

                datasetIdKey='id'

                data={{
                  labels: ['Jun', 'Jul', 'Aug', 'Jun', 'Jul', 'Aug'],
                  datasets: [
                    {
                      backgroundColor: "#EABE78",
                      color: "red",
                      borderColor: 'white',
                      fill: true,
                      id: 1,
                      data: [1, 2, 3, 2, 2, 4],
                    },
                    {
                      backgroundColor: "#BC6705",
                      color: "red",
                      borderColor: 'white',
                      fill: true,
                      id: 1,
                      data: [1, 2, 3, 2, 2, 4],
                    },

                  ],
                }}
              />
            </Box>
          </Grid>
        ) : (
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                paddingRight: 0,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={[theme.custom.typography.dashBoard.h1, { margin: "auto" }]}>
                  {props.title}
                </Typography>
                <Typography
                  sx={[theme.custom.typography.dashBoard.h2, { margin: "auto" }]}
                >
                  $ 14758
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Line

                  datasetIdKey='id'
                  options={options}
                  data={{
                    // labels: ['Jun', 'Jul', 'Aug', 'Jun', 'Jul', 'Aug'],
                    datasets: [
                      {
                        backgroundColor: (context) => {
                          const ctx = context.chart.ctx;
                          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                          gradient.addColorStop(0, "#9D702B");
                          gradient.addColorStop(1, "#FEF1DE");
                          return gradient;
                        },
                        borderColor: "#905E0F",
                        borderWidth: 1,
                        fill: true,
                        id: 1,
                        data: arr
                      },

                    ],
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        )}

        {/* ----------------------------------------------- */}

        {/* ----------------------------------------------- */}
      </CardContent>
    </Card>
  )
}
