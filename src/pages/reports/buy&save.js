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
import { DashboardLayout } from "../../components/layout/dashboard-layout";
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
export default function BuyAndSave() {
  const router = useRouter()
  //=======================================================

  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Reports</title>
      </Head>

    </>
  );
}
BuyAndSave.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
