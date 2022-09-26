import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container, Typography, Grid, Button, Modal, TextField, TablePagination } from "@mui/material";
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

  //====================================================
  const ODD_OPACITY = 0.2;

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    tablePagination: { backgroundColor: "red" },
    [`& .${gridClasses.row}.even`]: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: '#f9efd4',
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-selected': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  }));


  const handleClick = ()=> {

    console.log("------>>>", params.row.title)

  }
  //=======================================================

  return (
    <Grid container >
      {/* ------------------------------ */}
      <Grid item lg={12} xs={12}>

        <StripedDataGrid
          onRowClick={props.handleClick}

          sx={{
            ".MuiTablePagination-displayedRows": {
              color: "#3c2400",
            },
            ".MuiTablePagination-selectLabel": {
              color: "#3c2400",
            },
            margin:5,
            padding: 1,
            borderRadius: 2,


            boxShadow: '0px 4px 1px 0px #d2c6c6',
            marginTop: 5,
            height: 500,
            border: '1px solid #d2c6c657',
            // justifyContent: "center",
          }}

          rows={props.rows}
          columns={props.columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
        />
      </Grid>

    </Grid>
  );
}
