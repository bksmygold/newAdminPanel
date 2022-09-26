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
  Modal,
  Alert,
  Divider
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
import { useTheme } from "@mui/styles";
import Image from 'next/image'
import Invoice from "src/components/invoice";
import { invoice } from "src/constants/constant";

//=============================================
const myGoldFinancials = () => {
  const [invoice, setInvoice] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const theme = useTheme()

  const columns = [
    {
      field: "fullName",
      headerName: "Name",
      width: 150,
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),   
    },
    {
      field: "mobile",
      headerName: "Phone",
      width: 150,
      flex: 1,
      minWidth: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      flex: 1,
      minWidth: 100,
    },
 
  ];

  const rows = [
    {
      id: 1,
      fullName: "Nischal Gupta",
      mobile: 7392988369,
      email: "gupta.nischal014@gmail.com",
    },
    {
      id: 12,
      fullName: "Ankit Gupta",
      mobile: 7589744128,
      email: "gupta.ankit@gmail.com",
    },
    {
      id: 13,
      fullName: "Suyash Aggarwal",
      mobile: 9651473369,
      email: "suyahRocks007@gmail.com",
    },
    
  ];

  const handleClick = (params) => {
    setIsOpen((prevState) => !prevState)
    setInvoice(params.row)

  }
  console.log("isOpen----", isOpen)
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
          padding: 5,
          minWidth: "100%",

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


        <Table
          sx={{
            padding: 5,
            borderRadius: 2,
            boxShadow: "0px 4px 1px 0px #d2c6c6",
            marginTop: 5,

            //   backgroundColor: "#e8d8c0",
          }}

          rows={rows}
          columns={columns}
          handleClick={handleClick}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
        />
        {/* ================================================================== */}
        <Modal
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zoom: "75%"
          }}
          open={!!isOpen}
          onClose={() => setIsOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Invoice
            invoice={invoice}
          />

        </Modal>
        {/* ================================================================== */}


      </Container>
    </>
  );
};
//=============================================

myGoldFinancials.getLayout = (page) => (
  <FinancialsDashboardLayout>{page}</FinancialsDashboardLayout>
);

export default myGoldFinancials;
