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
import { useEffect, useState } from 'react';
import { getOffer } from 'src/apis/offer';
import DeleteSpinner from 'src/components/deleteSpinner';
import { deleteOffer } from 'src/apis/offer';
import { useQuery, useMutation } from '@tanstack/react-query';
import Loading from 'src/components/loading';

//=======================================================
export default function Offer() {
  const router = useRouter();
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
          sx={{ backgroundColor: '#ddb070', color: 'white' }}
          size="small"
          onClick={() => {
            router.push(`/offer/edit-offer/?id=${params.id}`);
          }}
        >
          Edit <EditIcon />
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
    { field: 'type', headerName: 'Type', width: 250 },

    {
      field: 'typeId.name',
      headerName: 'Type ID',
      width: 250,
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
      },
    },
    {
      field: 'image',
      headerName: 'Offer Image',
      width: 250,
      renderCell: (params) => (
        <img
          style={{ width: '18%', height: 'fit-content' }}
          src={params.value}
        />
      ),
    },
    { field: 'name', headerName: 'Offer Name', width: 250 },
    { field: 'valueType', headerName: 'Offer Type', width: 250 },
    { field: 'value', headerName: 'Offer Value', width: 250 },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      renderCell: editButton,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      renderCell: deleteButton,
    },
  ];

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Offer </title>
      </Head>

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
