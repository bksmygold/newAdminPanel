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
import { getCyclePeriod,deleteCyclePeriod} from "src/apis/cyclePeriod";
import { useQuery } from "@tanstack/react-query";
import Loading from "src/components/loading";
import DeleteSpinner from "src/components/deleteSpinner";

//=======================================================
export default function CyclePeriod() {
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
             router.push(`/cyclePeriod/edit-cyclePeriod/?id=${params.id}`);
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
      <DeleteSpinner
        id={params.id}
        deleting={deleteCyclePeriod}
        url={"/cyclePeriod/view-cyclePeriod"}
      />
    );

   };
  //=======================
  const query = useQuery({
    queryKey: "cyclePeriod",
    queryFn: getCyclePeriod,
    onSuccess: (res) => console.log("Success ---", res.message),
    onError: (err) => console.log("Error --->", err),
  });
  if (query.isLoading) return <Loading />;

  //===============================
  const columns = [
    {
      field: "name",
      headerName: "Cycle Period Name",
      width: 250,
      editable: true,
    },
    {
      field: "lockinPeriod",
      headerName: "Locking Period",
      width: 250,
      editable: true,
    },
    {
      field: "gracePeriod",
      headerName: "Grace Period",
      width: 250,
      editable: true,
    },
    {
      field: "cycle",
      headerName: "Cycle Period",
      width: 250,
      editable: true,
    },
    {
      field: "maxSkip",
      headerName: "Maximum Skip",
      width: 250,
      editable: true,
    },
    {
      field: "maxUnpaidInvestment",
      headerName: "Max. Unpaid Investment",
      width: 250,
      editable: true,
    },
    {
      field: "maxUnpaidSkip",
      headerName: "Max. Unpaid skip",
      width: 250,
      editable: true,
    },
    {
      field: "shortName",
      headerName: "Short Name",
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
        <title>Dashboard | Cycle Period </title>
      </Head>

      <Table
        rows={query.data.data.data}
        columns={columns}
        create="Cycle Period"
        url="/cyclePeriod/add-cyclePeriod"
        title="Cycle PeriodView"
      />
    </>
  );
}
CyclePeriod.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
