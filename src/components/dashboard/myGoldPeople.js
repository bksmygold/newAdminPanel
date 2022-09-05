import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";

//======================================================
export const PeopleCard = (props) => (
  <Card sx={{ boxShadow: "0px 4px 9px 0px #bab9b6" }} {...props}>
    <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
      {/* ----------------------------------------------- */}
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Box>
          <Typography color="#905E0F" gutterBottom variant="overline">
            {props.title}
          </Typography>
          <Grid item>
            <Typography color="textPrimary" variant="h5">
              {props.stats}
            </Typography>
            {/* <Typography
            color="error"
            sx={{
              mr: 1,
            }}
            variant="body2"
          >
            {props.percentage}%
          </Typography> */}
            <Typography color="textSecondary" variant="caption">
              {props.percentage}% Since last month
            </Typography>
          </Grid>
        </Box>
        {/* <Grid item> */}
        {/* </Grid> */}
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <TimelineIcon />
          </Avatar>
        </Grid>
      </Grid>
      {/* ----------------------------------------------- */}

      {/* ----------------------------------------------- */}
    </CardContent>
  </Card>
);
