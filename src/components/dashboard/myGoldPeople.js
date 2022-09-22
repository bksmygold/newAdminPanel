import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useTheme } from "@mui/styles";
import { Line } from 'react-chartjs-2';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

//======================================================
export const PeopleCard = (props) => {
  const theme = useTheme()

  return (
    // <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }} {...props}>
    //   <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
    //     <Grid container spacing={1} >
    //       <Box sx={{ display: "flex" }}>
    //         <Typography sx={theme.custom.typography.dashBoard.h1}>
    //           {props.title}
    //         </Typography>
    //         <Grid item>
    //           <Typography sx={theme.custom.typography.dashBoard.h2}>
    //             {props.stats}
    //           </Typography>

    //           <Typography sx={theme.custom.typography.dashBoard.h3}>
    //             {props.percentage}% Since last month
    //           </Typography>
    //         </Grid>
    //         <Box sx={{ zoom: "80%" }}>

    //           <Line

    //             datasetIdKey='id'

    //             data={{
    //               labels: ['Jun', 'Jul', 'Aug', 'Jun', 'Jul', 'Aug'],
    //               datasets: [
    //                 {
    //                   backgroundColor: "#AD700E",
    //                   color: "red",
    //                   borderColor: 'white',
    //                   fill: true,
    //                   id: 1,
    //                   data: [1, 2, 3, 2, 2, 4],
    //                 },

    //               ],
    //             }}
    //           />
    //         </Box>
    //       </Box>


    //     </Grid>

    //   </CardContent>
    // </Card>
    <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }} {...props}>
      <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
        <Grid container spacing={1} >
          <Box sx={{ display: "flex" }}>

            <Grid item >
              <Typography sx={theme.custom.typography.dashBoard.h1}>
                {props.title}
              </Typography>
              <Typography sx={theme.custom.typography.dashBoard.h2}>
                {props.stats}
              </Typography>
            </Grid>
            {/* <Grid item> */}
            <Grid item >
              <Box sx={{ zoom: "80%" }}>

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
             {props.percentage >= 10 ? (
          <ArrowUpwardIcon color="success" />
        ) : (
          <ArrowDownwardIcon color="error" />
        )}
            <Typography
              sx={props.percentage >=10 ?theme.custom.typography.dashBoard.h3.success : theme.custom.typography.dashBoard.h3.error}
              >
              {props.percentage}%
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
