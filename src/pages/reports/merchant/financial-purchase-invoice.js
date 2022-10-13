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
            field: "customer",
            headerName: "customer",
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
            field: "cgst",
            headerName: "cgst",
            flex: 1
        },
        {
            field: "sgst",
            headerName: "sgst",
            flex: 1
        },
        {
            field: "igst",
            headerName: "igst",
            flex: 1
        },
        {
            field: "total",
            headerName: "Total",
            flex: 1
        },

        {
            field: "payment_gateway_tax",
            headerName: "payment_gateway_tax",
            flex: 1
        }, {
            field: "commission_earned",
            headerName: "commission_earned",
            flex: 1
        }, {
            field: "amount_settled_to_merchant",
            headerName: "amount_settled_to_merchant",
            flex: 1
        }, {
            field: "payment_detail_customer",
            headerName: "payment_detail_customer",
            flex: 1
        }, {
            field: "transact_on",
            headerName: "transact_on",
            flex: 1
        },
        {
            field: "settlement_status",
            headerName: "settlement_status",
            flex: 1
        },
        {
            field: "settlement_razorpay",
            headerName: "settlement_razorpay",
            flex: 1
        },
        {
            field: "custody_certificate",
            headerName: "custody_certificate",
            flex: 1
        },
        {
            field: "sale_invoice",
            headerName: "sale_invoice",
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
            customer: "Ankit",
            itemId: "11-874",
            desc: "some kind of ramdom descriptions",
            gram: "14 gm",
            rate: 4.5,
            amount: 5478,
            hsnCode: "HSN-2568-774",
            cgst:18,
            sgst:18,
            igst:18,
            total: 7899,
            payment_gateway_tax: 14,
            commission_earned:1254,
            amount_settled_to_merchant:14,
            payment_detail_customer:"12",
            transact_on:"22/2/2014",
            settlement_status:"active",
            settlement_razorpay:213,
            custody_certificate:"d",
            sale_invoice:"12",
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
            field: "customer",
            headerName: "customer",
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
            field: "cgst",
            headerName: "cgst",
            flex: 1
        },
        {
            field: "sgst",
            headerName: "sgst",
            flex: 1
        },
        {
            field: "igst",
            headerName: "igst",
            flex: 1
        },
        {
            field: "total",
            headerName: "Total",
            flex: 1
        },

        {
            field: "payment_gateway_tax",
            headerName: "payment_gateway_tax",
            flex: 1
        }, {
            field: "commission_earned",
            headerName: "commission_earned",
            flex: 1
        }, {
            field: "amount_settled_to_merchant",
            headerName: "amount_settled_to_merchant",
            flex: 1
        }, {
            field: "payment_detail_customer",
            headerName: "payment_detail_customer",
            flex: 1
        }, {
            field: "transact_on",
            headerName: "transact_on",
            flex: 1
        },
        {
            field: "settlement_status",
            headerName: "settlement_status",
            flex: 1
        },
        {
            field: "settlement_razorpay",
            headerName: "settlement_razorpay",
            flex: 1
        },
        {
            field: "custody_certificate",
            headerName: "custody_certificate",
            flex: 1
        },
        {
            field: "sale_invoice",
            headerName: "sale_invoice",
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
            customer: "Ankit",
            itemId: "11-874",
            desc: "some kind of ramdom descriptions",
            gram: "14 gm",
            rate: 4.5,
            amount: 5478,
            hsnCode: "HSN-2568-774",
            cgst:18,
            sgst:18,
            igst:18,
            total: 7899,
            payment_gateway_tax: 14,
            commission_earned:1254,
            amount_settled_to_merchant:14,
            payment_detail_customer:"12",
            transact_on:"22/2/2014",
            settlement_status:"active",
            settlement_razorpay:213,
            custody_certificate:"d",
            sale_invoice:"12",
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
