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
import {  deleteMetal, getMetal} from "src/apis/metal";
import { useQuery } from "@tanstack/react-query";
import Loading from "src/components/loading";
import DeleteSpinner from "src/components/deleteSpinner";

//=======================================================
export default function Metal() {
  const router = useRouter()
  //=======================
   const editButton = (params) => {
     return (
       <strong>
         <Button
           variant="contained"
           sx={{ backgroundColor: "white", color: "#8B5704" }}
           size="small"
           onClick={() => {
             router.push(`/metal/edit-metal/?id=${params.id}`);
           }}
         >
           <EditIcon />
         </Button>
       </strong>
     );
   };
   //==========
   const deleteButton = (params) => {
    return <DeleteSpinner id={params.id} deleting={deleteMetal} url={"/metal/view-metal"} />;

   };
  //=======================
  const query = useQuery({
    queryKey: "Metal",
    queryFn: getMetal,
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });
  if (query.isLoading) return <Loading />;

  console.log('--->',query.data.data.data)
  //===============================
  const columns = [
    {
      field: "name",
      headerName: "Metal Name",
      width: 250,
      editable: true,
    },

    {
      field: "icon",
      headerName: "Metal Icon",
      width: 250,
      renderCell: (params) => <img width="50px" height="50px" src={params.value} />, // renderCell will render the component

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
        <title>Dashboard | Metal </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="Metal"
        url="/metal/add-metal"
        title="Metal View"
      />
    </>
  );
}
Metal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
