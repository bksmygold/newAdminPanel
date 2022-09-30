import {
  Grid,
  Box,
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FinancialsDashboardLayout } from "src/components/layout/financialsDashboard-layout";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import Table from "src/components/utility/table";
import { InventoryDashboardLayout } from "src/components/layout/inventoryDashboard-layout";
import { InventoryCard } from "src/components/cards/inventoryCard";
import { useTheme } from "@mui/styles";
//=============================================
const Inventory = () => {

  const theme = useTheme()
  //=============================================
  return (
    <>
      {/* //------------------------------------------------------- */}
      <Container
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: 2,
          minWidth: "100%",

        }}
      >
        <Typography sx={theme.custom.typography.inventoryCard.heading}>Customer Side </Typography>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold in Custody" stats={3690} />

          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold Released" stats={3690} />

          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold on hold" stats={3690} />
          </Grid>
        </Grid>
        <Typography sx={theme.custom.typography.inventoryCard.heading}>Merchant Side </Typography>
        <Grid container spacing={2}>
        <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold in Custody" stats={3690} />

          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold in Custody" stats={3690} />

          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold Released" stats={3690} />

          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold In Transit" stats={3690} />
          </Grid>
        </Grid>
        <Typography sx={theme.custom.typography.inventoryCard.heading}>Business Side </Typography>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold in Custody" stats={3690} />

          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold Released" stats={3690} />

          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <InventoryCard title="Gold on hold" stats={3690} />
          </Grid>
        </Grid>
        
        {/* //------------------------------------------------------- */}
      </Container>
    </>
  );
};
//=============================================

Inventory.getLayout = (page) => (
  <InventoryDashboardLayout>{page}</InventoryDashboardLayout>
);

export default Inventory;
