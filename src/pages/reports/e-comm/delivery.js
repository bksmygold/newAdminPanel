import Head from 'next/head';

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
    Button,
    Badge
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
import GraphModal from 'src/components/modal/graphModal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
import ReportModal from 'src/components/modal/reportModal';
import FilterSection from 'src/components/filterSection';
//=============================================
const EcommDeliveryReport = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================

    const itemDetail = (params) => {
        return (

            <Badge color="warning" badgeContent={4} sx={{
                ".MuiBadge-badge": {
                    color: "#28282B",

                    boxShadow: "0px 0px 5px 2px #644006"
                }
            }}>
                <Button
                    onClick={() => router.push(`/reports/e-comm/item-detail/?id=${params.id}`)}
                    sx={[theme.custom.editButton]}>
                    Item Details
                </Button>
            </Badge>
        );
    };

    const column = [
        {
            field: "id",
            headerName: "invoiceid",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "buy_rate",
            headerName: "buy_rate",
            flex: 1,
            minWidth: 100,
        },
    
        {
            field: "gold_weight",
            headerName: "gold_weight",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "transact_on",
            headerName: "transact_on",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "razorpay_id",
            headerName: "razorpay_id",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "settlement_status",
            headerName: "settlement_status",
            flex: 1,
            minWidth: 100,
        },
    
    ];
    
    const row = [
        {
            id: 1,
            buy_rate: 14,
            gold_weight: 14,
            transact_on: "02/14/10",
            razorpay_id: "id-786",
            settlement_status: "active",
    
    
        },
    ];
    

    const modal = (params) => {
        return (
            <ReportModal rows={row} columns={column}/>
        );
    };


    const columns = [

        {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <ul>
                    {params.row.ordered.map(x => (
                        <li>{x}</li>
                    ))}
                </ul>
            ),
        },

        {
            field: "order_delivered_to",
            headerName: "order_delivered_to",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "merchant",
            headerName: "merchant",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "item_detail",
            headerName: "item_detail",
            renderCell: itemDetail,
            flex: 1,
            minWidth: 150,
        },
        {
            field: "amount",
            headerName: "amount",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "tax",
            headerName: "tax",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "total",
            headerName: "total",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "shipping_chages",
            headerName: "shipping_chages",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "order_status",
            headerName: "order_status",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "docket_no",
            headerName: "docket_no",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "brn_no",
            headerName: "brn_no",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "redeem_gold",
            headerName: "redeem_gold",
            flex: 1,
            minWidth: 180,
            renderCell:modal
        },
        {
            field: "refund_amount",
            headerName: "refund_amount",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "package_image",
            headerName: "package_image",
            flex: 1,
            minWidth: 100,
            renderCell:(params)=>(
                <img width={100} src={params.row.package_image}/>
            )
        },
        {
            field: "shipping_docs",
            headerName: "shipping_docs",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "merchant_settlement_amount",
            headerName: "merchant_settlement_amount",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "amount_received_custodian",
            headerName: "amount_received_custodian",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "received_trans_status",
            headerName: "received_trans_status",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "settled_trans_status",
            headerName: "settled_trans_status",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "recieving_fund",
            headerName: "recieving_fund",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <ul>
                    {params.row.recieving_fund.map(x => (
                        <li>{x}</li>
                    ))}
                </ul>
            ),
        },
        {
            field: "transfer_fund",
            headerName: "transfer_fund",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <ul>
                    {params.row.transfer_fund.map(x => (
                        <li>{x}</li>
                    ))}
                </ul>
            ),
        },


    ];

    const rows = [
        {
            id: 1,
            ordered: ["item1", "item2", "item3"],
            order_delivered_to: "niuschal",
            merchant: "ankit",
            item_detail: "btn",
            amount: 12478,
            tax: 1078,
            total: 13556,
            shipping_chages: 147,
            order_status: "status",
            docket_no: "docket-478-99",
            brn_no: "brn-147-77",
            redeem_gold: "modal",
            refund_amount: 444,
            package_image: "https://static9.depositphotos.com/1669785/1150/i/600/depositphotos_11506024-stock-photo-package.jpg",
            shipping_docs: "view",
            merchant_settlement_amount: 245,
            amount_received_custodian: 5365,
            received_trans_status: "status",
            settled_trans_status: "status",
            recieving_fund: ["bankID", "amount", "bank_no","mode","to_bank"],
            transfer_fund: ["bankID", "amount", "bank_no"],
            flex: 1,
            minWidth: 100,
        },
    ];

    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Custody Given </title>
            </Head>
            <Grid container>
               <FilterSection/>
                {/* //------------------------------------------------------- */}
                <Box
                    sx={{
                        minWidth: "100%",
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
                            <GraphModal />
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

            </Grid>{' '}

            <div style={{ display: 'flex', minWidth: '100%' }}>
                <div style={{ flex: 1 }}>
                    <Table rows={rows} columns={columns} />
                </div>
            </div>

        </>
    );
};
//=============================================

EcommDeliveryReport.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default EcommDeliveryReport;
