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
  Badge,
  Button
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
import { CustodianCard } from "src/components/cards/inventoryDashboard/custodianCard";
import { useTheme } from "@mui/styles";
import { custodian, userType } from "src/constants/constant";
import { CustodyCard } from "src/components/cards/inventoryDashboard/custodyCard";
import { UserTypeCard } from "src/components/cards/inventoryDashboard/userTypeCard";
import { ModuleCard } from "src/components/cards/inventoryDashboard/moduleCard";
import { useRouter } from "next/router";
//=============================================
const Inventory = () => {

  const theme = useTheme()
  const router = useRouter()

  const [clicked, setClicked] = React.useState(false)
  const [custodyGiven, setCustodyGiven] = React.useState(false)
  const [custodyReleased, setCustodyReleased] = React.useState(false)
  const [underHold, setUnderHold] = React.useState(false)

  const [toCustomer, setToCustomer] = React.useState(false)
  const [toBusiness, setToBusiness] = React.useState(false)
  const [toVip, setToVip] = React.useState(false)


  const [buySave, setBuySave] = React.useState(false)
  const [buyInstant, setBuyInstant] = React.useState(false)
  const [upload, setUpload] = React.useState(false)

  const [savedInstallments, setSavedInstallments] = React.useState(false)
  const [planBonus, setPlanBonus] = React.useState(false)
  //=============================================
  const planDetail = (params) => {
    return (
      <Badge color="warning" badgeContent={4} sx={{
        ".MuiBadge-badge": {
          color: "#28282B",
          boxShadow: "0px 0px 5px 2px #644006"
        }
      }}>
        <Button
          onClick={() => router.push(`/reports/buy-save/plan/?id=${params.id}`)}
          sx={[theme.custom.editButton]}>
          Plan Details
        </Button>
      </Badge>
    );
  };

  //=============================================
  const columns = [

    {
      field: "customer",
      headerName: "customer",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.row.customer}</p>
      ),

    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      minWidth: 250,

    },
    {
      field: "phone",
      headerName: "phone",
      minWidth: 100,

      flex: 1
    },
    {
      field: "weight_saved",
      headerName: "weight_saved",
      minWidth: 100,

      flex: 1
    },
    {
      field: "plans",
      headerName: "plans",
      renderCell: planDetail,
      minWidth: 120,
      flex: 1
    },
  ];

  const rows = [
    {
      id: 1,
      customer: "Nischal",
      email: "nischal.gupota@gmail.com",
      phone: 7392988369,
      weight_saved: 4.5,
      plans: "btn",
      flex: 1,
      minWidth: 100,
    },
  ];

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
        }}>
        <Typography sx={theme.custom.typography.inventoryCard.heading}>My Gold Inventory </Typography>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={4} xs={12}>
            <CustodianCard
              clicked={clicked}
              onClick={() => setClicked(!clicked)}
              title="B. K .Saraf Jewellers"
              stats={'3,690'}
            />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <CustodianCard
              title="Kalyan Jewellers"
              stats={'3,690'}
            />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <CustodianCard
              title="Malabar Jewellers"
              stats={'3,690'}
            />
          </Grid>
        </Grid>

        {clicked && (
          <Grid container spacing={6} sx={{ mt: 3 }}>
            <Grid item lg={3} sm={4} xs={12}>
              <CustodyCard
                clicked={custodyGiven}
                onClick={() => setCustodyGiven(!custodyGiven)}
                title={"Custodian Given"}
                stats={557}
              />
            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <CustodyCard
                clicked={custodyReleased}
                onClick={() => setCustodyReleased(!custodyReleased)}
                title={"Custodian Released"}
                stats={557}
              />            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <CustodyCard
                clicked={underHold}
                onClick={() => setUnderHold(!underHold)}
                title={"Under Hold"}
                stats={557}
              />
            </Grid>
          </Grid>)}

        {custodyGiven && (
          <Grid container spacing={6} sx={{ mt: 3 }}>
            <Grid item lg={3} sm={4} xs={12}>
              <UserTypeCard
                clicked={toCustomer}
                onClick={() => setToCustomer(!toCustomer)}
                title={"To Customer"}
                stats={557}
              />
            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <UserTypeCard
                clicked={toBusiness}
                onClick={() => setToBusiness(!toBusiness)}
                title={"To Business"}
                stats={557}
              />            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <UserTypeCard
                clicked={toVip}
                onClick={() => setToVip(!toVip)}
                title={"To VIP"}
                stats={557}
              />
            </Grid>
          </Grid>)}

          {custodyReleased && (
          <Grid container spacing={6} sx={{ mt: 3 }}>
            <Grid item lg={3} sm={4} xs={12}>
              <UserTypeCard
                clicked={toCustomer}
                onClick={() => setToCustomer(!toCustomer)}
                title={"To Customer"}
                stats={557}
              />
            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <UserTypeCard
                clicked={toBusiness}
                onClick={() => setToBusiness(!toBusiness)}
                title={"To Business"}
                stats={557}
              />            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <UserTypeCard
                clicked={toVip}
                onClick={() => setToVip(!toVip)}
                title={"To VIP"}
                stats={557}
              />
            </Grid>
          </Grid>)}


        {toCustomer && (
          <Grid container spacing={6} sx={{ mt: 3 }}>
            <Grid item lg={3} sm={4} xs={12}>
              <ModuleCard
                clicked={buySave}
                onClick={() => setBuySave(!buySave)}
                title={"Buy & Save Plans"}
                stats={557}
              />
            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <ModuleCard
                clicked={buyInstant}
                onClick={() => setBuyInstant(!buyInstant)}
                title={"Buy Instant Gold"}
                stats={557}
              />            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <ModuleCard
                clicked={upload}
                onClick={() => setUpload(!upload)}
                title={"Uploaded Gold"}
                stats={557}
              />
            </Grid>
          </Grid>)}

        {buySave && (
          <Grid container spacing={6} sx={{ mt: 3 }}>
            <Grid item lg={3} sm={4} xs={12}>
              <ModuleCard
                clicked={savedInstallments}
                onClick={() => setSavedInstallments(!savedInstallments)}
                title={"Saved Installments"}
                stats={557}
              />
            </Grid>
            <Grid item lg={3} sm={4} xs={12}>
              <ModuleCard
                clicked={planBonus}
                onClick={() => setPlanBonus(!planBonus)}
                title={"Bonus on Plans"}
                stats={557}
              />
            </Grid>
          </Grid>)}

        {savedInstallments && (
          <Grid contain er fullWidth spacing={6} sx={{ mt: 3 }}>
            <Grid item fullWidth>
              <Table
                rows={rows}
                columns={columns}
              />
            </Grid>
          </Grid>)}
          
      </Container>
    </>
  );
};
//=============================================

Inventory.getLayout = (page) => (
  <InventoryDashboardLayout showFilter>{page}</InventoryDashboardLayout>
);

export default Inventory;
