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
import { useQuery } from '@tanstack/react-query';
import { getPlan, deletePlan } from 'src/apis/plan';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/styles';

//=======================================================
export default function ViewRole() {
  const router = useRouter();
    const theme = useTheme();

  //=======================

  const query = useQuery({
    queryKey: 'Plan',
    queryFn: () => getPlan(),
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });

  if (query.isLoading) return <Loading />;

  console.log("<---->",query.data.docs)
  //===============

  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.editButton}
          size="small"
          onClick={() => {
            router.push(`/eCommerce/plan/edit-plan/?id=${params.id}`);
          }}
        >
          Edit <EditIcon sx={theme.custom.editButton.iconStyle} />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deletePlan}
        url="/plan/view-plan"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'Plan Name',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'mode',
      headerName: 'Mode',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'type',
      headerName: 'Plan Type',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'min',
      headerName: 'Minimum',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'duration',
      headerName: 'Duration',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'cyclePeriod.name',
      headerName: 'Cycle Period',
      width: 160,      flex:1,
      valueGetter: (params) => {
        let result = [];
        if (params.row.cyclePeriod) {
          if (params.row.cyclePeriod.name) {
            result.push(params.row.cyclePeriod.name);
          }
        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },
    },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: editButton,      flex:1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: deleteButton,      flex:1
    },
  ];

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Plan </title>
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
            Plan View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              // setShowAdd(true)
              router.push('/eCommerce/plan/add-plan')
            }
            sx={theme.custom.addButton}
          >
            Create Plan
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={query.data.docs}
        columns={columns}
   
      />
    </>
  );
}
ViewRole.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
