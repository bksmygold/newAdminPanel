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
import { useEffect, useState } from 'react';
import { getOffer } from 'src/apis/offer';
import DeleteSpinner from 'src/components/deleteSpinner';
import { deleteOffer } from 'src/apis/offer';
import { useQuery, useMutation } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import { useTheme } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

//=======================================================
export default function Offer() {
  const router = useRouter();
  const theme = useTheme();

  //=======================

  const query = useQuery({
    queryKey: 'offer',
    queryFn: () => getOffer(),
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });

  if (query.isLoading) return <Loading />;

  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.editButton}
          size="small"
          onClick={() => {
            router.push(`/promotionalSetting/offer/edit-offer/?id=${params.id}`);
          }}
        >
          Edit <EditIcon sx={theme.custom.editButton.iconStyle}/>
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteOffer}
        url="/offer/view-offer"
      />
    );
  };
  //==========
  const columns = [
    { field: 'type', headerName: 'Type', width: 150 ,      flex:1},

    {
      field: 'typeId.name',
      headerName: 'Type ID',
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.typeId) {
          if (params.row.typeId.name) {
            result.push(params.row.typeId.name);
          }
        } else {
          result.push(['empty']);
        }
        return result;
      },      flex:1
    },
    {
      field: 'image',
      headerName: 'Offer Image',
      width: 150,      flex:1,
      renderCell: (params) => (
        <img
          style={{ width: '18%', height: 'fit-content' }}
          src={params.value}
        />
      ),
    },
    { field: 'name', headerName: 'Offer Name', width: 150       ,flex:1},
    { field: 'valueType', headerName: 'Offer Type', width: 150 ,      flex:1},
    { field: 'value', headerName: 'Offer Value', width: 150 ,      flex:1},

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      renderCell: editButton,      flex:1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      renderCell: deleteButton,      flex:1
    },
  ];

  console.log("----",query.data.docs)
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Offer </title>
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
            Offer View
          </Typography>
        </Grid>
        <Grid item>
          <Button sx={theme.custom.addButton} onClick={() => router.push("/promotionalSetting/offer/add-offer")}>
            Create Offer
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={query.data.docs}
        columns={columns}
        create="Offer"
        url="/offer/add-offer"
        title="Offer View"
      />
    </>
  );
}
Offer.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
