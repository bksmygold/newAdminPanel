import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";
import { useTheme } from "@mui/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//=========================================================
export const RetailCard = (props) => {
    const router = useRouter()
    const theme = useTheme()
    //-------------------------------------------
    return (
        <Grid container sx={theme.custom.retailCard.bg}>
            <Grid item >
                <Typography sx={theme.custom.typography.retailCard.h1}>{props.title} </Typography>
                <Typography sx={theme.custom.typography.retailCard.h2}>
                    {props.title === "Commission Earned" ? `₹ ${props.stats}`
                        : props.title === "Cash Settled To Retailer" ? `₹ ${props.stats}`
                            : props.title === "Gold Reserved By Retailer" ? ` ${props.stats} GRAM` : props.stats}
                </Typography>
                <Typography sx={theme.custom.typography.retailCard.h3}>+{props.perStats} (+0.50%) </Typography>

            </Grid>
        </Grid>
    );
}
