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
            field: "sale_purchase_invoice_no",
            headerName: "sale_purchase_invoice_no",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.row.sale_purchase_invoice_no}</p>
            ),
        },
        {
            field: "sale_purchase_invoice",
            headerName: "sale_purchase_invoice",
            flex: 1,
            minWidth: 150,

        },
        {
            field: "certificate",
            headerName: "certificate",
            minWidth: 100,

            flex: 1
        },
        {
            field: "transact_on",
            headerName: "transact_on",
            minWidth: 100,

            flex: 1
        },
        {
            field: "rate",
            headerName: "rate",
            minWidth: 100,


            flex: 1
        },
        {
            field: "weight",
            headerName: "weight",
            minWidth: 100,

            flex: 1
        },
        {
            field: "gst",
            headerName: "gst",
            minWidth: 100,

            flex: 1
        },
        {
            field: "total",
            headerName: "total",
            minWidth: 100,

            flex: 1
        },
        {
            field: "commission",
            headerName: "commission",
            minWidth: 100,

            flex: 1
        },
        {
            field: "merchant_payment",
            headerName: "merchant_payment",
            minWidth: 100,

            flex: 1
        },
        {
            field: "payment_type",
            headerName: "payment_type",
            minWidth: 100,

            flex: 1
        },

    ];

    const rows = [
        {
            id: 1,
            sale_purchase_invoice: "show invoice",
            sale_purchase_invoice_no: "invoice-147",
            certificate: "given/released",
            transact_on: "11/04/2014",
            rate: 4,
            weight: 11,
            gst: 4,
            total: 3140,
            commission: 314,
            merchant_payment: 1478,
            payment_type: "Release",
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
                <Grid item>
                    <Typography variant="h4" sx={theme.custom.typography.infoCard.h1}>Plan Details :</Typography>
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
