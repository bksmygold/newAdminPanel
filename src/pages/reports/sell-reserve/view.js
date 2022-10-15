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
//=============================================
const sellReserveReport = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================
    const buyReservedTrans = (params) => {
        return (
            <Badge badgeContent={4} sx={{
                ".MuiBadge-badge": {
                    backgroundColor: '#dca539',
                    color: "#28282B",
                    boxShadow: "0px 0px 5px 2px #644006"
                }
            }}>
                <Button
                    onClick={() => router.push(`/reports/sell-reserve/buy-reserved-transaction/?id=${params.id}`)}
                    sx={[theme.custom.editButton]}>
                    Show Details
                </Button>
            </Badge>
        );
    };
    const sellTrans = (params) => {
        return (
            <Badge badgeContent={4} sx={{
                ".MuiBadge-badge": {
                    backgroundColor: '#dca539',
                    color: "#28282B",
                    boxShadow: "0px 0px 5px 2px #644006"
                }
            }}>
                <Button
                    onClick={() => router.push(`/reports/sell-reserve/sell-transaction/?id=${params.id}`)}
                    sx={[theme.custom.editButton]}>
                    Show Details
                </Button>
            </Badge>
        );
    };
    const columns = [
        {
            field: "purchase_invoice_no",
            headerName: "purchase_invoice_no",
            flex: 1,
            minWidth: 140,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.row.purchase_invoice_no}</p>
            ),
        },
        {
            field: "name",
            headerName: "name",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "email",
            headerName: "email",
            minWidth: 100,

            flex: 1
        },
        {
            field: "phone",
            headerName: "phone",
            minWidth: 100,

            flex: 1
        },
        {
            field: "gold_sell_weight",
            headerName: "gold_sell_weight",
            minWidth: 100,


            flex: 1
        },
        {
            field: "sell_rate",
            headerName: "sell_rate",
            minWidth: 100,

            flex: 1
        },
        {
            field: "interest",
            headerName: "interest",
            minWidth: 100,

            flex: 1
        },
        {
            field: "reserved_month",
            headerName: "reserved_month",
            minWidth: 100,

            flex: 1
        },
        {
            field: "monthly_interest",
            headerName: "monthly_interest",
            minWidth: 100,

            flex: 1
        },
        {
            field: "interest_sell_transaction",
            headerName: "interest_sell_transaction",
            renderCell:sellTrans,
            minWidth: 250,

            flex: 1
        },
        {
            field: "custodian",
            headerName: "custodian",
            minWidth: 100,

            flex: 1
        },
        {
            field: "buy_rate_fixed",
            headerName: "buy_rate_fixed",
            minWidth: 100,

            flex: 1
        },
        {
            field: "buy_reserved_transction",
            headerName: "buy_reserved_transction",
            renderCell:buyReservedTrans,
            minWidth: 250,
            flex: 1
        },
        {
            field: "status",
            headerName: "status",
            minWidth: 100,

            flex: 1
        },

    ];
    const rows = [
        {
            id: 1,
            name: "Nischal",
            email: "gupta.nischal014@gmail.com",
            phone: 7392988369,
            purchase_invoice_no:"invoice-11-78",
            gold_sell_weight: 4.5,
            sell_rate:14,
            interest:14,
            reserved_month:12,
            monthly_interest:14,
            interest_sell_transaction:"btn",
            custodian:"merchant",
            buy_rate_fixed:14,
            last_date:"14/07/2013",
            status:"active",
            buy_reserved_transction:"btn",
            flex: 1,
            minWidth: 100,
        },
    ];

    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Sell Reserve </title>
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

sellReserveReport.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default sellReserveReport;
