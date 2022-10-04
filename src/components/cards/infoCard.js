import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";
import {useTheme} from "@mui/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//=========================================================
export const InfoCard = (props) => { 
  const router = useRouter()
  const theme = useTheme()
  //-------------------------------------------
  return (
    <Card
      sx={{
        boxShadow: '-3px 3px 4px -2px #d2c6c6',
        border: '1px solid #d2c6c657',
        backgroundColor:"#FDFAF2",
        height:"100%",
        width: '100%',

      }}
      // {...props}
    >
      <CardContent
            sx={theme.custom.infoCard.bg}
            >
        {/* -------------------------------------------------------------- */}
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item>
            <Avatar
              sx={{
                color: '#8B5704',
                backgroundColor: '#FDFAF2',
                alignItems: 'center',

                // padding: 2,
                height: 21,
                width: 27,
              }}
            >
              <ManageAccountsIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography
              sx={theme.custom.typography.infoCard.h2}
              
              gutterBottom
              variant="h6"
            >
              {props.title}
            </Typography>
          </Grid>
        </Grid>
        {/* -------------------------------------------------------------- */}

        <Box
          sx={theme.custom.typography.infoCard.h3}
        >
          <Typography
            sx={{ fontWeight: 'bold' }}
            variant="caption"
          >
            {props.desc}
          </Typography>
        </Box>
        {/* -------------------------------------------------------------- */}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
        sx={[theme.custom.typography.infoCard.h3,{border:"2px solid #DBDAD8",borderRadius:1,p:.5,backgroundColor:"#FFFDFA"}]}

            onClick={() => {
              router.push(props.url);
            }}
          >
            <Typography
              sx={{ fontWeight: 'bold' }}
              color="textSecondary"
              variant="caption"
            >
              View Details <ArrowForwardIosIcon sx={{fontSize:10}}/>
            </Typography>
          </Box>
        </Box>
        {/* -------------------------------------------------------------- */}
      </CardContent>
    </Card>
  );}
