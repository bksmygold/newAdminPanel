import Head from "next/head";
import { DashboardSidebar } from "src/components/sidebar/dashboard-sidebar";
import {
  Box,
  Container,
  Typography,
  Grid,
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
} from "@mui/material";
import { DashboardLayout } from "../components/layout/dashboard-layout";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import InventoryIcon from "@mui/icons-material/Inventory";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AssessmentIcon from "@mui/icons-material/Assessment";
import {useRouter} from "next/router"
//=======================================================
export default function reports() {
  const router = useRouter()
  //=======================================================

  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Reports</title>
      </Head>

      <Grid
        sx={{
          justifyContent: "center",
          padding: 2,
          minWidth:"100%"
        }}
        container
        spacing={0}
      >
        <Grid
          sx={{ backgroundColor: "white", marginRight: 1, boxShadow: "0 0 7px 0px #a1a1a1" }}
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          {" "}
          <Box
            sx={{
              background: 'linear-gradient(45deg, #ffcaca, #fff5db)',
              height: "20vh",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              boxShadow: "1px 3px 11px 0px #a1a1a1",
            }}
          >
            {/* --------------- Financials ---------------------------------------- */}

            <Typography
              variant="h6"
              sx={{
                color: "#868480",
                fontWeight: "bolder",
              }}
            >
              Financials{" "}
            </Typography>
            <Box>
              <QueryStatsIcon sx={{ width: 50, height: 50, color: "#868480" }} />
            </Box>
          </Box>
          <List>
            {/* ------------------------------------------------------- */}
            <ListItem alignItems="center">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Customer Sale Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Customer Purchase Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Customer Settlements" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="VIP/Sales Referral" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Referral Sale Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Referral Purchase Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Referral Settlements" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <PointOfSaleIcon />
              </ListItemIcon>
              <ListItemText primary=" Merchant" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Merchant Sale Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Merchant Purchase Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Merchant Settlements" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary=" Retailer" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Retailer Sale Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Retailer Purchase Invoices" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Retailer Settlements" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary=" Bank" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Bank Receipts" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Bank Payments" />
            </ListItem>

            {/* ------------------------------ */}
          </List>
        </Grid>
        <Grid
          sx={{ backgroundColor: "white", marginRight: 1, boxShadow: "0 0 7px 0px #a1a1a1" }}
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          {" "}
          <Box
            sx={{
              background: 'linear-gradient(45deg, #ffcaca, #fff5db)',
              height: "20vh",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              boxShadow: "1px 3px 11px 0px #a1a1a1",
            }}
          >
            {/* ---------------  Metals ---------------------------------------- */}

            <Typography
              variant="h6"
              sx={{
                color: "#868480",
                fontWeight: "bolder",
              }}
            >
              Metal{" "}
            </Typography>
            <Box>
              <InventoryIcon sx={{ width: 50, height: 50, color: "#868480" }} />
            </Box>
          </Box>
          <List>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Custody Given" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Custody Released" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="VIP/Sales Referral" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Custody Given" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Custody Released" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <PointOfSaleIcon />
              </ListItemIcon>
              <ListItemText primary=" Merchant" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Custody Given" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Custody Released" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary=" Retailer" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Custody Given" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Custody Released" />
            </ListItem>
            {/* ------------------------------ */}

            {/* ------------------------------ */}
          </List>
        </Grid>
        <Grid
          sx={{cursor:'pointer', backgroundColor: "white", boxShadow: "0 0 7px 0px #a1a1a1" }}
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <Box
            sx={{
              background: 'linear-gradient(45deg, #ffcaca, #fff5db)',
              height: "20vh",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              boxShadow: "1px 3px 11px 0px #a1a1a1",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#868480",
                fontWeight: "bolder",
              }}
            >
              {/* --------------- Smart Reports---------------------------------------------------- */}
              Smart Reports{" "}
            </Typography>
            <Box>
              <AssessmentIcon sx={{ width: 50, height: 50, color: "#868480" }} />
            </Box>
          </Box>
          <List>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            {/* ------------------------------ */}
            <ListItem>
              <ListItemText secondary="Buy and Save Module" onClick={()=>router.push("/reports/buy&save")}/>
            </ListItem>
            <ListItem>
              <ListItemText secondary="Instant Gold Module" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Sell and Reserve Module" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="E-Commerce Module" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Sell Old Gold Module" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Upload Gold Module" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Referral Module" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Bid Buy and Sell Module" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Loan Module" />
            </ListItem>
            {/* ------------------------------ */}
          </List>
        </Grid>
      </Grid>
    </>
  );
}
reports.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
