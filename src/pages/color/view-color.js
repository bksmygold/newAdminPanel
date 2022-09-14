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
import DeleteSpinner from "src/components/deleteSpinner";
import { getColor, deleteColor } from "src/apis/color";
import Loading from "src/components/loading";

//=======================================================
export default function Color() {
  const router = useRouter();

  const query = useQuery({
    queryKey: "Color",
    queryFn: getColor,
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });
  if (query.isLoading) return <Loading />;

  console.log("====>", query);
  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: "#8B5704" }}
          size="small"
          onClick={() => {
            router.push(`/color/edit-color/?id=${params.id}`);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => (
    <DeleteSpinner id={params.id} deleting={deleteColor} url="/color/view-color" />
  );

  //==========
  const columns = [
    { field: "name", headerName: "Color Name", width: 150 },

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
        <title>Dashboard | Color </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="color"
        url="/color/add-color"
        title="Color View"
      />
    </>
  );
}
Color.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
