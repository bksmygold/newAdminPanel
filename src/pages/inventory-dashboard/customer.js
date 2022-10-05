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
import FilterResults from 'react-filter-search';
import {
    CustomTextField, CustomFormControl
} from "src/components/customMUI";
//=============================================
const customer = () => {
    //===============
    const theme = useTheme()

    const checkCustodian = (params) => {
        return (
            <strong>
                <Button
                    sx={[theme.custom.editButton, { width: "100%" }]}
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
            field: "id",
            headerName: "Sale Invoice ID",
            width: 150,
            editable: true,
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "customer",
            headerName: "Customer ",
            width: 150,
            flex: 1
        },
        {
            field: "phone",
            headerName: "Phone Number  ",
            width: 150,
            flex: 1
        },
        {
            field: "email",
            headerName: "Email Address  ",
            minWidth: 240,
            flex: 1,

        },
        {
            field: "weight",
            headerName: "Weight ",
            width: 150,
            flex: 1
        },
        {
            field: "noCustodian",
            headerName: "Number of Custodian ",
            width: 150,
            flex: 1
        },
        {
            field: 'delete',
            headerName: 'Invoice',
            width: 50,
            editable: true,
            renderCell: checkInvoice, flex: 1
        },
        {
            field: 'qqqq',
            headerName: 'Custodian',
            width: 550,
            editable: true,
            renderCell: checkCustodian, flex: 1
        },

    ];

    const rows = [
        {
            id: "SaleID-0001",
            customer: "Nischal Saraffa",
            phone: "7392988369",
            email: "gupta.nischal014@gmail.com",
            weight: "1 GRAM",
            noCustodian: "5",
            flex: 1,
            minWidth: 100,
        },
        {
            id: "SaleID-0002",
            customer: "Ankit Tea Stall",
            phone: "9876543211",
            email: "anki.nischal014@gmail.com",
            weight: "1 GRAM",
            noCustodian: "2",
            flex: 1,
            minWidth: 100,
        },
        {
            id: "SaleID-0003",
            customer: "Sachin Mobile shop",
            phone: "9876543211",
            email: "anki.nischal014@gmail.com",
            weight: "6 GRAM",
            noCustodian: "7",
            flex: 1,
            minWidth: 100,
        },
        {
            id: "SaleID-0004",
            customer: "Lobo Tailor",
            phone: "9876543211",
            email: "anki.nischal014@gmail.com",
            weight: "7 GRAM",
            noCustodian: "9",
            flex: 1,
            minWidth: 100,
        },


    ];

    const [filterRow, setFilterRow] = React.useState(rows)

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
                    {/* <FormControl fullWidth>
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
                    </FormControl> */}
                    <CustomTextField
                        onChange={(e) => {
                            let keyword = e.target.value
                            let newRow = rows.filter(x => x.customer?.toLowerCase().startsWith(keyword.toLowerCase()))
                            setFilterRow(newRow)
                        }}
                        sx={{ minWidth: "100%" }}
                        label="Search customer"
                    />
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
                            <CustomFormControl
                                fullWidth>
                                {" "}
                                <InputLabel id="demo-simple-select-label">Search Customers</InputLabel>
                                <Select
                                    label="Search data"
                                    onChange={(e) => {
                                        if (e.target.value > 5) {

                                            let newRow = rows.filter(x => x.noCustodian > "5")
                                            setFilterRow(newRow)
                                        }
                                        if (e.target.value <= 5) {

                                            let newRow = rows.filter(x => x.noCustodian <= "5")
                                            setFilterRow(newRow)
                                        } if (e.target.value === "all") {

                                            // let newRow = rows.filter(x => x.noCustodian <= "5")
                                            setFilterRow(rows)
                                        }
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"all"}>All Customer</MenuItem>
                                    <MenuItem value={4}>Custodian less than 5</MenuItem>
                                    <MenuItem value={6}>Custodian more than 5</MenuItem>
                                </Select>
                            </CustomFormControl
                            >
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

                </Box>


                <Table
                    sx={{
                        padding: 5,
                        borderRadius: 2,
                        boxShadow: "0px 4px 1px 0px #d2c6c6",
                        marginTop: 5,

                        //   backgroundColor: "#e8d8c0",
                    }}

                    rows={filterRow}
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
