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
const Invoice = () => {
    const [res, setRes] = React.useState('')
    const [isOpen, setIsOpen] = React.useState(false)

    const theme = useTheme()


    //=============================================
    return (
        <>
            {/* //------------------------------------------------------- */}
            <Container sx={{
                p: 10,
                // minWidth: "5%"
            }}>
                <Grid container sx={{
                    display: "flex", flexDirection: "column", p: 5, borderRadius: 5, boxShadow: '-3px 3px 4px -2px #d2c6c6',
                    border: '1px solid #d2c6c657',
                }}>

                    <Grid
                        sx={{ minWidth: "100%", p: 5, backgroundColor: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        item lg={6} sm={6} xs={12}>
                        <Image src="/logo.svg" alt="me" width="84" height="84" />
                        <Grid item
                            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                        >

                            <Typography

                                sx={theme.custom.typography.invoice.text_16}
                            >
                                Original Customer
                            </Typography>
                            <Image src="/qr.svg" alt="me" width="53" height="55" />
                        </Grid>

                    </Grid>

                    <Divider />
                    <Divider />

                    <Divider />

                    <Divider />

                    <Divider />


                    <Typography
                        sx={theme.custom.typography.invoice.text_24}

                    >
                        Tax Invoice
                    </Typography>

                    <Grid
                        sx={theme.custom.invoiceGrid}
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
                        <Box>
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

                    <Divider />
                    <Divider />


                    <Grid
                        sx={theme.custom.invoiceGrid}
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
                        <Box>

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

                    <Divider />
                    <Divider />


                    <Grid
                        sx={theme.custom.invoiceGrid}
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
                                Name : Suurya Prabhat

                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                Phone Number : 7673925340

                            </Typography>
                            <Typography
                                sx={theme.custom.typography.invoice.text_12.light}

                            >
                                Email Id : suuryaprabhat@gmail.com
                            </Typography>
                        </Box>

                    </Grid>



                    <Grid
                        sx={theme.custom.invoiceGrid}
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
                        sx={theme.custom.typography.invoice.text_12.light}

                    >

                        HSN Code : 71081300
                    </Typography>

                    <Divider />
                    <Divider />

                    <Grid
                        sx={{ minWidth: "100%", p: 5, backgroundColor: "white", flexDirection: "column", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}
                        item lg={6} sm={6} xs={12}>
                        <Box sx={{ display: "flex" }}>

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
                        <Box sx={{ display: "flex", margin: "20px 0px" }}>

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

                    <Divider />
                    <Divider />

                    <Typography
                        sx={[theme.custom.typography.invoice.text_12.bold, { mt: 5 }]}

                    >

                        Declaration :

                    </Typography>
                    <Typography
                        sx={theme.custom.typography.invoice.text_12.light}

                    >


                        {invoice.declaration}

                    </Typography>

                    <Typography
                        sx={[theme.custom.typography.invoice.text_12.bold, { mt: 5 }]}

                    >

                        *Disclaimer :


                    </Typography>
                    <Typography
                        sx={theme.custom.typography.invoice.text_12.light}

                    >

                        {invoice.disclaimer}
                    </Typography>
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
                    <Divider />
                    <Divider />

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
