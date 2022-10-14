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
import GraphModal from "src/components/graphModal";
//=============================================
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const saleInvoice = () => {

    const theme = useTheme()
    const reportsQuery = useQuery({
        queryKey: "BuySave-Reports",
        queryFn: () => getBuySaveReport()
    })
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
            field: "firstName",
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
            field: "customer",
            headerName: "Customer",
            flex: 1
        },
        {
            field: "itemId",
            headerName: "Item ID",
            flex: 1
        },
        {
            field: "desc",
            headerName: "Description",
            flex: 1
        },
        {
            field: "gram",
            headerName: "Gram",
            flex: 1
        },
        {
            field: "rate",
            headerName: "Rate",
            flex: 1
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1
        },
        {
            field: "hsnCode",
            headerName: "HSN Code",
            flex: 1
        },
        {
            field: "cgst",
            headerName: "CGST",
            flex: 1
        },
        {
            field: "sgst",
            headerName: "SGST",
            flex: 1
        },
        {
            field: "igst",
            headerName: "IGST",
            flex: 1
        },
        {
            field: "total",
            headerName: "Total",
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
            merchant: "Nischal",
            customer: "Ankit",
            itemId: "11-874",
            desc: "some kind of ramdom descriptions",
            gram: "14 gm",
            rate: 4.5,
            amount: 5478,
            hsnCode: "HSN-2568-774",
            cgst: 18,
            sgst: 18,
            igst: 17,
            total: 7899,
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
                <Grid
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

                </Grid >
                {/* //------------------------------------------------------- */}
                <Box
                    sx={{
                        // width: "95%",
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

                            <GraphModal
                                // data={data}
                            />

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
                    {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
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
          </Grid> */}
                </Box>


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

saleInvoice.getLayout = (page) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default saleInvoice;
