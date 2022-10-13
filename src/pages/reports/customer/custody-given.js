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
    Button
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
//=============================================
const custodyGiven = () => {

    const theme = useTheme()

    const reportsQuery = useQuery({
        queryKey: "BuySave-Reports",
        queryFn: () => getBuySaveReport()
    })


    console.log("reports ---", reportsQuery)
    //=====================================
    const checkCustodian = (params) => {
        return (
            <strong>
                <Button
                    sx={theme.custom.editButton}
                >
                    Check Custodians
                </Button>
            </strong>
        );
    };
    //==========
    const checkInvoice = (params) => {
        return (
            <Button
                sx={theme.custom.editButton}
            >
                Check Sale Invoices
            </Button>
        );
    };
    const columns = [
        {
            field: "sale_invoice_number",
            headerName: "Invoice Number",
            flex: 1,
            renderCell: (params) => (
                <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
            ),
        },
        {
            field: "merchant",
            headerName: "Merchant",
            flex: 1
        },
        {
            field: "name",
            headerName: "name",
            flex: 1
        },
        {
            field: "total_custody_given",
            headerName: "total_custody_given",
            flex: 1
        },
        {
            field: "weight",
            headerName: "weight",
            flex: 1
        },
        {
            field: "purchased_on",
            headerName: "purchased_on",
            flex: 1
        },
        {
            field: 'delete',
            headerName: 'Delete',

            editable: true,
            renderCell: checkInvoice,
            flex: 2,
            minWidth: "10%"
        },


    ];

    const rows = [
        {
            id: 1,
            name: "Nischal",
            total_custody_given:111,
            weight:1,
            sale_invoice_number:132,
            merchant:"Merchant",
            purchased_on:"15/07/2013",
            rate:4.5,
            flex: 1,
            minWidth: 100,
        },

    ];


    //=============================================
    return (
        <>
            {/* //------------------------------------------------------- */}
            <Container
                fullWidth
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: 5,
                    minWidth: "100%",
                }}
            >
                <Typography variant="h4" sx={theme.custom.typography.infoCard.h1}>Custody Given To User :</Typography>
                {/* <Grid
                    container
                    spacing={1}
                    sx={{

                        minWidth: "100%",
                        borderRadius: 2,
                        // backgroundColor: "pink",
                        mt: 1,
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
                            alignItems: "center"
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

                </Grid > */}
                {/* //------------------------------------------------------- */}
                


                <Table
                    sx={{
                        padding: 5,
                        borderRadius: 2,
                        boxShadow: "0px 4px 1px 0px #d2c6c6",
                        marginTop: "500px",

                        //   backgroundColor: "#e8d8c0",
                    }}

                    rows={rows}
                    columns={columns}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                    }
                />
                {/* //------------------------------------------------------- */}
            </Container>
        </>
    );
};
//=============================================

custodyGiven.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default custodyGiven;
