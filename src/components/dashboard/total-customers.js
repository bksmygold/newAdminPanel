import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

export const TotalCustomers = (props) => (
  <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }} {...props}>
    <CardContent
      sx={{
        backgroundColor: "#FDFAF2",
        boxShadow: "0px 0px 10px  ",
      }}
    >
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item>
          <Typography color="#905E0F" gutterBottom variant="overline">
            {props.title}
          </Typography>
          <Typography color="textPrimary" variant="h5">
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
          variant="body2"
          sx={{
            mr: 1,
            color: "black",
          }}
        >
          {props.percentage}%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Updated at {props.updatedAt}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
