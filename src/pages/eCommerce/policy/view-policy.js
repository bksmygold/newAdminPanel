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
import { getPolicy, deletePolicy } from "src/apis/policy";
import React from "react";
import DeleteSpinner from "src/components/deleteSpinner";
import Loading from "src/components/loading";

//=======================================================
export default function Policy() {
  const router = useRouter();
  //=======================

  const query = useQuery({
    queryKey: "policy",
    queryFn: () => getPolicy(),
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
            router.push(`/policy/edit-policy/?id=${params.id}`);
          }}
        >
          Edit <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return <DeleteSpinner id={params.id} deleting={deletePolicy} url="/policy/view-policy" />;
  };
  //==========
  const columns = [
    {
      field: "title",
      headerName: "policy title",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "description",
      width: 450,
      editable: true,
    },
    {
      field: "consignmentRequired",
      headerName: "Consignment",
      width: 100,
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
        <title>Dashboard | Policy </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="Policy"
        url="/eCommerce/policy/add-policy"
        title="Policy View"
      />
    </>
  );
}
Policy.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
