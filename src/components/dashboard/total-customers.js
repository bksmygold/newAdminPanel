import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import {useTheme} from "@mui/styles"
//============================================================
export const TotalCustomers = (props) => {
const theme = useTheme()
  //===========================
  return(
  <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }} {...props}>
    <CardContent
      sx={{
        backgroundColor: "#FDFAF2",
        boxShadow: "0px 0px 10px  ",
      }}
    >
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item>
          <Typography sx={theme.custom.typography.dashBoard.h1}>
            {props.title}
          </Typography>
          <Typography sx={theme.custom.typography.dashBoard.h2}>
            ₹ {props.rate} /gm
          </Typography>
        </Grid>
        {/* <Grid item>
          <Avatar
            sx={{
              backgroundColor: "success.main",
              height: 56,
              width: 56,
            }}
          >
          </Avatar>
        </Grid> */}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
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
          Updated at {props.updatedAt}
        </Typography>
      </Box>
    </CardContent>
  </Card>
  )
}
