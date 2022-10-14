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
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
import { useController } from 'src/controller/plan';
//=======================================================
export default function ViewPlan() {
  const router = useRouter();
  const theme = useTheme();
  const { query } = useController()

  if (query.isLoading) return <Loading />;
  //===============
  const columns = [
    {
      field: 'name',
      headerName: 'Plan Name',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),
      flex: 1
    },
    {
      field: 'mode',
      headerName: 'Mode',
      minWidth: 15,
      editable: true, flex: 1
    },
    {
      field: 'type',
      headerName: 'Plan Type',
      width: 150,
      editable: true, flex: 1
    },
    {
      field: 'min',
      headerName: 'Minimum',
      width: 150,
      editable: true, flex: 1
    },
    {
      field: 'duration',
      headerName: 'Duration',
      width: 150,
      editable: true, flex: 1
    },
    {
      field: 'cyclePeriod.name',
      headerName: 'Cycle Period',
      width: 160, flex: 1,
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
      renderCell: (params) => (<EditButton
        variant
        url={`/e-commerce/plan/edit-plan/?id=${params.id}`}
      />),
      flex: 1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <DeleteButton
          id={params.id}
          deleting={deletePlan}
        />
      ),
      flex: 1
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
              router.push('/e-commerce/plan/add-plan')
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
ViewPlan.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
