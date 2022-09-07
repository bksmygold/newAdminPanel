import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import TimelineIcon from "@mui/icons-material/Timeline";

export const Budget = (props) => (
  <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }} {...props}>
    <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="#905E0F" gutterBottom variant="overline">
            {props.title}
          </Typography>
          <Typography color="textPrimary" variant="h5">
            {props.stats}
          </Typography>
        </Grid>
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
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1,
          }}
          variant="body2"
        >
          {props.statsPer}%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
