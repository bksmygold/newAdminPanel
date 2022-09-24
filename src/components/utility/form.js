import Head from "next/head";
import { DashboardSidebar } from "src/components/sidebar/dashboard-sidebar";
import {
  TextField,
  Box,
  Container,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
//=============================================
export default function Form(props) {
  const { title, desc, children } = props;

  //--------------------------------------------------
  return (
    <>
      <Container
        sx={{
          padding: 5,
          borderRadius: 2,
          boxShadow: "0px 4px 1px 0px #d2c6c6",
          marginTop: 5,
          border: "1px solid #d2c6c657",
          backgroundColor: "white",
        }}
      >
        {/* ------------------------------ */}
        <Typography
          variant="h6"
          sx={{
            color: "#8B5704",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          {desc}
        </Typography>
        {/* ------------------------------ */}

        <Grid
          sx={{
            padding: 5,
            borderRadius: 2,
            boxShadow: "0px 4px 1px 0px #d2c6c6",
            marginTop: 5,
            border: "1px solid #d2c6c657",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          container
        >
          {children}
{/* 
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Button
              variant="outlined"
              sx={{ marginTop: 2, color: "#8B5704", border: "1px solid #8B5704" }}
            >
              {add ? `Add ${add}` : `Edit ${edit}`}
            </Button>
          </Grid> */}
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
