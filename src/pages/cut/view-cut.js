import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import { InfoCard } from "../../components/infoCard";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "../../components/utility/table";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCut, deleteCut } from "src/apis/cut";
import React from "react";
import DeleteSpinner from "src/components/deleteSpinner";
import Loading from "src/components/loading";

//=======================================================
export default function Cut() {
  const router = useRouter();
  //=======================

  const query = useQuery({
    queryKey: "Cut",
    queryFn: getCut,
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });

  if (query.isLoading) return <Loading />;

  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: "#8B5704" }}
          size="small"
          onClick={() => {
            router.push(`/cut/edit-cut/?id=${params.id}`);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return <DeleteSpinner id={params.id} deleting={deleteCut} url="/cut/view-cut" />;
  };
  //==========
  const columns = [
    { field: "name", headerName: "Cut Name", width: 250 },

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
        <title>Dashboard | Cut </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="cut"
        url="/cut/add-cut"
        title="Cut View"
      />
    </>
  );
}
Cut.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
