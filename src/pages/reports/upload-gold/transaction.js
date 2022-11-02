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
const UploadGoldTransactions = () => {
    const router = useRouter()
    const theme = useTheme()
    //=====================================


    const itemModal = (params) => {
        return (
            <CardModal uploadTransaction={itemRows} />
        );
    };

    //=============================

  
    const itemRows = [
        {
            id: 1,
            date_time: "14/07/1978 @17:05",
            rescheduled:"no",
            rescheduled_date_time:"14/07/1978 @17:05",
            customer:[{
                name:"Ankit",
                email:"email@email.com",
                phone:7392988698,
            }],
            merchant: "Alok",
            appointment_status:"active"
        },
    ];

    //=============================
    const columns = [
        {
            field: "appointment",
            headerName: "appointment",
            minWidth: 100,
            flex: 1,
            renderCell:itemModal
          

        },
        {
            field: "advanced_paid_invoice",
            headerName: "advanced_paid_invoice",
            minWidth: 100,
            flex: 1
        },
        {
            field: "advanced_return_invoice",
            headerName: "advanced_return_invoice",
            minWidth: 100,
            flex: 1,
        },
        {
            field: "custodian_invoice",
            headerName: "custodian_invoice",
            minWidth: 100,

            flex: 1
        },
        {
            field: "commission",
            headerName: "commission",
            minWidth: 100,

            flex: 1
        },
        {
            field: "city",
            headerName: "city",
            minWidth: 100,
            
            flex: 1
        },
        
        {
            field: "verification",
            headerName: "verification",
            minWidth: 100,
            flex: 1,
            renderCell: ()=>{
                return(
                    <Button sx={theme.custom.editButton} onClick={()=>router.push("/reports/upload-gold/verification")}>Details</Button>
                )
            }
        },

    ];

    const rows = [
        {
            id: 1,
            appointment: "button",
            advanced_paid_invoice: 11,
            advanced_return_invoice: 5,
            custodian_invoice:"button",
            commission:789,
            city:"Lucknow",
            verification:"Link"
        },
    ];
    //=================================================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Upload Gold Transaction </title>
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

UploadGoldTransactions.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default UploadGoldTransactions;
