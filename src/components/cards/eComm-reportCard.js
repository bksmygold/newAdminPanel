import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";
import { useTheme } from "@mui/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//=========================================================
export const EcommReportCard = (props) => {
    const router = useRouter()
    const theme = useTheme()
    //-------------------------------------------
    return (
        <Grid container sx={theme.custom.inventoryCard.bg}>
            <Grid item >
                <Typography sx={theme.custom.typography.inventoryCard.h2}>{props.subtitle}</Typography>
                <Typography sx={[theme.custom.typography.inventoryCard.h1,{textAlign:"center"}]}>{props.title} </Typography>

            </Grid>
        </Grid>
    );
}
