import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import { useTheme } from "@mui/styles"
//============================================================
export const RateCard = (props) => {
  const theme = useTheme()
  //===========================
  return (
    <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657",height:"100%",backgroundColor: "#FDFAF2", }}>
      <CardContent
        sx={{
          backgroundColor: "#FDFAF2",
          // boxShadow: "0px 0px 10px  ",
        }}
      >
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid item>
            <Typography sx={theme.custom.typography.dashBoard.h1}>
              {props.title}
            </Typography>
            <Typography sx={theme.custom.typography.dashBoard.h2}>
              ₹ {props.rate.toLocaleString('en-IN')} /gm
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
            height: "100%",
            pt: 2,
          }}
        >
          {props.percentage ? (
            <Typography
            sx={props.percentage >= 10 ? theme.custom.typography.dashBoard.h3.success : theme.custom.typography.dashBoard.h3.error}
            >
              {props.percentage >= 10 ? (
                <ArrowUpwardIcon color="success" />
              ) : (
                <ArrowDownwardIcon color="error" />
              )}
              {props.percentage}%
            </Typography>
          ) : null}
          {props.updatedAt ? (

            <Typography sx={{ fontSize: "16px", color: '#495479' }}>
              Updated at : {props.updatedAt}
            </Typography>
          ) : (null)}
        </Box>

      </CardContent>
    </Card>
  )
}
