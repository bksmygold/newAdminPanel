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
const CustomerReferralReports = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================


    const itemModal = (params) => {
        return (
            <CardModal item={itemRows} />
        );
    };

    const mediaModal = (params) => {
        return (
            <CardModal data={mediaRows}/>
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
            minWidth: 50,

        },

    ];

    const itemRows = [
        {
            id: 1,
            name: "24kt bangles",
            details: ["style Name", "Pieces", "weight"],
            photo: "https://d2x02matzb08hy.cloudfront.net/img/accessory/hero_image/781212142/ACN032__4_.jpg",
            weight: 12,
            flex: 1,
            minWidth: 100,
        },
    ];

    //=============================
    const columns = [
        {
            field: "appointment_data_time",
            headerName: "appointment_data_time",
            flex: 1,
            minWidth: 250,

        },
        {
            field: "appointment_rescheduled",
            headerName: "appointment_rescheduled",
            minWidth: 250,

            flex: 1
        },
        {
            field: "appointment_rescheduled_time",
            headerName: "appointment_rescheduled_time",
            minWidth: 250,

            flex: 1
        },
        {
            field: "customer",
            headerName: "customer",
            minWidth: 250,


            flex: 1
        },
        {
            field: "merchant",
            headerName: "merchant",
            minWidth: 250,

            flex: 1
        },
        {
            field: "appointment_status",
            headerName: "appointment_status",
            minWidth: 250,

            flex: 1
        },
        {
            field: "item_details",
            headerName: "item_details",
            minWidth: 250,
            flex: 1,
            renderCell: itemModal
        },
        {
            field: "ntWt",
            headerName: "ntWt",
            minWidth: 250,

            flex: 1
        },
        {
            field: "purity",
            headerName: "purity",
            minWidth: 250,

            flex: 1
        },
        {
            field: "media",
            headerName: "media",
            minWidth: 250,
            flex: 1,
            renderCell: mediaModal
        },
        {
            field: "sell_rate",
            headerName: "sell_rate",
            minWidth: 250,

            flex: 1
        },
        {
            field: "amount_before_melting",
            headerName: "amount_before_melting",
            minWidth: 250,

            flex: 1
        },
        {
            field: "amount_after_melting",
            headerName: "amount_after_melting",
            minWidth: 250,

            flex: 1
        },
        {
            field: "sealed_bag_photo",
            headerName: "sealed_bag_photo",
            minWidth: 250,

            flex: 1
        },
        {
            field: "verified_by",
            headerName: "verified_by",
            minWidth: 250,

            flex: 1
        },
        {
            field: "purchase_invoice",
            headerName: "purchase_invoice",
            minWidth: 250,

            flex: 1
        },
        {
            field: "advance_paid_invoice",
            headerName: "advance_paid_invoice",
            minWidth: 250,

            flex: 1
        },
        {
            field: "advance_return_invoice",
            headerName: "advance_return_invoice",
            minWidth: 250,

            flex: 1
        },
        {
            field: "opted_upload",
            headerName: "opted_upload",
            minWidth: 250,

            flex: 1
        },
        {
            field: "upload_gold_details",
            headerName: "upload_gold_details",
            minWidth: 250,

            flex: 1
        },
        {
            field: "commission",
            headerName: "commission",
            minWidth: 250,

            flex: 1
        },
        {
            field: "city_request",
            headerName: "city_request",
            minWidth: 250,

            flex: 1
        },

    ];

    const rows = [
        {
            id: 1,
            appointment_data_time: "date/time",
            appointment_rescheduled: "yes",
            appointment_rescheduled_time: "date/time",
            customer: "Nischal",
            merchant: "merchant",
            appointment_status: "status",
            item_details: "modal",
            ntWt: 545,
            purity: 77,
            media: "modal",
            sell_rate: .21,
            amount_before_melting: 124,
            amount_after_melting: 124,
            sealed_bag_photo: "image",
            verified_by: "details",
            purchase_invoice: "invoice-786",
            advance_paid_invoice: "invoice-786",
            advance_return_invoice: "invoice-786",
            opted_upload: "yes",
            upload_gold_details: "details",
            commission: 21,
            city_request: "lko",
            flex: 1,
            minWidth: 100,
        },
    ];
    //=================================================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Sell Old Gold </title>
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

CustomerReferralReports.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default CustomerReferralReports;
