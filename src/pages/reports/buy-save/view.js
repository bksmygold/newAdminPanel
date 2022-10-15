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
const buySaveReport = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================


    const planDetail = (params) => {
        return (

            <Badge color="warning" badgeContent={4} sx={{
                ".MuiBadge-badge": {
                    color: "#28282B",
                    
                    boxShadow:"0px 0px 5px 2px #644006"

                }
            }}>
                <Button
                    onClick={() => router.push(`/reports/buy-save/plan/?id=${params.id}`)}
                    sx={[theme.custom.editButton]}>
                    Plan Details
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
            field: "gold_hold",
            headerName: "gold_hold",
            minWidth: 100,


            flex: 1
        },
        {
            field: "gold_matured",
            headerName: "gold_matured",
            minWidth: 100,

            flex: 1
        },
        {
            field: "plans",
            headerName: "plans",
            renderCell: planDetail,
            minWidth: 120,
            flex: 1
        },
    ];

    const rows = [
        {
            id: 1,
            name: "Nischal",
            email: "nischal.gupota@gmail.com",
            phone: 7392988369,
            gold_saved: 4.5,
            gold_hold: 4.2,
            gold_matured: 0.3,
            plans: "btn",
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
                <Grid
                    container
                    spacing={1}
                    sx={{

                        minWidth: "100%",
                        borderRadius: 2,
                        // backgroundColor: "pink",
                        mt: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                        // boxShadow: "0px 4px 1px 0px #d2c6c6",
                    }}
                >
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="Merchant" />
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="Customer" />
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="HSN Codes" />
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        item
                        lg={3} sm={6} xl={3} xs={12}>
                        <CustomTextField label="Settlement Status" />
                    </Grid>

                </Grid >
                {/* //------------------------------------------------------- */}
                <Box
                    sx={{
                        minWidth: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        borderRadius: 2,
                        marginTop: 5,
                        boxShadow: "0px 4px 1px 0px #d2c6c6",
                        padding: 5,
                    }}
                >
                    <Grid container spacing={3}>
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

buySaveReport.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default buySaveReport;
