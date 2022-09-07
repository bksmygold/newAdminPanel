import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import CancelIcon from "@mui/icons-material/Cancel";
//=====================================================
export const RetailCard = (props) => (
  <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }} {...props}>
    <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            // borderRadius: "100%",
            padding: 1,
            color: "grey",
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.totalOrder ? (
            <ShoppingCartRoundedIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#FCD9BC",
                color: "black",
                height: 45,
                width: 45,
              }}
            />
          ) : props.toBePacked ? (
            <CheckCircleRoundedIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#AFEBEF",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.toBeShipped ? (
            <InventoryIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#AFEBEF",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.inTransit ? (
            <LocalShippingIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#AFEBEF",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.orderDelivered ? (
            <CheckCircleRoundedIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#AFEBEF",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.totalReturn ? (
            <KeyboardReturnIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#FCD9BC",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.toBePicked ? (
            <CheckCircleRoundedIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#AFEBEF",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.toBeRecieved ? (
            <MoveToInboxIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#AFEBEF",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.returnAccepted ? (
            <CheckCircleRoundedIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#AFEBEF",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : props.returnRejected ? (
            <CancelIcon
              sx={{
                padding: 1,
                borderRadius: 40,
                backgroundColor: "#EFBDC9",
                color: "black",
                height: 45,
                width: 45,
              }}
              color="error"
            />
          ) : null}
        </Box>
        <Grid item>
          {/* ----------------------- */}
          <Typography color="#905E0F" gutterBottom variant="overline">
            {props.title}
          </Typography>
          <Typography color="textPrimary" variant="h6">
            {props.stats}
          </Typography>
          {/* ----------------------- */}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
