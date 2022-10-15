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
import { InfoCard } from 'src/components/cards/infoCard';
import { InventoryCard } from 'src/components/cards/inventoryDashboard/custodianCard';
import { EcommReportCard } from 'src/components/cards/eComm-reportCard';
//=============================================
const eCommView = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================

    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Custody Given </title>
            </Head>

            <Grid container sx={{ minWidth: "100%", mt: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Grid item lg={6} sm={12}
                    sx={{ cursor: "pointer" }}
                    onClick={() => router.push("/reports/e-comm/delivery")}
                >
                    <EcommReportCard

                        title="See all the delivery related reports in one place, else go to somewhere else"
                        subtitle="E-commerce Delivery Module"
                    />
                </Grid>
                <Grid item lg={6} sm={12}
                    sx={{ cursor: "pointer" }}
                    onClick={() => router.push("/reports/e-comm/return")}
                >
                    <EcommReportCard
                        title="See all the delivery related reports in one place, else go to somewhere else"
                        subtitle="E-commerce Return Module"
                    />
                </Grid>
            </Grid>

        </>
    );
};
//=============================================

eCommView.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default eCommView;
