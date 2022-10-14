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
import GraphModal from 'src/components/graphModal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
//=============================================
const buySaveReport = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================


    const transactionDetail = (params) => {
        return (
            <Button
                onClick={() =>
                    router.push(`/reports/buy-save/transaction/?id=${params.id}`)
                }
                sx={theme.custom.editButton}>
                Transction Details <MoreVertIcon />
            </Button>
        );
    };

    const columns = [

        {
            field: "plan_name",
            headerName: "plan_name",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.row.plan_name}</p>
            ),

        },
        {
            field: "taken_on",
            headerName: "taken_on",
            flex: 1,
            minWidth: 150,

        },
        {
            field: "mode",
            headerName: "mode",
            minWidth: 100,

            flex: 1
        },
        {
            field: "cycle_period",
            headerName: "cycle_period",
            minWidth: 100,

            flex: 1
        },
        {
            field: "duration",
            headerName: "duration",
            minWidth: 100,


            flex: 1
        },
        {
            field: "total_installments",
            headerName: "total_installments",
            minWidth: 100,

            flex: 1
        },
        {
            field: "custodian",
            headerName: "custodian",
            minWidth: 100,

            flex: 1
        },
        {
            field: "trans",
            headerName: "Transaction Detail",
            renderCell: transactionDetail,
            minWidth: 170,
            flex: 1
        },
    ];

    const rows = [
        {
            id: 2,
            plan_name: "Flexi",
            taken_on: "14/07/2013",
            mode: "weight",
            cycle_period: "every week",
            duration: 4,
            total_installments: 30,
            custodian: "BK Saraff",
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
