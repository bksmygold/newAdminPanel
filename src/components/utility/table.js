import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useRouter } from "next/router";

//=============================================
export default function Table(props) {
  const router = useRouter();

  //====================================================
  const ODD_OPACITY = 0.2;

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "#f9efd4",
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  }));
  //====================================================
  return (
    <Container sx={{ padding: 2 }}>
      {/* ------------------------------ */}
      <Grid sx={{ flexDirection: "column" }} container>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <Typography variant="h5" sx={{ color: "#8B5704", marginBottom: 3 }}>
            {props.title}
          </Typography>
        </Grid>
        {props.noButton ? null : (
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Button
              onClick={() => {
                router.push(props.url);
              }}
              sx={{ backgroundColor: "#8B5704", color: "white" }}
            >
              Create {props.create}
              <AddIcon sx={{ marginLeft: 1 }} />
            </Button>
          </Grid>
        )}
      </Grid>
      {/* ------------------------------ */}
      <div
        style={{
          height: 400,
          width: "100%",
          color: "red",
        }}
      >
        <StripedDataGrid
          sx={{
            padding: 1,
            borderRadius: 2,

            boxShadow: "0px 4px 1px 0px #d2c6c6",
            marginTop: 5,
            border: "1px solid #d2c6c657",
            justifyContent: "center",
          }}
          rows={props.rows}
          columns={props.columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
        />
      </div>
    </Container>
  );
}
