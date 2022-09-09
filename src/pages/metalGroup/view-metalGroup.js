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
import { getMetalGroup ,deleteMetalGroup} from "src/apis/metalGroup";
import { useQuery } from "@tanstack/react-query";
import Loading from "src/components/loading";
import DeleteSpinner from "src/components/deleteSpinner";

//=======================================================
export default function MetalGroup() {
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
             router.push(`/metalGroup/edit-metalGroup/?id=${params.id}`);
           }}
         >
           <EditIcon />
         </Button>
       </strong>
     );
   };
   //==========
   const deleteButton = (params) => {
    return <DeleteSpinner id={params.id} deleting={deleteMetalGroup} url={"/metalGroup/view-metalGroup"} />;

   };
  //=======================
  const query = useQuery({
    queryKey: "Metal Group",
    queryFn: getMetalGroup,
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });
  if (query.isLoading) return <Loading />;

  //===============================
  const columns = [
    {
      field: "shortName",
      headerName: "Metal Group Short Name",
      width: 250,
      editable: true,
    },
    {
      field: "purity",
      headerName: "Purity",
      width: 250,
      editable: true,
    },
    {
      field: "roundingDigits",
      headerName: "Rounding Digits",
      width: 250,
      editable: true,
    },
    {
      field: "metal",
      headerName: "Metal Name",
      width: 250,
      editable: true,
    },
    {
      field: "unit",
      headerName: "Unit Name",
      width: 250,
      editable: true,
    },
    {
      field: "ornament",
      headerName: "Ornament Name",
      width: 250,
      editable: true,
    },
    {
      field: "gst",
      headerName: "GST",
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
        <title>Dashboard | Metal Group </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="Metal Group"
        url="/metalGroup/add-metalGroup"
        title="Metal Group View"
      />
    </>
  );
}
MetalGroup.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
