import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckIcon from "@mui/icons-material/Check";
//=========================================================
export const RoleCard = (props) => {
  const router = useRouter();
  //-------------------------------------------
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 1px 0px #d2c6c6",
        border: "1px solid #d2c6c657",
        width: "80%",
        height: "100%",
        position: "relative",
      }}
      {...props}
    >
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor:
            props.generalSelected ||
            props.financialSelected ||
            props.tax ||
            props.userManagement ||
            props.ecomm ||
            props.promotional ||
            props.reports
              ? "#8B5704"
              : "white",
          cursor: "pointer",
        }}
      >
        {/* -------------------------------------------------------------- */}
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.generalSelected ||
          props.financialSelected ||
          props.tax ||
          props.userManagement ||
          props.ecomm ||
          props.promotional ||
          props.reports ? (
            <CheckIcon
              sx={{
                borderRadius: 1,
                color: "#8B5704",
                backgroundColor: "white",
                position: "absolute",
                right: "1%",
                top: "1%",
                height: 35,
                width: 35,
              }}
            />
          ) : null}
          <Grid item>
            <Avatar
              sx={{
                color:
                  props.generalSelected ||
                  props.financialSelected ||
                  props.tax ||
                  props.userManagement ||
                  props.ecomm ||
                  props.promotional ||
                  props.reports
                    ? "white"
                    : "#454545",
                backgroundColor:
                  props.generalSelected ||
                  props.financialSelected ||
                  props.tax ||
                  props.userManagement ||
                  props.ecomm ||
                  props.promotional ||
                  props.reports
                    ? "#8B5704"
                    : "white",
                // alignItems: "center",
                padding: 5,
              }}
            >
              {props.title === "General" || props.title === "User Management" ? (
                <PersonAddIcon sx={{ height: 50, width: 50 }} />
              ) : props.title === "Financial" || props.title === "Tax Settings" ? (
                <PaymentsIcon sx={{ height: 50, width: 50 }} />
              ) : props.title === "Retail" || props.title === "E-Commerce Management" ? (
                <ShoppingCartIcon sx={{ height: 50, width: 50 }} />
              ) : props.title === "Inventory" || props.title === "Promotional Settings" ? (
                <StoreIcon sx={{ height: 50, width: 50 }} />
              ) : props.title === "CRM" || props.title === "Reports" ? (
                <GroupsIcon sx={{ height: 50, width: 50 }} />
              ) : null}
            </Avatar>
          </Grid>
          <Grid item>
            <Typography
              sx={{ fontWeight: "bolder", textAlign: "center" }}
              color={
                props.generalSelected ||
                props.financialSelected ||
                props.tax ||
                props.userManagement ||
                props.ecomm ||
                props.promotional ||
                props.reports
                  ? "white"
                  : "#905E0F"
              }
              gutterBottom
              variant="h5"
            >
              {props.title}
            </Typography>
          </Grid>
        </Grid>
        {/* -------------------------------------------------------------- */}

        {/* -------------------------------------------------------------- */}

        {/* -------------------------------------------------------------- */}
      </CardContent>
    </Card>
  );
};
