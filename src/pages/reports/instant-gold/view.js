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
import GraphModal from 'src/components/graphModal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
//=============================================
const instantGoldReport = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================


    const transactionDetail = (params) => {
        return (

            <Badge badgeContent={4} sx={{
                ".MuiBadge-badge": {
                    backgroundColor: '#dca539',
                    color: "#28282B",
                    // border:"2px solid #8b5704",
                    boxShadow:"0px 0px 5px 2px #644006"
                    // p: 1.2
                }
            }}>
                <Button
                    onClick={() => router.push(`/reports/instant-gold/transaction/?id=${params.id}`)}
                    sx={[theme.custom.editButton]}>
                    Transaction Details
                </Button>
            </Badge>
        );
    };

    const columns = [

        {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.row.name}</p>
            ),

        },
        {
            field: "email",
            headerName: "email",
            flex: 1,
            minWidth: 250,

        },
        {
            field: "phone",
            headerName: "phone",
            minWidth: 100,

            flex: 1
        },
        {
            field: "gold_saved",
            headerName: "gold_saved",
            minWidth: 100,

            flex: 1
        },

        {
            field: "transaction",
            headerName: "Transaction",
            renderCell: transactionDetail,
            minWidth: 190,
            flex: 1
        },
    ];

    const rows = [
        {
            id: 1,
            name: "Nischal",
            email: "gupta.nischal014@gmail.com",
            phone: 7392988369,
            gold_saved: 4.5,
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
          

            <div style={{ display: 'flex', minWidth: '100%' }}>
                <div style={{ flex: 1 }}>
                    <Table 
                    
                    rows={rows} columns={columns} />
                </div>
            </div>

        </>
    );
};
//=============================================

instantGoldReport.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default instantGoldReport;
