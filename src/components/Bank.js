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
const Bank = (props) => {
    const [res, setRes] = React.useState('')
    const [isOpen, setIsOpen] = React.useState(false)

    const theme = useTheme()


    //=============================================
    return (
        <>
            {/* //------------------------------------------------------- */}
            <Container sx={{display:"flex",justifyContent:"center"}}>
                <Grid container sx={{
                    backgroundColor: "white", 
                    borderRadius: 2, 
                    p: 2,
                    width: "fit-content",
                    textAlign:"center"
                }}>

                    <Grid item sm={12}>
                        <Typography sx={theme.custom.typography.invoice.text_24}>Bank Name</Typography>
                        <Typography sx={theme.custom.typography.invoice.text_16}>{props.bank.bankName}</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography sx={theme.custom.typography.invoice.text_24}>Account Number</Typography>
                        <Typography sx={theme.custom.typography.invoice.text_16}>{props.bank.accountNo}</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography sx={theme.custom.typography.invoice.text_24}>Branch</Typography>
                        <Typography sx={theme.custom.typography.invoice.text_16}>{props.bank.branch}</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography sx={theme.custom.typography.invoice.text_24}>IFSC code</Typography>
                        <Typography sx={theme.custom.typography.invoice.text_16}>{props.bank.ifsc}</Typography>
                    </Grid>
                </Grid>
                {/* ================================================================== */}
            </Container>
        </>
    );
};
//=============================================

Bank.getLayout = (page) => (
    <FinancialsDashboardLayout>{page}</FinancialsDashboardLayout>
);

export default Bank;
