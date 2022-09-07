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
import { getMetal } from "../../apis/metal";
import { useEffect, useState } from "react";
//=======================================================
export default function Metal() {
  const router = useRouter();

  const [metalData, setMetalData] = useState([]);
  useEffect(() => {
    getMetal().then((res) => setMetalData(res.data));
  }, []);
  console.log("metalData ---", metalData);
  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: "white", color: "#8B5704" }}
          size="small"
          onClick={() => {
            router.push("/metal/edit-metal");
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    console.log("params --",params)
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

  const imageRenderer = (params) => { 
    return (
      <img src={ params} />
    )
  }
  //==========
  const columns = [
    {
      field: "name",
      headerName: "Metal Name",
      width: 150,
      editable: true,
    },
    {
      field: "icon",
      headerName: "Icon",
      width: 150,
      editable: true,
      renderCell: (params) => <img width="50px" height="50px" src={params.value} />, // renderCell will render the component

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
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Metal </title>
      </Head>

      <Table
        rows={metalData}
        columns={columns}
        create="Metal"
        url="add-metal"
        title="Metal View Screen"
      />
    </>
  );
}
Metal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
