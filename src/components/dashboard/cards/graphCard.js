import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import TimelineIcon from "@mui/icons-material/Timeline";
import { useTheme } from '@mui/styles';
import { Line, Bar, PolarArea } from 'react-chartjs-2';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { prototype } from 'google-map-react';
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import { Chart as ChartJS, TimeScale, N } from "chart.js";
ChartJS.register([TimeScale]);

// for (let i = 0; i < 100; i++) {

//   arr.push({ x: new Date(2022, 1, i + 1), y: i * 50 })
// }
// console.log(arr)
//============================================================
export const GraphCard = (props) => {

  const options = {
    //animation: true,
    // pointStyle: null
    pointRadius:0,
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

 const arr = [];
  for (let i = 0; i < props.graph?.length; i++) {
    arr.push({ x: new Date(2022, 1, i+1),  y: props.graph[i] })
  }
  //   var newTest = Array.from(props.graph, val => {'x: '+ val});
  //======================================
  return (
    <Card sx={{ backgroundColor: "#FDFAF2", boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657", height: "100%" }}>
      <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
        <Grid container spacing={1} >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "space-between" }}>

            <Grid item >
              <Typography sx={theme.custom.typography.dashBoard.h1}>
                {props.title}
              </Typography>
              <Typography sx={theme.custom.typography.dashBoard.h2}>
                {props.stats.toLocaleString('en-IN')}
              </Typography>
            </Grid>
            {/* <Grid item> */}
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{float:"right",width:"90%"}}>

                <Line
                  style={{
                    width:"70%",
                    float:"right"
                  }}
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
            </Grid >
          </Box>

        </Grid>
        {/* </Grid> */}
        <Grid item >

          <Box
            sx={{
              pt: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            {Math.sign(props.statsPer) === 1 ? (
              <ArrowUpwardIcon color="success" />
            ) : (
              <ArrowDownwardIcon color="error" />
            )}
            <Typography
              sx={Math.sign(props.statsPer) === 1 ?theme.custom.typography.dashBoard.h3.success : theme.custom.typography.dashBoard.h3.error}
            >
              {props.statsPer}%  
            </Typography>

          </Box>
        </Grid  >

      </CardContent>
    </Card>
  )
}
