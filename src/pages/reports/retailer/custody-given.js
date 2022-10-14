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
//=============================================
const custodyGiven = () => {

    const theme = useTheme()
    //=====================================

    const checkInvoice = (params) => {
        return (
            <Button
                sx={theme.custom.editButton}
            >
                More Details
            </Button>
        );
    };
    const columns = [
        {
            field: "sale_invoice_number",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
            minWidth: 120,

        },
        {
            field: "merchant",
            headerName: "Merchant",
            flex: 1,
            minWidth: 100,

        },
        {
            field: "customer",
            headerName: "customer",
            flex: 1,
            minWidth: 100,

        },
        {
            field: "total_custody_given",
            headerName: "total_custody_given",
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
            field: "buy_rate",
            headerName: "buy_rate",
            minWidth: 100,


            flex: 1
        },
        {
            field: "purchased_on",
            headerName: "purchased_on",
            minWidth: 100,

            flex: 1
        },
        {
            field: "view_custody",
            headerName: "view_custody",
            minWidth: 100,
            flex: 1
        },
        {
            field: 'delete',
            headerName: 'Delete',
            renderCell: checkInvoice,
            minWidth: 150,
            flex: 1,
        },
    ];

    const rows = [
        {
            id: 1,
            customer: "Nischal",
            total_custody_given: 111,
            weight: 1,
            sale_invoice_number: 132,
            merchant: "Merchant",
            purchased_on: "15/07/2013",
            buy_rate: 4.5,
            view_custody: "btn",
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
                    <Typography variant="h4" sx={theme.custom.typography.infoCard.h1}>Custody Given :</Typography>
                </Grid>
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

custodyGiven.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default custodyGiven;
