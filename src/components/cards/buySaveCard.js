import { Avatar, Box, Card, CardContent, Grid, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";
import { useTheme } from "@mui/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';

//=========================================================
export const BuySaveCard = (props) => {
    const router = useRouter()
    const theme = useTheme()
    //-------------------------------------------
    return (
        <Grid container sx={[theme.custom.buySaveCard.bg,{marginRight:5}]} >   
            <Grid
                item
                sx={{ minWidth: "100%" }}
            >
                <Typography sx={[theme.custom.typography.retailCard.h1,{textAlign:"center"}]}>{props.name}</Typography>
                <Typography sx={[theme.custom.typography.retailCard.h2,{textAlign:"center"}]}>
                    {props.value} %
                </Typography>
                <Box 
                sx={{ display: 'flex', justifyContent: "space-evenly" }}
                >
                    {/* <Button sx={[theme.custom.Button]} >Add  <AddIcon sx={theme.custom.editButton.iconStyle}/></Button> */}
                    <Button onClick={()=>{
                        props.setShowEdit(true),
                        // console.log("=======-->",props.data);
                        props.formik.setValues(props.data)


                        
                        }} sx={[theme.custom.Button]} >Edit <EditIcon sx={theme.custom.editButton.iconStyle}/></Button>
                </Box>
            </Grid>

        </Grid>
    );
}
