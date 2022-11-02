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
import CardModal from 'src/components/modal/cardModal';
import FilterSection from 'src/components/filterSection';
//=============================================
const subscriptions = () => {

    const itemModal = (params) => {
        return (
            <CardModal sub={itemRows} />
        );
    };

    const itemRows = [
        {
            id: 1,
            amount_paid: 52247,
            razorpay_fees: 102,
            settled_amount: 17,
            settled_on: "14/07/1995",
            transaction_on: "10/07/1995",
            flex: 1,
            minWidth: 100,
        },
    ];

    //=============================
    const columns = [
        {
            field: "name",
            headerName: "name",
            flex: 1,
            minWidth: 250,
        },

        {
            field: "email",
            headerName: "email",
            minWidth: 250,

            flex: 1
        },
        {
            field: "phone",
            headerName: "phone",
            minWidth: 250,

            flex: 1
        },
        {
            field: "subscribed_to",
            headerName: "subscribed_to",
            minWidth: 250,


            flex: 1
        },
        {
            field: "amount",
            headerName: "amount",
            minWidth: 250,

            flex: 1
        },
        {
            field: "renewal",
            headerName: "renewal",
            minWidth: 250,

            flex: 1
        },

        {
            field: "status",
            headerName: "status",
            minWidth: 250,

            flex: 1
        },

        {
            field: "transactions",
            headerName: "transactions",
            minWidth: 250,
            flex: 1,
            renderCell: itemModal
        },



    ];

    const rows = [
        {
            id: 1,
            name: "nischal",
            email: "gupta.nischal014@gmail.com",
            phone: 7392988369,
            subscribed_to: "Bk saraff",
            amount: 457,
            status: "active",
            renewal: "02/05/2024",
            transactions: 147,
        }
    ];
    //=================================================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Bids-Subscriptions</title>
            </Head>
            <Grid container>
                <FilterSection />
                {/* //------------------------------------------------------- */}
                <Box
                    sx={{
                        minWidth: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        borderRadius: 2,
                        marginTop: 5,
                        boxShadow: "0px 4px 1px 0px #d2c6c6",
                        padding: 1,
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={1}>
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

subscriptions.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default subscriptions;
