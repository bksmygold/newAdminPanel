import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import { InfoCard } from "../../components/infoCard";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from '../../components/utility/table'
import { useRouter } from 'next/router'
import { useQuery } from "@tanstack/react-query";
import { getMakingCharge ,deleteMakingCharge} from "src/apis/makingCharge";
import React from 'react'
import DeleteSpinner from "src/components/deleteSpinner";
import Loading from "src/components/loading";

//=======================================================
export default function MakingCharge() {
  const router = useRouter();
  //=======================

  const query = useQuery({
    queryKey: "makingCharge",
    queryFn: () => getMakingCharge(),
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });

  if (query.isLoading) return <Loading/>
  //===============


  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ddb070", color: "white" }}
          size="small"
          onClick={() => {
            router.push(`/makingCharge/edit-makingCharge/?id=${params.id}`);
          }}
        >
          Edit <EditIcon sx={{ marginLeft: 1 }} />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteMakingCharge}
        url="/makingCharge/view-makingCharge"
      />
    );
  };
  //==========
  const columns = [
    {
      field: "supplier.name",
      headerName: "Supplier Name",
      width: 150,
      editable: true,
      valueGetter: (params) => {
        let result = [];
        if (params.row.supplier) {
          if (params.row.supplier.name) {
            result.push(params.row.supplier.name);
          }
        } else {
          result = ["Empty"];
        }
        return result.join(", ");
      },
    },
    {
      field: "variety",
      headerName: "Variety",
      width: 150,
      editable: true,
    },
    {
      field: "item",
      headerName: "Item",
      width: 150,
      editable: true,
    },
    {
      field: "productType.name",
      headerName: "Product Type",
      width: 200,
      editable: true,
      valueGetter: (params) => {
        let result = [];
        if (params.row.productType) {
          if (params.row.productType.name) {
            result.push(params.row.productType.name);
          }
        } else {
          result = ["Empty"];
        }
        return result.join(", ");
      },
    },
    {
      field: "metalGroup.metal.name",
      headerName: "Metal Group Id",
      width: 200,
      editable: true,
      valueGetter: (params) => {
        let result = [];
        if (params.row.metalGroup) {
          if (params.row.metalGroup.metal) {
            if (params.row.metalGroup.metal.name) {
              result.push(params.row.metalGroup.shortName + "" + params.row.metalGroup.metal.name);
            }
          }
        } else {
          result = ["Empty"];
        }
        return result.join(", ");
      },
    },

    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      editable: true,
      renderCell: editButton,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      editable: true,
      renderCell: deleteButton,
    },
  ];
console.log("MC ---",query.data.data.data)
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Making Charge </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="makingCharge"
        url="/makingCharge/add-makingCharge"
        title="Making Charge View"
      />
    </>
  );
}
MakingCharge.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
