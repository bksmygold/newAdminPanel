import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';
import DeleteSpinner from 'src/components/deleteSpinner';

//=======================================================
export default function VipReferral() {
  const router = useRouter();
  const theme = useTheme()
  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.editButton}
          size="small"
          onClick={() => {
            router.push(`/userManagement/vipReferral/edit-vipReferral/?${params.id}`);
          }}
        >
          Edit <EditIcon sx={{ marginLeft: 1, width: 23, height: 23 }} />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={""}
        url="/unit/view-unit"
      />
    );
  };
  //==========
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'metal',
      headerName: 'Metal Name',
      width: 150,
      editable: true,  flex:1
    },
    {
      field: 'icon',
      headerName: 'Icon',
      width: 150,
      editable: true,  flex:1
    },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: editButton,  flex:1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: deleteButton,  flex:1
    },
  ];

  const rows = [
    {
      id: 1,
      metal: 'Gold',
      icon: 'Icon hai',
      edit: 'Edit',
    },
  ];
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | view-Referral Type </title>
      </Head>
      <Grid
        sx={{
          marginLeft: 5,
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
        container
      >
        <Grid item>
          <Typography variant="h5" sx={{ color: '#8B5704', marginBottom: 3 }}>
            VIP Referral View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              router.push("/userManagement/vipReferral/add-vipReferral")
              }
            sx={theme.custom.addButton}
          >
            Add VIP Referral
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={rows}
        columns={columns}
        
      />
    </>
  );
}
VipReferral.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
