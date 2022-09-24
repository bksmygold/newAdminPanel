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
import { useTheme } from "@mui/styles";
//=============================================
const customer = () => {
    //===============
    const theme = useTheme()

    const checkCustodian = (params) => {
        return (
            <strong>
                <Button
                    sx={theme.custom.editButton}


                >
                    Check Custodians
                </Button>
            </strong>
        );
    };
    //==========
    const checkInvoice = (params) => {
        return (
            <Button
            sx={theme.custom.editButton}

            >
                Check Sale Invoices
            </Button>
        );
    };
    const columns = [
        {
            field: "firstName",
            headerName: "First name",
            width: 150,
            editable: true,
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "lastName",
            headerName: "Last name",
            width: 150,
            flex: 1
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 150,
            editable: true,
            renderCell: checkInvoice, flex: 1
        },
        // {
        //     field: 'delete',
        //     headerName: 'Delete',
        //     width: 150,
        //     editable: true,
        //     renderCell: checkCustodian, flex: 1
        // },

    ];

    const rows = [
        { id: 1, lastName: "Snow", flex: 1, minWidth: 100, firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", flex: 1, minWidth: 100, firstName: "Cersei", age: 42 },

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
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                    }
                />
                {/* //------------------------------------------------------- */}
            </Container>
        </>
    );
};
//=============================================

customer.getLayout = (page) => (
    <InventoryDashboardLayout>{page}</InventoryDashboardLayout>
);

export default customer;
