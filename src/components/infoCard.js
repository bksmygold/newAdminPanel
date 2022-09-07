import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import TimelineIcon from "@mui/icons-material/Timeline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";
//=========================================================
export const InfoCard = (props) => { 
  const router = useRouter()
  //-------------------------------------------
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 1px 0px #d2c6c6",
        border: "1px solid #d2c6c657",
        // width: '100%',
        // height:"fit-content"
      }}
      {...props}
    >
      <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
        {/* -------------------------------------------------------------- */}
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          <Grid item>
            <Avatar
              sx={{
                color: "#8B5704",
                backgroundColor: "white",
                alignItems: "center",
                border: "1px dashed ",
                padding: 2,
                height: 25,
                width: 25,
              }}
            >
              <ManageAccountsIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: "bold" }} color="#905E0F" gutterBottom variant="overline">
              {props.title}
            </Typography>
          </Grid>
        </Grid>
        {/* -------------------------------------------------------------- */}

        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} color="textSecondary" variant="caption">
            {props.desc}
          </Typography>
        </Box>
        {/* -------------------------------------------------------------- */}

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              marginTop: 3,
              padding: 1,
              width: "fit-content",
              border: "1px solid gray",
              cursor: "pointer",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
            onClick={() => {
              router.push(props.url);
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} color="textSecondary" variant="caption">
              View Details
            </Typography>
          </Box>
        </Box>
        {/* -------------------------------------------------------------- */}
      </CardContent>
    </Card>
  );}
