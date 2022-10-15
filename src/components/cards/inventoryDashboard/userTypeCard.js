import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";
import { useTheme } from "@mui/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//=========================================================
export const UserTypeCard = (props) => {
    const router = useRouter()
    const theme = useTheme()
    //-------------------------------------------
    return (
        <Grid onClick={props.onClick} container sx={props.clicked ? theme.custom.inventoryCard.selectedBg : theme.custom.inventoryCard.bg}>
            <Grid item  >
                <Typography
                    sx={props.clicked ? theme.custom.typography.inventoryCard.selectedH1 : theme.custom.typography.inventoryCard.h1}>
                    {props.title}
                </Typography>
                <Typography sx={props.clicked ? theme.custom.typography.inventoryCard.selectedH2 : theme.custom.typography.inventoryCard.h2}>
                    {props.stats}
                    <span
                        style={props.clicked ? theme.custom.typography.inventoryCard.selectedSpan : theme.custom.typography.inventoryCard.span}>
                        GRAM
                    </span>
                </Typography>
            </Grid>
        </Grid >
    );
}
