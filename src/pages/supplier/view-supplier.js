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
import { getSupplier ,deleteSupplier} from "src/apis/supplier";
import React from 'react'
import DeleteSpinner from "src/components/deleteSpinner";
import Loading from "src/components/loading";

//=======================================================
export default function Supplier() {
  const router = useRouter();
  //=======================

  const query = useQuery({
    queryKey: "supplier",
    queryFn: () => getSupplier(),
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
          sx={{ backgroundColor: "white", color: "#8B5704" }}
          size="small"
          onClick={() => {
            router.push(`/supplier/edit-supplier/?id=${params.id}`);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return <DeleteSpinner id={params.id} deleting={deleteSupplier} url="/supplier/view-supplier" />;
  };
  //==========
  const columns = [
    {
      field: "name",
      headerName: "Supplier Name",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Mobile No.",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },
    {
      field: "code",
      headerName: "Code",
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
        <title>Dashboard | Supplier </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="Supplier"
        url="/supplier/add-supplier"
        title="Supplier View"
      />
    </>
  );
}
Supplier.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
