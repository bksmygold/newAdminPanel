import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";

//======================================================
export const FinancialsCard = (props) => (
  <Card sx={{ boxShadow: "0px 4px 1px 0px #d2c6c6", border: "1px solid #d2c6c657" }} {...props}>
    <CardContent sx={{ backgroundColor: "#FDFAF2" }}>
      {/* ----------------------------------------------- */}
      {props.isInvoice ? (
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              paddingRight: 0,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="overline" sx={{ color: "black", textAlign: "center" }}>
                89,124
              </Typography>
              <Typography variant="overline" sx={{ fontSize: 9, color: "black" }}>
                Sale-Invoice
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="overline" sx={{ color: "black", textAlign: "center" }}>
                89,124
              </Typography>
              <Typography variant="overline" sx={{ fontSize: 9, color: "black" }}>
                Purchase-Invoice
              </Typography>
            </Box>
          </Grid>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{ color: "black", fontWeight: "bold", textAlign: "center" }}
            >
              Yaha Charts aayega
            </Typography>
          </Box>
        </Grid>
      ) : (
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              paddingRight: 0,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="overline" sx={{ color: "#905E0F", textAlign: "center" }}>
                {props.title}
              </Typography>
              <Typography
                variant="overline"
                sx={{ color: "black", fontWeight: "bold", textAlign: "center" }}
              >
                $ 14758
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="overline"
                sx={{ color: "black", fontWeight: "bold", textAlign: "center" }}
              >
                Yaha Charts aayega
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}

      {/* ----------------------------------------------- */}

      {/* ----------------------------------------------- */}
    </CardContent>
  </Card>
);
