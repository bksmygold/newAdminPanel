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
import FilterSection from "src/components/filterSection";
import CardModal from "src/components/modal/cardModal";
//=============================================
const bids = () => {
    const theme = useTheme()
    const reportsQuery = useQuery({
        queryKey: "BuySave-Reports",
        queryFn: () => getBuySaveReport()
    })
    console.log("reports ---", reportsQuery)

    //=================================

    const buyBids = (params) => {
        return (
            <CardModal buyerBids={buyBidsRow} />
        );
    };

    const buyBidsRow = [{
        sellerName: "name",
        buy_weight: 4,
        accepted_price: 1478,
        payment: [{
            razorpayId: 4,
            mode: "UPI",
            transferred_amount: 4784,
        }],
        commission: 4,
        merchant_settlement_value: 457,
        razorpay_settlement_on: "14/07/1987",
        custodian: "Kalyaan",
        custody_certificate: "certificate",
        sale_invoice: "invoice"
    }]


    //-----------------------
    const columns = [
        {
            field: "buyer",
            headerName: "buyer",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "no_of_bids",
            headerName: "no_of_bids",
            flex: 1
        },
        {
            field: "total_gold_saved",
            headerName: "total_gold_saved",
            flex: 1
        },
        {
            field: "total_commission",
            headerName: "total_commission",
            flex: 1
        },
        {
            field: "total_settlement",
            headerName: "total_settlement",
            flex: 1
        },
        {
            field: "premium_member",
            headerName: "premium_member",
            flex: 1
        },
        {
            field: "notified_bids",
            headerName: "notified_bids",
            flex: 1
        },
        {
            field: "bids",
            headerName: "bids",
            renderCell: buyBids,
            flex: 1,
            minWidth: "100%"
        },

    ];

    const rows = [
        {
            id: 1,
            buyer: "buyer",
            no_of_bids: 108,
            total_gold_saved: 4.7,
            total_commission: 107,
            total_settlement: 4,
            premium_member: "yes",
            notified_bids: 47,
            bids: "Button",
        },

    ];

    //----------------------------
    const columns1 = [
        {
            field: "seller",
            headerName: "seller",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "no_of_bids",
            headerName: "no_of_bids",
            flex: 1
        },
        {
            field: "total_commission",
            headerName: "total_commission",
            flex: 1
        },
        {
            field: "total_amount_due",
            headerName: "total_amount_due",
            flex: 1
        },
        {
            field: "total_settlement",
            headerName: "total_settlement",
            flex: 1
        },

        {
            field: 'bids',
            headerName: 'bids',

            editable: true,
            renderCell: buyBids,
            flex: 2,
            minWidth: "10%"
        },


    ];

    const rows1 = [
        {
            id: 1,
            seller: "seller",
            no_of_bids: 108,
            total_commission: 107,
            total_amount_due: 47,
            total_settlement: 4,
            bids: "Button",
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

                <FilterSection />
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
                    title1="Buyers"
                    title2="Sellers"
                    table={
                        <Table
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
                        />
                    }
                    table1={
                        <Table
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
                        />
                    }
                />


                {/* //------------------------------------------------------- */}
            </Container>
        </>
    );
};
//=============================================

bids.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default bids;
