import {
    Box,
    Container,
    Typography,
    Grid,
    ListItem,
    ListItemIcon,
    List,
    ListItemText,

} from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useRouter } from "next/router"
import { reportList } from "src/constants/constant";
import { useTheme } from '@mui/styles'
import Link from 'next/link'

//====================================================
export default function ReportCard(props) {

    const theme = useTheme()
    //===============================================
    return (
        <Grid
            sx={{
                justifyContent: "center",
                padding: 2,
                marginTop: 5,
                height: "100%"
            }}
            container
            spacing={0}
        >
            <Grid
                sx={{ minWidth: "80%", backgroundColor: "white", marginRight: 1, boxShadow: "0 0 7px 0px #a1a1a1" }}
                item>
                <Box
                    fullWidth
                    sx={{
                        backgroundColor: "#FDFAF2",
                        height: "20vh",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        boxShadow: "1px 3px 5px 0px #a1a1a1",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={theme.custom.typography.inventoryCard.h2}
                    >
                        {props.Title}
                    </Typography>
                    <Box>
                        {props.Title === "Smart Reports" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="73.37" height="69.533" viewBox="0 0 73.37 69.533">
                                <path id="Icon_metro-dropbox" data-name="Icon metro-dropbox" d="M25,2.934,3.188,16.519l14.945,12.53,21.74-14.112ZM53.064,60.6a1.679,1.679,0,0,1-1.089-.39l-12.1-10.043L27.77,60.212a1.707,1.707,0,0,1-1.089.39,1.682,1.682,0,0,1-.932-.275l-8.965-5.858v3.455L39.873,72.467,62.961,57.919V54.464L54,60.323a1.681,1.681,0,0,1-.932.275ZM76.557,16.519,54.738,2.934l-14.865,12L61.608,29.049l14.949-12.53ZM39.873,42.634,53.354,53.823,74.91,39.729l-13.3-10.681ZM26.391,53.823,39.873,42.634,18.133,29.049,4.835,39.729Z" transform="translate(-3.188 -2.934)" opacity="0.472" />
                            </svg>
                        ) : props.Title === "Financials" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="91.43" height="64" viewBox="0 0 91.43 64">
                                <path id="Icon_awesome-money-bill-wave-alt" data-name="Icon awesome-money-bill-wave-alt" d="M88.737,5.459A42.3,42.3,0,0,0,72.107,2.25c-17.6,0-35.19,8.906-52.786,8.906A43.344,43.344,0,0,1,6.086,9.2a4.885,4.885,0,0,0-1.479-.231A4.546,4.546,0,0,0,0,13.509V58.831A4.543,4.543,0,0,0,2.691,63.04a42.281,42.281,0,0,0,16.63,3.21c17.6,0,35.191-8.907,52.787-8.907A43.344,43.344,0,0,1,85.344,59.3a4.885,4.885,0,0,0,1.479.231A4.546,4.546,0,0,0,91.43,54.99V9.669a4.549,4.549,0,0,0-2.693-4.21ZM45.714,47.964c-6.313,0-11.429-6.141-11.429-13.714S39.4,20.536,45.714,20.536s11.429,6.14,11.429,13.714S52.024,47.964,45.714,47.964Z" transform="translate(0 -2.25)" opacity="0.472" />
                            </svg>
                        ) : (
                            <QueryStatsIcon sx={{ width: 90, height: 90, color: "#868480" }} />
                        )}
                    </Box>
                </Box>
                {props.list?.map(x => {
                    if (x.head) {
                        return (
                            <Box >
                                <Typography
                                    sx={[theme.custom.typography.reports, { marginLeft: 2, color: "black", mt: 5, fontWeight: "bold" }]}>
                                    {x.head}
                                </Typography>
                                <Typography
                                    sx={[theme.custom.typography.reports, { marginLeft: 4 }]}>
                                    <a href={x.data1?.url}>
                                        {x.data1?.title1}
                                    </a>
                                </Typography>
                                <Typography
                                    sx={[theme.custom.typography.reports, { marginLeft: 4 }]}>
                                    <a href={x.data2?.url}>
                                        {x.data2?.title2}
                                    </a>
                                </Typography>
                                {x.data3 ? (
                                    <Typography
                                        sx={[theme.custom.typography.reports, { marginLeft: 4 }]}>
                                        <a href={x.data3?.url}>
                                            {x.data3?.title3}
                                        </a>
                                    </Typography>)
                                    : (null)}
                            </Box>
                        )
                    } else {
                        return (
                            <Typography sx={[theme.custom.typography.reports, { marginLeft: 2, mt: 2 }]}>
                                <a href={x.url}>
                                    {x.title}
                                </a>
                            </Typography>
                        )
                    }
                })}
            </Grid>
        </Grid>
    )
}