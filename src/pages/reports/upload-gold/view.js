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
const UploadGoldReport = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================


    const itemModal = (params) => {
        return (
            <CardModal item={itemRows} />
        );
    };

    const linkButton = (params) => {
        return (
            <Button sx={theme.custom.editButton} onClick={()=>router.push("/reports/upload-gold/transaction")}>View Transaction</Button>
            
        );
    };
    //=============================

    const mediaRows = [
        {
            id: 1,
            purity: "scale",
            weight: "scale",
            flex: 1,
            minWidth: 100,
        },
    ];

    //=============================
    const itemColumns = [
        {
            field: "name",
            headerName: "name",
            flex: 1,
            minWidth: 100,

        },

        {
            field: "ntWt",
            headerName: "ntWt",
            minWidth: 100,
            flex: 1,
            renderCell: (params) => (
                <ul>
                    {params.row.details.map(x => (
                        <li>{x}</li>
                    ))}
                </ul>
            ),
        },
        {
            field: "photo",
            headerName: "photo",
            flex: 1,
            minWidth: 100,
            renderCell: (params) => (
                <img width={50} src={params.row.photo} />
            )

        },
        {
            field: "weight",
            headerName: "weight",
            flex: 1,
            minWidth: 100,

        },

    ];

    const itemRows = [
        {
            id: 1,
            name: "24kt bangles",
            details: ["style Name", "Pieces", "weight"],
            photo: "https://d2x02matzb08hy.cloudfront.net/img/accessory/hero_image/781212142/ACN032__4_.jpg",
            weight: 12,
        },
    ];

    //=============================
    const columns = [
        {
            field: "merchant",
            headerName: "merchant",
            minWidth: 100,
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.row.merchant}</p>
            ),

        },
        {
            field: "active_appointment",
            headerName: "active_appointment",
            minWidth: 100,

            flex: 1
        },
        {
            field: "cancelled_appointment",
            headerName: "cancelled_appointment",
            minWidth: 100,
            flex: 1,
        },
        {
            field: "verified_appointment",
            headerName: "verified_appointment",
            minWidth: 100,

            flex: 1
        },
        {
            field: "total_gold_weight",
            headerName: "total_gold_weight",
            minWidth: 100,

            flex: 1
        },
        {
            field: "total_gold_value",
            headerName: "total_gold_value",
            minWidth: 100,
            
            flex: 1
        },
        {
            field: "total_commission",
            headerName: "total_commission",
            minWidth: 100,
            
            flex: 1
        },
        {
            field: "view_appointment",
            headerName: "view_appointment",
            minWidth: 150,
            flex: 1,
            renderCell: linkButton
        },

    ];

    const rows = [
        {
            id: 1,
            merchant: "merchant",
            active_appointment: 11,
            cancelled_appointment: 5,
            verified_appointment: 6,
            total_gold_weight: 5,
            total_gold_value: 1100,
            total_commission:7896,
            view_appointment:"Link",
        },
    ];
    //=================================================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Upload Gold </title>
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

UploadGoldReport.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default UploadGoldReport;
