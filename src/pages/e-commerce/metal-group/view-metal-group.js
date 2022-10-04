import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button, useControlled } from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { getMetalGroup, deleteMetalGroup } from 'src/apis/metalGroup';
import { useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/styles'
import {useController} from "../../../controller/metalGroup"
import {EditButton} from '../../../components/button/editButton'
import {DeleteButton} from '../../../components/button/deleteButton'

//=======================================================
export default function MetalGroup() {
  const router = useRouter();
  const theme = useTheme()

const {query} = useController()


  if (query.isLoading) return <Loading />;

  console.log("---", query.data.docs)
  //===============================
  const columns = [
    {
      field: 'shortName',
      headerName: 'Metal Group Short Name',
      width: 200,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),
    },
    {
      field: 'purity',
      headerName: 'Purity',
      width: 150,
      editable: true,
    },
    {
      field: 'roundingDigits',
      headerName: 'Rounding Digits',
      width: 150,
      editable: true,
    },
    {
      field: 'metal.name',
      headerName: 'Metal Name',
      width: 150,
      editable: true,
      valueGetter: (params) => {
        let result = [];
        if (params.row.metal) {
          if (params.row.metal.name) {

            result.push(params.row.metal.name);

          }
        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },
    },
    {
      field: 'unit.name',
      headerName: 'Unit Name',
      width: 150,
      editable: true,
      valueGetter: (params) => {
        let result = [];
        if (params.row.unit) {

          if (params.row.unit.name) {
            result.push(params.row.unit.name);
          }

        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },
    },
    {
      field: 'ornament',
      headerName: 'Ornament Name',
      width: 150,
      editable: true,
    },
    {
      field: 'gst',
      headerName: 'GST',
      width: 150,
      editable: true,
    },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: (params) => (<EditButton
        variant
        url={`/e-commerce/metal-group/edit-metal-group/?id=${params.id}`}
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
          deleting={deleteMetalGroup}
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
        <title>Dashboard | Metal Group </title>
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
            Metal Group View
          </Typography>
        </Grid>
        <Grid item >
          <Button
            onClick={() => router.push('/e-commerce/metal-group/add-metal-group')}
            sx={{
              background: 'linear-gradient(43deg, #8b5704, #ddb070)',
              color: 'white',
            }}
          >
            Create Metal Group
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
MetalGroup.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
