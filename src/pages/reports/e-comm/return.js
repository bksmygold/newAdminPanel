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
//=============================================
const returnEcommReport = () => {
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

    const mediaModal = (params) => {
        return (
            <ReportModal rows={mediaRow} columns={mediaColumn}/>
        );
    };
    const refundModal = (params) => {
        return (
            <ReportModal rows={refundRow} columns={refundColumn}/>
        );
    };





    const mediaColumn = [


        {
            field: "opening_video",
            headerName: "opening_video",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "re_order_packaging_photo",
            headerName: "re_order_packaging_photo",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "re_order_sequel_docs",
            headerName: "re_order_sequel_docs",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "re_order_sequel_agent_id",
            headerName: "re_order_sequel_agent_id",
            flex: 1,
            minWidth: 100,
        },
      
        
    ];

    const mediaRow = [
        {
            id: 1,
            opening_video: "video-link",
            re_order_packaging_photo: "image",
            re_order_sequel_docs: "docs",
            re_order_sequel_agent_id: "id",
        },
    ];


    const refundColumn = [


        {
            field: "amount_recieved",
            headerName: "amount_recieved",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "recieving_bank_no",
            headerName: "recieving_bank_no",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "mode_transfer",
            headerName: "mode_transfer",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "to_bank_details",
            headerName: "to_bank_details",
            flex: 1,
            minWidth: 100,
        },
      
        
    ];

    const refundRow = [
        {
            id: 1,
            amount_recieved: 1247,
            recieving_bank_no: "Bank-789",
            mode_transfer: "online",
            to_bank_details: "id",
        },
    ];
  

    const columns = [
        {
            field: "returned",
            headerName: "returned",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <ul>
                    {params.row.returned.map(x => (
                        <li>{x}</li>
                    ))}
                </ul>
            ),
        },

        {
            field: "address",
            headerName: "address",
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
            field: "refund_amount",
            headerName: "refund_amount",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "sale_return_invoice",
            headerName: "sale_return_invoice",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "media",
            headerName: "media",
            flex: 1,
            minWidth: 200,
            renderCell:mediaModal
        },
        {
            field: "return_order_status",
            headerName: "return_order_status",
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
            field: "re_order_id",
            headerName: "re_order_id",
            flex: 1,
            minWidth: 100,
        },
      
        {
            field: "re_order_delivery_status",
            headerName: "re_order_delivery_status",
            flex: 1,
            minWidth: 100,
        },
        
        {
            field: "refund_status",
            headerName: "refund_status",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "refund_amount_transaction",
            headerName: "refund_amount_transaction",
            flex: 1,
            minWidth: 200,
            renderCell:refundModal
        },
        
    ];

    const rows = [
        {
            id: 1,
            returned: ["item", "item2", "item3"],
            merchant: "ankit",
            address: "address hoga yaha pe",
            item_detail: "btn",
            refund_amount: 12478,
            sale_return_invoice:"invoice-235-88",
            media:"btn",
            return_order_status:"status",
            docket_no: "docket-478-99",
            brn_no: "brn-147-77",
            re_order_id: "id",
            re_order_delivery_status:"status",
            refund_amount: 444,
            refund_status:"status",
            refund_amount_transaction:"modal",
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
                <Grid
                    container
                    spacing={1}
                    sx={{

                        minWidth: "100%",
                        borderRadius: 2,
                        // backgroundColor: "pink",
                        mt: 10,
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
                            alignItems: "center",

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

returnEcommReport.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default returnEcommReport;
