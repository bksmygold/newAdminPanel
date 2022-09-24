import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
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
//=======================================================
export default function MetalGroup() {
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
            router.push(`/eCommerce/metalGroup/edit-metalGroup/?id=${params.id}`);
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
        deleting={deleteMetalGroup}
        url={'/metalGroup/view-metalGroup'}
      />
    );
  };
  //=======================
  const query = useQuery({
    queryKey: 'Metal Group',
    queryFn: getMetalGroup,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;

  console.log("---", query.data.docs)
  //===============================
  const columns = [
    {
      field: 'shortName',
      headerName: 'Metal Group Short Name',
      width: 150,
      editable: true,
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
            onClick={() => router.push('/eCommerce/metalGroup/add-metalGroup')}
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
