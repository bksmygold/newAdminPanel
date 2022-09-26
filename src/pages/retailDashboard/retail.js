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
import { RetailDashboardLayout } from "src/components/layout/retailDashboard-layout";
import { RetailCard } from "src/components/cards/retailCard";
import { useTheme } from "@mui/styles";
//=============================================
const Retail = () => {

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
          padding: 10,
          minWidth: "100%",

        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={3} sm={4} xs={12}>
            <RetailCard title="No. of Retailers" stats={3690} perStats={14} />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <RetailCard title="No. of Jewellery Type" stats={3690} perStats={14} />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <RetailCard title="No. of Commodity Type" stats={3690} perStats={14} />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <RetailCard title="Commission Earned" stats={3690} perStats={14} />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <RetailCard title="Cash Settled To Retailer" stats={3690} perStats={14} />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <RetailCard title="Gold Reserved By Retailer" stats={3690} perStats={14} />
          </Grid> 
        </Grid>

        {/* //------------------------------------------------------- */}
      </Container>
    </>
  );
};
//=============================================

Retail.getLayout = (page) => (
  <RetailDashboardLayout>{page}</RetailDashboardLayout>
);

export default Retail;
