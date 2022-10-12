import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import TimelineIcon from "@mui/icons-material/Timeline";
import { useTheme } from '@mui/styles';
import { Line } from 'react-chartjs-2';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { prototype } from 'google-map-react';


let arr= Array(100).fill("Jan")
//============================================================
export const GraphCard = (props) => {

  const theme = useTheme()
  //======================================
  return (
    <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657",height:"100%" }}>
      <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
        <Grid container spacing={1} >
          <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"space-between"}}>

            <Grid item >
              <Typography sx={theme.custom.typography.dashBoard.h1}>
                {props.title}
              </Typography>
              <Typography sx={theme.custom.typography.dashBoard.h2}>
                {props.stats}
              </Typography>
            </Grid>
            {/* <Grid item> */}
            <Grid item  xs={12}  sm={12} md={12}>
              <Box sx={{zoom: "53%"}}>

                <Line

                  datasetIdKey='id'

                  data={{
                    labels: ['Jun', 'Jul', 'Aug', 'Jun', 'Jul', 'Aug'],
                    datasets: [
                      {
                        backgroundColor: "#AD700E",
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
             {props.statsPer >= 10 ? (
          <ArrowUpwardIcon color="success" />
        ) : (
          <ArrowDownwardIcon color="error" />
        )}
            <Typography
              sx={props.statsPer >=10 ?theme.custom.typography.dashBoard.h3.success : theme.custom.typography.dashBoard.h3.error}
              >
              {props.statsPer}%
            </Typography>
            <Typography sx={theme.custom.typography.dashBoard.h3}>
              Since last month
            </Typography>
          </Box>
        </Grid  >

      </CardContent>
    </Card>
  )
}
