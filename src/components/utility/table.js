import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container, Typography, Grid, Button, Modal, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation } from "@tanstack/react-query";
import { postUnit } from "src/apis/unit";
import swal from "sweetalert";

//=======================================================
const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
//=============================================
export default function Table(props) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const formik = useFormik({
    initialValues: {
      name: "",
      conversionFactor: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Unit Name").required("Unit is required"),
      conversionFactor: yup
        .number("Enter Conversion Factor")
        .required("Conversion Factor is required"),
    }),
    onSubmit: (values) => {
      console.log("paylioad --",values)
      unitMutation.mutate(values);
    },
  });

  const unitMutation = useMutation({
    mutationFn: postUnit,
    onSuccess: (res) => {
      swal("Unit Added !", res.message, "success"), window.location.reload(false);
    },
    onError: (err) => swal("Erro !", err.message, "error"),
  });
  //=======================================================

  return (
    <Container sx={{ padding: 2 }}>
      {/* ------------------------------ */}
      {/* <Grid sx={{ flexDirection: "column" }} container>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <Typography variant="h5" sx={{ color: "#8B5704", marginBottom: 3 }}>
            {props.title}
          </Typography>
        </Grid>
        {props.noButton ? null : (
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Button onClick={handleOpen} sx={{ backgroundColor: "#8B5704", color: "white" }}>
              Create {props.create}
              <AddIcon sx={{ marginLeft: 1 }} />
            </Button>
          </Grid>
        )}
      </Grid> */}
      {/* ------------------------------ */}
      <div
        style={{
          height: 400,
          width: "100%",
          color: "red",
        }}
      >
        <Modal
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              backgroundColor: "white",
              // width: "40%",
              // height:"50%",
              p: 2,
              borderRadius: 1,
              boxShadow: "0px 4px 1px 0px #d2c6c6",
              border: "1px solid #d2c6c657",
            }}
          >
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  color: "#8B5704",
                  fontWeight: "bolder",
                }}
              >
                Add Unit
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#cba56a",
                  marginBottom: 15,
                  fontWeight: "bold",
                }}
              >
                Add Unit for products used in E-commerce
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#8B5704",
                    marginBottom: 2,
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                >
                  Unit Type Name
                </Typography>
                <CustomTextField
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  fullWidth
                  variant="outlined"
                  label="Unit Type name"
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#8B5704",
                    marginBottom: 2,
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                >
                  Conversion Factor
                </Typography>
                <CustomTextField
                  error={formik.touched.conversionFactor && Boolean(formik.errors.conversionFactor)}
                  helperText={formik.touched.conversionFactor && formik.errors.conversionFactor}
                  id="conversionFactor"
                  name="conversionFactor"
                  value={formik.values.conversionFactor}
                  onChange={formik.handleChange}
                  fullWidth
                  variant="outlined"
                  label="Conversion Factor "
                  sx={{ mt: 1 }}
                />

                <LoadingButton
                  disabled={unitMutation.isLoading}
                  loading={unitMutation.isLoading}
                  type="submit"
                  sx={{
                    marginTop: 2,
                    backgroundColor: "#DDB070",
                    border: "none",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#DBA251",
                    },
                  }}
                >
                  Add Unit
                </LoadingButton>
              </form>
            </Grid>
          </Box>
        </Modal>
        <StripedDataGrid
          sx={{
            padding: 1,
            borderRadius: 2,

            boxShadow: "0px 4px 1px 0px #d2c6c6",
            marginTop: 5,
            border: "1px solid #d2c6c657",
            // justifyContent: "center",
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
