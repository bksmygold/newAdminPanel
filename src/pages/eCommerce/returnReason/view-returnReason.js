import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
import { InfoCard } from "../../../components/infoCard";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "../../../components/utility/table";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getReturnReason, deleteReturnReason } from "src/apis/returnReason";
import React from "react";
import DeleteSpinner from "src/components/deleteSpinner";
import Loading from "src/components/loading";

//=======================================================
export default function ReturnReason() {
  const router = useRouter();
  //=======================

  const query = useQuery({
    queryKey: "returnReason",
    queryFn: () => getReturnReason(),
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });

  if (query.isLoading) return <Loading />;
  //===============

  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ddb070", color: "white" }}
          size="small"
          onClick={() => {
            router.push(`/eCommerce/returnReason/edit-returnReason/?id=${params.id}`);
          }}
        >
          Edit <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteReturnReason}
        url="/eCommerce/returnReason/view-returnReason"
      />
    );
  };
  //==========
  const columns = [
    {
      field: "title",
      headerName: "Return Reason",
      width: 350,
      editable: true,
    },
    {
      field: "type",
      headerName: "Return Type",
      width: 150,
      editable: true,
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

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Return Reason </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="Return Reason"
        url="/eCommerce/returnReason/add-returnReason"
        title="Return Reason View"
      />
    </>
  );
}
ReturnReason.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
