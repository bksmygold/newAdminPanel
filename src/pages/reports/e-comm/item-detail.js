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
const itemDetail = () => {
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
                    onClick={() => router.push(`/reports/buy-save/plan/?id=${params.id}`)}
                    sx={[theme.custom.editButton]}>
                    Item Details
                </Button>
            </Badge>
        );
    };

    const columns = [

        {
            field: "id",
            headerName: "id",
            flex: 1,
            minWidth: 100,
        },

        {
            field: "desc",
            headerName: "desc",
            flex: 1,
            minWidth: 400,
            renderCell: (cellValues) => {
                return (
                    <TextField
                        sx={{ width:"100%",fontSize:2 }}
                        value={cellValues.row.desc}
                        multiline
                    />
                )
            }
        },
        {
            field: "hsn",
            headerName: "hsn",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "quantity",
            headerName: "quantity",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "sell_rate",
            headerName: "sell_rate",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "cgst",
            headerName: "cgst",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "sgst",
            headerName: "sgst",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "igst",
            headerName: "igst",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "total",
            headerName: "total",
            flex: 1,
            minWidth: 100,
        },


    ];

    const rows = [
        {
            id: 1,
            desc: "item descriptions hai jo ki bada long bhi ho sakta hai ya to kuch chota bhi ho sakta hai, it depends",
            hsn: "hsn-1414-47",
            quantity: 12,
            sell_rate: 5478,
            cgst: 13,
            sgst: 13,
            igst: 13,
            total: 32548,
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
                    <Table rows={rows} columns={columns} />
                </div>
            </div>

        </>
    );
};
//=============================================

itemDetail.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default itemDetail;
