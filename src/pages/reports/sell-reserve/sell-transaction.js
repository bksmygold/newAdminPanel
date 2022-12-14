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
import GraphModal from 'src/components/modal/graphModal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
//=============================================
const buySaveReport = () => {
    const router = useRouter()
    const theme = useTheme()
    //====================================
    const columns = [
        {
            field: "id",
            headerName: "invoice_no",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.row.id}</p>
            ),
        },
        {
            field: "merchant",
            headerName: "merchant",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "gold_weight",
            headerName: "gold_weight",
            minWidth: 100,

            flex: 1
        },
        {
            field: "hsn_code",
            headerName: "hsn_code",
            minWidth: 100,

            flex: 1
        },
        {
            field: "transact_on",
            headerName: "transact_on",
            minWidth: 100,


            flex: 1
        },
      

    ];

    const rows = [
        {
            id: "invoice-147",
            merchant: "Merchant",
            gold_weight: 14,
            hsn_code: "hsn-code78",
            transact_on: "11/04/2014",
        },
    ];

    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Sell Reserve </title>
            </Head>



            <Grid container>
                <Grid item>
                    <Typography variant="h4" sx={theme.custom.typography.infoCard.h1}>Intrest Sell Transactions Details :</Typography>
                </Grid>
            </Grid>{' '}
            <Table
                rows={rows}
                columns={columns}
            />

        </>
    );
};
//=============================================

buySaveReport.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default buySaveReport;
