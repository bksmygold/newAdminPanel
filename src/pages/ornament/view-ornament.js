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
import { useEffect, useState } from "react";
import { getOrnament } from "src/apis/ornament";
import DeleteSpinner from "src/components/deleteSpinner";
import { deletetOrnament } from "src/apis/ornament";
import { useQuery, useMutation } from "@tanstack/react-query";
import Loading from "src/components/loading";

//=======================================================
export default function Ornament() {
  const router = useRouter();
  //=======================

  const query = useQuery({
    queryKey: "Ornament",
    queryFn: () => getOrnament(),
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
            router.push(`/ornament/edit-ornament/?id=${params.id}`);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (

      <DeleteSpinner id={params.id} deleting={deletetOrnament} url="/ornament/view-ornament" />
    );
  };
  //==========
  const columns = [
    { field: "name", headerName: "Ornament Name", width: 250 },

    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: editButton,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: deleteButton,
    },
  ];

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Ornament </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="Ornament"
        url="/ornament/add-ornament"
        title="Ornament View"
      />
    </>
  );
}
Ornament.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
