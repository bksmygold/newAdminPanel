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
const UploadGoldVerification = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================


    const itemModal = (params) => {
        return (
            <CardModal itemDetail={itemDetail} />
        );
    };

    //=============================

  
    const itemDetail = [
        {
            id: 1,
            item_name:"24 KT Bangles",
            details: [{
                styleName:"Apsaara",
                pieces:4,
                weight:9

            }],
            photo:"https://staticimg.titan.co.in/Tanishq/Catalog/513820VAD2A00_1.jpg",
            gross_weight:12
          
        },
    ];


    const verifiedModal = (params) => {
        return (
            <CardModal verifiedDetail={verifiedDetail} />
        );
    };
    //=============================

  
    const verifiedDetail = [
        {
            id: 1,
            verified_by:"Jagannath Shri",
            captain:"Aman",
            manager:"Sachin",
            guard:"ankit",
            vehicle_no:"UP 32 0369",
        },
    ];


    const mediaModal = (params) => {
        return (
            <CardModal data={mediaDetail    } />
        );
    };

    //=============================

  
    const mediaDetail = [
        {
            id: 1,
            purity:"Purity Scale",
            weight:"Weight Scale"
          
        },
    ];
    //=============================
    const columns = [
        {
            field: "item_details",
            headerName: "item_details",
            minWidth: 100,
            flex: 1,
            renderCell:itemModal
          

        },
        {
            field: "net_weight_after",
            headerName: "net_weight_after",
            minWidth: 100,
            flex: 1
        },
        {
            field: "purity",
            headerName: "purity",
            minWidth: 100,
            flex: 1,
        },
        {
            field: "media",
            headerName: "media",
            renderCell:mediaModal,

            minWidth: 100,

            flex: 1
        },
        {
            field: "gross_weight_before",
            headerName: "gross_weight_before",
            minWidth: 100,

            flex: 1
        },
        {
            field: "net_weight_before",
            headerName: "net_weight_before",
            minWidth: 100,
            
            flex: 1
        },
        {
            field: "declared_tax",
            headerName: "declared_tax",
            minWidth: 100,
            
            flex: 1
        },
        {
            field: "upload_gold_weight",
            headerName: "upload_gold_weight",
            minWidth: 100,
            
            flex: 1
        },
        {
            field: "sealed_bag",
            headerName: "sealed_bag",
            minWidth: 100,
            
            flex: 1
        },
        
        {
            field: "verified_by",
            headerName: "verified_by",
            minWidth: 100,
            flex: 1,
            renderCell: verifiedModal
        },

    ];

    const rows = [
        {
            id: 1,
            item_details: "button",
            net_weight_after: 11,
            purity: 95,
            media:"button",
            gross_weight_before:54,
            net_weight_before:54,
            declared_tax:7890,
            upload_gold_weight:54,
            sealed_bag:"image",
            verified_by:"button",

        },
    ];
    //=================================================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Upload Gold Verification</title>
            </Head>
            <Typography sx={{mt:5,ml:3,color:"black"}}> View Transaction Details</Typography>
            <div style={{ display: 'flex', minWidth: '100%' }}>
                <div style={{ flex: 1 }}>
                    <Table rows={rows} columns={columns} />
                </div>
            </div>

        </>
    );
};
//=============================================

UploadGoldVerification.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default UploadGoldVerification;
