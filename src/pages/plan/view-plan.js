import Head from 'next/head';
import { DashboardSidebar } from 'src/components/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { InfoCard } from '../../components/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getPlan, deletePlan } from 'src/apis/plan';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import AddIcon from '@mui/icons-material/Add';

//=======================================================
export default function Plan() {
  const router = useRouter();
  //=======================

  const query = useQuery({
    queryKey: 'Plan',
    queryFn: () => getPlan(),
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });

  if (query.isLoading) return <Loading />;
  //===============

  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(43deg, #8b5704, #ddb070)',
            color: 'white',
          }}
          size="small"
          onClick={() => {
            router.push(`/plan/edit-plan/?id=${params.id}`);
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
      editable: true,
    },
    {
      field: 'mode',
      headerName: 'Mode',
      width: 150,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Plan Type',
      width: 150,
      editable: true,
    },
    {
      field: 'min',
      headerName: 'Minimum',
      width: 150,
      editable: true,
    },
    {
      field: 'duration',
      headerName: 'Duration',
      width: 150,
      editable: true,
    },
    {
      field: 'cyclePeriod.name',
      headerName: 'Cycle Period',
      width: 160,
      valueGetter: (params) => {
        console.log(params.row.cyclePeriod.name);
        let result = [];
        if (params.row.cyclePeriod) {
          if (params.row.cyclePeriod.name) {
            result.push(params.row.cyclePeriod.name);
          }
        } else {
          result = ['Unknown'];
        }
        return result.join(', ');
      },
    },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: editButton,
    },
    {
      field: 'delete',
      headerName: 'Delete',
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
              router.push('/plan/add-plan')
            }
            sx={{
              background: 'linear-gradient(43deg, #8b5704, #ddb070)',
              color: 'white',
            }}
          >
            Create Plan
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={query.data.docs}
        columns={columns}
        create="Plan"
        url="/plan/add-plan"
        title="Plan View"
      />
    </>
  );
}
Plan.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
