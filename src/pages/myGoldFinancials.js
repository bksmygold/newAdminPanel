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
import { MyGoldFinancialsDashboardLayout } from "src/components/myGoldFinancialsDashboard-layout";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";

//=============================================
const myGoldFinancials = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const ODD_OPACITY = 0.2;

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: "#f9efd4",
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  }));
  //=============================================
  return (
    <>
      {/* //------------------------------------------------------- */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding:5
        }}
      >
        <Box
          sx={{
            // width: "95%",
            borderRadius: 2,

            marginTop: 5,
            boxShadow: "0px 4px 1px 0px #d2c6c6",
          }}
        >
          <FormControl fullWidth>
            {" "}
            <InputLabel id="demo-simple-select-label">Search data</InputLabel>
            <Select label="Search data">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Life Time Data</MenuItem>
              <MenuItem value={10}>Kuch aur options</MenuItem>
              <MenuItem value={10}>Kuch aur</MenuItem>
              <MenuItem value={10}>Aur bhi kuch</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* //------------------------------------------------------- */}
        <Box
          sx={{
            // width: "95%",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: 2,
            marginTop: 5,
            boxShadow: "0px 4px 1px 0px #d2c6c6",
            padding: 5,
          }}
        >
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Select Date Range"
                    inputFormat="MM/DD/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <FormControl fullWidth>
                {" "}
                <InputLabel id="demo-simple-select-label">Search Customers</InputLabel>
                <Select label="Search data">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>All Customer</MenuItem>
                  <MenuItem value={10}>Kuch aur options</MenuItem>
                  <MenuItem value={10}>Kuch aur</MenuItem>
                  <MenuItem value={10}>Aur bhi kuch</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Show Summary" />
                <FormControlLabel control={<Checkbox />} label="Show graph" />
              </FormGroup>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12} sx={{ width: 50 }}>
              <Accordion>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                  <Typography sx={{ color: "black", width: "100%" }}>Download as</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="primary">PDF</Typography>
                  <Typography color="primary">Excel</Typography>
                  <Typography color="primary">CSV</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <Typography sx={{ color: "black", width: "100%" }}>Download as</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="primary">PDF</Typography>
                <Typography color="primary">Excel</Typography>
                <Typography color="primary">CSV</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid> */}
        </Box>

        <div
          style={{
            height: 400,
            width: "100%",
            color: "red",
          }}
        >
          <StripedDataGrid
            sx={{
              padding: 5,
              borderRadius: 2,
              boxShadow: "0px 4px 1px 0px #d2c6c6",
              marginTop: 5,
              //   backgroundColor: "#e8d8c0",
            }}
            rows={rows}
            columns={columns}
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
            }
          />
        </div>
        {/* //------------------------------------------------------- */}
      </Container>
    </>
  );
};
//=============================================

myGoldFinancials.getLayout = (page) => (
  <MyGoldFinancialsDashboardLayout>{page}</MyGoldFinancialsDashboardLayout>
);

export default myGoldFinancials;
