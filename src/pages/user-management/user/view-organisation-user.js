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
import React, { useEffect, useState } from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import AddIcon from '@mui/icons-material/Add';
import { getRole } from 'src/apis/role';
import { deleteUser, getOrganisationUser } from 'src/apis/user';
import { useController } from 'src/controller/orgUser';

//=======================================================
export default function ViewOrganisationUser() {
  const router = useRouter();
const {query} = useController()
  //=======================

  

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
            router.push(`/user-management/user/edit-organisation-user/?id=${params.id}`);
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
        deleting={deleteUser}
        url="/user-management/user/view-organisation-user"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'fullName',
      headerName: 'Name',
      width: 150,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),      flex:1
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,      flex:1
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      width: 150,      flex:1
    },
    {
      field: 'role.name',
      headerName: 'Role',
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.role) {
          if (params.row.role.name) {
            result.push(params.row.role .name);
          }
        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },      flex:1
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

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Organisation User </title>
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
            Organiation User
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              router.push('/user-management/user/create-organisation-user')
            }
            sx={{
              background: 'linear-gradient(43deg, #8b5704, #ddb070)',
              color: 'white',
            }}
          >
            Add User
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query?.data?.docs} columns={columns} />
    </>
  );
}
ViewOrganisationUser.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
