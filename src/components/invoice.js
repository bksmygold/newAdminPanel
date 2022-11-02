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
    Modal,
    Alert,
    Divider
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
import { useTheme } from "@mui/styles";
import Image from 'next/image'
import { invoice } from "src/constants/constant";

//=============================================
const Invoice = (props) => {
    const [res, setRes] = React.useState('')
    const [isOpen, setIsOpen] = React.useState(false)

    const theme = useTheme()


    //=============================================
    return (
        <>
            {/* //------------------------------------------------------- */}
            <Container sx={theme.custom.invoiceCard}>
                <Grid container>

                    <Grid
                        sx={{
                            padding: "2px 150px",
                            ml: 3,
                            minWidth: "100%",
                            p: 5,
                            height: "100%",
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                        item lg={6} sm={6} xs={12}>
                        <Image sx={{
                            ml: 5,
                        }} src="/logo.svg" alt="me" width="160" height="150" />
                        <Grid item
                            sx={{
                                padding: "2px 150px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >

                            <Typography

                                sx={theme.custom.typography.invoice.text_24}
                            >
                                Original Customer
                            </Typography>
                            <Image src="/qr.svg" alt="me" width="150" height="150" />
                        </Grid>

                    </Grid>

                    {/* <Divider sx={{backgroundColor:"red",height:100}} /> */}
                    <hr style={{ width: "80%", margin: "auto" }} />

                    <Typography
                        sx={[theme.custom.typography.invoice.text_24, {
                            padding: "2px 150px",
                        }]}

                    >
                        Tax Invoice
                    </Typography>

                    <Grid
                        sx={theme.custom.invoiceGridItem}
                        item lg={6} sm={6} xs={12}>
                        <Box>

                            <Typography
                                sx={theme.custom.typography.invoice.text_14.bold}

                            >
                                B K Saraf Private Limited
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_14.light}
                            >
                                M-13, Gole Market,
                                Mahanagar,
                                Lucknow,

                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_14.light}
                            >

                                Uttar Pradesh
                                226006
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "right" }}>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}
                            >
                                PAN No. : AAGCD1057K
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}
                            >
                                GSTIN : 27AAGCD1057K1ZL
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}
                            >
                                CIN No : U74999MH2017PTC293205
                            </Typography>
                        </Box>
                    </Grid>

                    <hr style={{ width: "80%", margin: "auto" }} />


                    <Grid
                        sx={theme.custom.invoiceGridItem}
                        item lg={6} sm={6} xs={12}>
                        <Box>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Date:
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                26-09-2022
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "right" }}>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Order:
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >

                                NX22082612442188209990081
                            </Typography>
                        </Box>
                    </Grid>

                    <hr style={{ width: "80%", margin: "auto" }} />



                    <Grid
                        sx={theme.custom.invoiceGridItem}
                        item lg={6} sm={6} xs={12}>
                        <Box>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Bill To:
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                Name : {props.invoice.fullName}

                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                Phone Number : {props.invoice.mobile}

                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                Email Id : {props.invoice.email}
                            </Typography>
                        </Box>

                    </Grid>



                    <Grid
                        sx={theme.custom.invoiceGridItem}
                        item lg={6} sm={6} xs={12}>
                        <Box>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Description
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                24K Gold

                            </Typography>
                        </Box>
                        <Box>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Grams*
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                0.0725
                            </Typography>
                        </Box>
                        <Box>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Rate per Gram
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                ₹ 5314.78
                            </Typography>
                        </Box>
                        <Box>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Total Amount
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >

                                ₹ 388.38
                            </Typography>
                        </Box>
                    </Grid>
                    <Typography
                        sx={[theme.custom.typography.invoice.text_12.light, {
                            padding: "2px 150px",
                        }]}

                    >

                        HSN Code : 71081300
                    </Typography>

                    <hr style={{ width: "80%", margin: "auto" }} />


                    <Grid
                        sx={{
                            padding: "2px 150px",

                            minWidth: "100%", p: 5, backgroundColor: "white", flexDirection: "column", display: "flex", justifyContent: "flex-end", alignItems: "flex-end"
                        }}
                        item lg={6} sm={6} xs={12}>
                        <Box sx={{
                            display: "flex", padding: "2px 150px",
                        }}>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Applied Tax (1.5% CGST + 1.5% SGST)
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                ₹ 11.45
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", margin: "20px 0px", padding: "2px 150px",
                        }}>

                            <Typography
                                sx={theme.custom.typography.invoice.text_12.bold}

                            >
                                Total Invoice Value
                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                ₹ 400.00
                            </Typography>
                        </Box>
                    </Grid>

                    <hr style={{ width: "80%", margin: "auto" }} />

                    <Typography
                        sx={[theme.custom.typography.invoice.text_12.bold, {
                            mt: 5, padding: "2px 150px",
                        }]}

                    >

                        Declaration :

                    </Typography>
                    <Typography
                        sx={[theme.custom.typography.invoice.text_12.light, {
                            padding: "2px 150px",
                        }]}

                    >


                        {invoice.declaration}

                    </Typography>

                    <Typography
                        sx={[theme.custom.typography.invoice.text_12.bold, {
                            mt: 5, padding: "2px 150px",
                        }]}

                    >

                        *Disclaimer :


                    </Typography>
                    <Typography
                        sx={[theme.custom.typography.invoice.text_12.light, {
                            padding: "2px 150px",
                        }]}

                    >

                        {invoice.disclaimer}
                    </Typography>
                    <Box sx={{
                        padding: "2px 150px",
                    }}>
                        <Typography
                            sx={[theme.custom.typography.invoice.text_12.light, { mt: 5 }]}
                        >
                            (E & O.E.)
                        </Typography>
                        <Typography
                            sx={theme.custom.typography.invoice.text_12.light}

                        >
                            (Subject to Realization)
                        </Typography>

                    </Box>
                    <hr style={{ width: "80%", margin: "auto" }} />


                </Grid>
                {/* ================================================================== */}
            </Container>
        </>
    );
};
//=============================================

Invoice.getLayout = (page) => (
    <FinancialsDashboardLayout>{page}</FinancialsDashboardLayout>
);

export default Invoice;
