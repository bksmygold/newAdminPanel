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
import NestedTabTable from '../../../components/utility/nestedTabTable'

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
            field: "id",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        
        {
            field: "customer",
            headerName: "customer",
            flex: 1
        },
        {
            field: "amount_to_settle",
            headerName: "amount_to_settle",
            flex: 1
        },
        {
            field: "gold_weight",
            headerName: "gold_weight",
            flex: 1
        },
        {
            field: "rate",
            headerName: "rate",
            flex: 1
        },
        {
            field: "settlement_status",
            headerName: "settlement_status",
            flex: 1
        },
        {
            field: "invoice_amount",
            headerName: "invoice_amount",
            flex: 1
        },
        {
            field: "razorpay_tax",
            headerName: "razorpay_tax",
            flex: 1
        },
        {
            field: 'delete',
            headerName: 'Delete',

            editable: true,
            renderCell: checkInvoice,
            flex: 2,
            minWidth: "100%"
        },


    ];

    const rows = [
        {
            id: 1,
            amount_to_settle: 1234,
            customer: "Customer",
            amount_to_settle: "Nischal",
            gold_weight: 12,
            rate: 4.5,
            settlement_status: "active",
            invoice_amount: 213,
            razorpay_tax: 12,
            flex: 1,
            minWidth: 100,
        },

    ];
    //----------------------------
    const columns1 = [
        {
            field: "id",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "amount_to_receive",
            headerName: "amount_to_receive",
            flex: 1
        },
        {
            field: "customer",
            headerName: "customer",
            flex: 1
        },
        {
            field: "merchant",
            headerName: "merchant",
            flex: 1
        },
        {
            field: "gold_weight",
            headerName: "gold_weight",
            flex: 1
        },
        {
            field: "rate",
            headerName: "rate",
            flex: 1
        },
        {
            field: "settlement_status",
            headerName: "settlement_status",
            flex: 1
        },
        {
            field: "bank_transaction_detail",
            headerName: "bank_transaction_detail",
            flex: 1
        },
        {
            field: "remind_btn",
            headerName: "remind_btn",
            flex: 1
        },

        {
            field: 'delete',
            headerName: 'Delete',

            editable: true,
            renderCell: checkInvoice,
            flex: 2,
            minWidth: "100%"
        },


    ];

    const rows1 = [
        {
            id: 2,
            amount_to_receive: 1234,
            customer: "Retailer",
            merchant: "Nischal",
            gold_weight: 12,
            rate: 4.5,
            settlement_status: "active",
            bank_transaction_detail: 213,
            remind_btn: "Remind",
            flex: 1,
            minWidth: 100,
        },

    ];

    const columns2 = [
        {
            field: "id",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "amount_to_settle",
            headerName: "amount_to_settle",
            flex: 1
        },
        {
            field: "customer",
            headerName: "customer",
            flex: 1
        },
     
        {
            field: "gold_weight",
            headerName: "gold_weight",
            flex: 1
        },
        {
            field: "rate",
            headerName: "rate",
            flex: 1
        },
        {
            field: "settlement_status",
            headerName: "settlement_status",
            flex: 1
        },
        {
            field: "invoice_amount",
            headerName: "invoice_amount",
            flex: 1
        },
        {
            field: "razorpay_tax",
            headerName: "razorpay_tax",
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

    const rows2 = [
        {
            id: 3,
            amount_to_settle: 1234,
            customer: "Customer",
            amount_to_settle: "Nischal",
            gold_weight: 12,
            rate: 4.5,
            settlement_status: "active",
            invoice_amount: 213,
            razorpay_tax: 12,
            flex: 1,
            minWidth: 100,
        },

    ];
    //----------------------------
    const columns3 = [
        {
            field: "id",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "amount_to_receive",
            headerName: "amount_to_receive",
            flex: 1
        },
        {
            field: "customer",
            headerName: "customer",
            flex: 1
        },
        {
            field: "merchant",
            headerName: "merchant",
            flex: 1
        },
        {
            field: "gold_weight",
            headerName: "gold_weight",
            flex: 1
        },
        {
            field: "rate",
            headerName: "rate",
            flex: 1
        },
        {
            field: "settlement_status",
            headerName: "settlement_status",
            flex: 1
        },
        {
            field: "bank_transaction_detail",
            headerName: "bank_transaction_detail",
            flex: 1
        },
        {
            field: "remind_btn",
            headerName: "remind_btn",
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

    const rows3 = [
        {
            id: 4,
            amount_to_receive: 1234,
            customer: "Retailer",
            merchant: "Nischal",
            gold_weight: 12,
            rate: 4.5,
            settlement_status: "active",
            bank_transaction_detail: 213,
            remind_btn: "Remind",
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


                <NestedTabTable
                    table={<Table
                        sx={{
                            padding: 5,
                            borderRadius: 2,
                            boxShadow: "0px 4px 1px 0px #d2c6c6",
                            marginTop: "500px",
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
                        }}
                        rows={rows1}
                        columns={columns1}
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                        }
                    />}

                    table2={<Table
                        sx={{
                            padding: 5,
                            borderRadius: 2,
                            boxShadow: "0px 4px 1px 0px #d2c6c6",
                            marginTop: "500px",
                        }}

                        rows={rows2}
                        columns={columns2}
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                        }
                    />}
                    table3={<Table
                        sx={{
                            padding: 5,
                            borderRadius: 2,
                            boxShadow: "0px 4px 1px 0px #d2c6c6",
                            marginTop: "500px",
                        }}
                        rows={rows3}
                        columns={columns3}
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
