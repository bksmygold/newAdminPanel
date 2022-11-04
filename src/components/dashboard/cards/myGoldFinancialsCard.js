import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useTheme } from '@mui/styles'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import BarChart from "src/components/barChart";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
//======================================================
const options = {
  //animation: true,
  // pointStyle: null
  pointRadius: 0,
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
export const FinancialsCard = (props) => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push({ x: new Date(2022, 1, i + 1), y: i * 50 })
  }

  const theme = useTheme()
  return (
    <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657", height: "100%" }}>
      <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
        {/* ----------------------------------------------- */}
        {props.isInvoice ? (
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>

            <Box>
              {/* <Bar
                datasetIdKey='id6e4778rfdsd54457'
                data={{
                  labels: ['Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov'],
                  datasets: [
                    {
                      backgroundColor: "#EABE78",
                      color: "red",
                      borderColor: 'white',
                      fill: true,
                      id: "id789",
                      data: [2, 1, 4, 9, 1, 2],
                    },
                    {
                      backgroundColor: "#BC6705",
                      color: "red",
                      borderColor: 'white',
                      fill: true,
                      id: "id123",
                      data: [1, 2, 3, 2, 2, 4],
                    },

                  ],
                }}
              /> */}
              <BarChart />
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
                  {props.value}
                </Typography>
              </Box>
              <Box
              // sx={{ textAlign: "center" }}
              >
                <Line
                  // style={{
                  //   width: "70%",
                  //   float: "right"
                  // }}
                  datasetIdKey='id'
                  options={options}
                  data={{
                    datasets: [
                      {
                        backgroundColor: (context) => {
                          const ctx = context.chart.ctx;
                          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                          gradient.addColorStop(0, "#9D702B");
                          gradient.addColorStop(1, "white");
                          return gradient;
                        },
                        borderColor: "#905E0F",
                        // borderWidth: 3,
 
                        fill: true,
                        id: 1,
                        // data: props.graph.map(e => ({
                        //   x: e,
                        //   y: e
                        // })),
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
      </CardContent>
    </Card>
  )
}
