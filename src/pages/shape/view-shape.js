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
import { deleteShape ,getShape} from "src/apis/shape";
import Loading from "src/components/loading";
//=======================================================
export default function Shape() {
  const router = useRouter();
  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: "#8B5704" }}
          size="small"
          onClick={() => {
            router.push(`/shape/edit-shape/?id=${params.id}`);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return <DeleteSpinner id={params.id} deleting={deleteShape} url={"/shape/view-shape"} />;
  };
  //===============================
  const query = useQuery({
    queryKey: "Shape",
    queryFn: getShape,
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });
if(query.isLoading)return <Loading/>
  //===============================
  const columns = [
    { field: "name", headerName: "Shape Name", width: 150 },
   

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
        <title>Dashboard | Shape </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="shape"
        url="/shape/add-shape"
        title="Shape View"
      />
    </>
  );
}
Shape.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
