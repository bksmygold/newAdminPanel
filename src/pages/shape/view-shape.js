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
//=======================================================
export default function Shape() {
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
             router.push("/shape/edit-shape");
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
       <strong>
         <Button
           variant="contained"
           sx={{ backgroundColor: "white", color: "#8B5704" }}
           size="small"
           onClick={() => {}}
         >
           <DeleteIcon />
         </Button>
       </strong>
     );
   };
  //==========
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "metal",
      headerName: "Metal Name",
      width: 150,
      editable: true,
    },
    {
      field: "icon",
      headerName: "Icon",
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

  const rows = [
    {
      id: 1,
      metal: "Gold",
      icon: "Icon hai",
      edit: "Edit",
    },
  ];
;
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Shape </title>
      </Head>

      <Table rows={rows} columns={columns} create="shape" url="/shape/add-shape" title='Shape View'/>
    </>
  );
}
Shape.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
