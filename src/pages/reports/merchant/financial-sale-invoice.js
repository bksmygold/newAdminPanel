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
import { Das } from "src/components/layout/inventoryDashboard-layout";
import { useTheme } from "@mui/styles";
import { DashboardLayout } from "../../../components/layout/dashboard-layout";
import { useQuery } from "@tanstack/react-query";
import { getBuySaveReport } from "src/apis/reports";
import { CustomTextField } from "src/components/customMUI";
import TabTable from "../../../components/utility/tabTable";
//=============================================
const customer = () => {
    const theme = useTheme()
    const reportsQuery = useQuery({
        queryKey: "BuySave-Reports",
        queryFn: () => getBuySaveReport()
    })
    console.log("reports ---", reportsQuery)
    //=====================================
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
    //-----------------------
    const columns = [
        {
            field: "firstName",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "merchant",
            headerName: "Merchant",
            flex: 1
        },
        {
            field: "Seller_Details",
            headerName: "Seller_Details",
            flex: 1
        },
        {
            field: "itemId",
            headerName: "Item ID",
            flex: 1
        },
        {
            field: "desc",
            headerName: "Description",
            flex: 1
        },
        {
            field: "gram",
            headerName: "Gram",
            flex: 1
        },
        {
            field: "rate",
            headerName: "Rate",
            flex: 1
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1
        },
        {
            field: "hsnCode",
            headerName: "HSN Code",
            flex: 1
        },
        {
            field: "total",
            headerName: "Total",
            flex: 1
        },

        {
            field: "Bank_Details",
            headerName: "Bank_Details",
            flex: 1
        }, {
            field: "Settlement_Status",
            headerName: "Settlement_Status",
            flex: 1
        }, {
            field: "Transaction_Detail",
            headerName: "Transaction_Detail",
            flex: 1
        }, {
            field: "due",
            headerName: "due",
            flex: 1
        }, {
            field: "custody_release_certificate",
            headerName: "custody_release_certificate",
            flex: 1
        },
        {
            field: "purchase_invoice",
            headerName: "purchase_invoice",
            flex: 1
        },
        {
            field: 'delete',
            headerName: 'Delete',

            editable: true,
            renderCell: checkInvoice,
            flex: 2,
            minWidth: "10%"
        },


    ];

    const rows = [
        {
            id: 1,
            merchant: "Nischal",
            Seller_Details: "Ankit",
            itemId: "11-874",
            desc: "some kind of ramdom descriptions",
            gram: "14 gm",
            rate: 4.5,
            amount: 5478,
            hsnCode: "HSN-2568-774",
            total: 7899,
            Bank_Details: "BOB",
            Settlement_Status: "active",
            Transaction_Detail: "detail",
            due: "02/02/2023",
            custody_release_certificate: "123",
            purchase_invoice: "sdf",
            flex: 1,
            minWidth: 100,
        },

    ];
    //----------------------------
    const columns1 = [
        {
            field: "firstName",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "merchant",
            headerName: "Merchant",
            flex: 1
        },
        {
            field: "Seller_Details",
            headerName: "Seller_Details",
            flex: 1
        },
        {
            field: "itemId",
            headerName: "Item ID",
            flex: 1
        },
        {
            field: "desc",
            headerName: "Description",
            flex: 1
        },
        {
            field: "gram",
            headerName: "Gram",
            flex: 1
        },
        {
            field: "rate",
            headerName: "Rate",
            flex: 1
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1
        },
        {
            field: "hsnCode",
            headerName: "HSN Code",
            flex: 1
        },
        {
            field: "total",
            headerName: "Total",
            flex: 1
        },

        {
            field: "Bank_Details",
            headerName: "Bank_Details",
            flex: 1
        }, {
            field: "Settlement_Status",
            headerName: "Settlement_Status",
            flex: 1
        }, {
            field: "Transaction_Detail",
            headerName: "Transaction_Detail",
            flex: 1
        }, {
            field: "due",
            headerName: "due",
            flex: 1
        }, {
            field: "custody_release_certificate",
            headerName: "custody_release_certificate",
            flex: 1
        },
        {
            field: "purchase_invoice",
            headerName: "purchase_invoice",
            flex: 1
        },
        {
            field: 'delete',
            headerName: 'Delete',

            editable: true,
            renderCell: checkInvoice,
            flex: 2,
            minWidth: "10%"
        },


    ];

    const rows1 = [
        {
            id: 1,
            merchant: "Chotu",
            Seller_Details: "Ankit",
            itemId: "11-874",
            desc: "some kind of ramdom descriptions",
            gram: "14 gm",
            rate: 4.5,
            amount: 5478,
            hsnCode: "HSN-2568-774",
            total: 7899,
            Bank_Details: "BOB",
            Settlement_Status: "active",
            Transaction_Detail: "detail",
            due: "02/02/2023",
            custody_release_certificate: "123",
            purchase_invoice: "sdf",
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
                    padding: 5,
                    minWidth: "100%",

                }}
            >
                <Grid
                    container
                    spacing={1}
                    sx={{

                        minWidth: "100%",
                        borderRadius: 2,
                        // backgroundColor: "pink",
                        mt: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                        // boxShadow: "0px 4px 1px 0px #d2c6c6",
                    }}
                >
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="Merchant" />
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="Customer" />
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="HSN Codes" />
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="Settlement Status" />
                    </Grid>

                </Grid >
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



                <TabTable
                    table={<Table
                        sx={{
                            padding: 5,
                            borderRadius: 2,
                            boxShadow: "0px 4px 1px 0px #d2c6c6",
                            marginTop: "500px",

                            //   backgroundColor: "#e8d8c0",
                        }}

                        rows={rows}
                        columns={columns}
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                        }
                    />}
                    table1={<Table
                        sx={{
                            padding: 5,
                            borderRadius: 2,
                            boxShadow: "0px 4px 1px 0px #d2c6c6",
                            marginTop: "500px",

                            //   backgroundColor: "#e8d8c0",
                        }}

                        rows={rows1}
                        columns={columns1}
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                        }
                    />}
                />


                {/* //------------------------------------------------------- */}
            </Container>
        </>
    );
};
//=============================================

customer.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default customer;
