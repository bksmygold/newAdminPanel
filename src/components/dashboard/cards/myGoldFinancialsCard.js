import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useTheme } from '@mui/styles'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

//======================================================
export const FinancialsCard = (props) => {

  const theme = useTheme()
  return (
    <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657",height:"100%" }} {...props}>
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
            </Grid>
          </Grid>
        )}

        {/* ----------------------------------------------- */}

        {/* ----------------------------------------------- */}
      </CardContent>
    </Card>
  )
}
