import Head from 'next/head';
import { DashboardSidebar } from 'src/components/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { DashboardLayout } from '../../../components/dashboard-layout';
import { InfoCard } from '../../../components/infoCard';
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

//=======================================================
export default function ViewOrganisationUser() {
  const router = useRouter();

  //=======================

  const query = useQuery({
    queryKey: 'OrgaUser',
    queryFn: () => getOrganisationUser(),
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
            router.push(`/userManagement/user/edit-organisationUser/?id=${params.id}`);
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
        url="/userManagement/user/view-organisationUser"
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
      ),
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      width: 150,
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
              router.push('/userManagement/user/create-organisationUser')
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