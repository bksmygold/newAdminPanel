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
          sx={{ backgroundColor: 'white', color: '#8B5704' }}
          size="small"
          onClick={() => {
            router.push(`/plan/edit-plan/?id=${params.id}`);
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
