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
import { InfoCard } from 'src/components/cards/infoCard';
import { InventoryCard } from 'src/components/cards/inventoryDashboard/custodianCard';
import { EcommReportCard } from 'src/components/cards/eComm-reportCard';
//=============================================
const bidBuySell = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================
    const referralList = [
        {
            title: "Subscriptions",
            sub: "Subscriptions related content, ask for the content writer to add some content here",
            url: '/reports/bid-buy-sell/subscription'
        },
        {
            title: "Bids",
            sub: "Bids related content, ask for the content writer to add some content here",
            url: '/reports/bid-buy-sell/bids'
        },
  
    ]
    //=====================================

    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Custody Given </title>
            </Head>

            <Grid spacing={2} container sx={{ mt: 5, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                {referralList.map(x => (

                    <Grid item lg={6} md={6} xs={12} sm={6}
                        sx={{ cursor: "pointer" }}
                        onClick={()=>router.push(x.url)}
                    >
                        <Container sx={{width:"80%", boxShadow: '0px 3px 4px 0px #b9b3a3',backgroundColor:"#FDFAF2", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "60%", textAlign: "center", height: "20vh" }}>
                                <Typography
                                    variant="h6"
                                    sx={theme.custom.typography.inventoryCard.h2}
                                >
                                    {x.title}
                                </Typography>

                                <p style={{ color: "black", fontWeight: 500 }}>
                                    {x.sub}
                                </p>
                            </Box>
                        </Container>
                    </Grid>

                ))}

            </Grid>

        </>
    );
};
//=============================================

bidBuySell.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default bidBuySell;
