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
import { getBadla,deleteBadla} from "src/apis/badla";
import { useQuery } from "@tanstack/react-query";
import Loading from "src/components/loading";
import DeleteSpinner from "src/components/deleteSpinner";

//=======================================================
export default function Badla() {
  const router = useRouter()
  //=======================
   const editButton = (params) => {
     return (
       <strong>
         <Button
           variant="contained"
           sx={{ backgroundColor: "#ddb070", color: "white" }}
           size="small"
           onClick={() => {
             router.push(`/badla/edit-badla/?id=${params.id}`);
           }}
         >
           Edit <EditIcon />
         </Button>
       </strong>
     );
   };
   //==========
   const deleteButton = (params) => {
    return <DeleteSpinner id={params.id} deleting={deleteBadla} url={"/badla/view-badla"} />;

   };
  //=======================
  const query = useQuery({
    queryKey: "Badla",
    queryFn: getBadla,
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });
  if (query.isLoading) return <Loading />;

  //===============================
  const columns = [
    {
      field: "value",
      headerName: "Badla value",
      width: 250,
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
        <title>Dashboard | Badla </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="Badla"
        url="/badla/add-badla"
        title="Badla View"
      />
    </>
  );
}
Badla.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
