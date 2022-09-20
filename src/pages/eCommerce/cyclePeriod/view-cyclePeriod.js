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
import { getCyclePeriod, deleteCyclePeriod } from 'src/apis/cyclePeriod';
import { useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/styles';
//=======================================================
export default function CyclePeriod() {
  const router = useRouter();
  const theme = useTheme();

  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.editButton}
          size="small"
          onClick={() => {
            router.push(`/eCommerce/cyclePeriod/edit-cyclePeriod/?id=${params.id}`);
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
        deleting={deleteCyclePeriod}
        url={'/eCommerce/cyclePeriod/view-cyclePeriod'}
      />
    );
  };
  //=======================
  const query = useQuery({
    queryKey: 'cyclePeriod',
    queryFn: getCyclePeriod,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;

  //===============================
  const columns = [
    {
      field: 'name',
      headerName: 'Cycle Period Name',
      width: 150,
      editable: true,
    },
    {
      field: 'lockinPeriod',
      headerName: 'Locking Period',
      width: 150,
      editable: true,
    },
    {
      field: 'gracePeriod',
      headerName: 'Grace Period',
      width: 150,
      editable: true,
    },
    {
      field: 'cycle',
      headerName: 'Cycle Period',
      width: 150,
      editable: true,
    },
    {
      field: 'maxSkip',
      headerName: 'Maximum Skip',
      width: 150,
      editable: true,
    },
    {
      field: 'maxUnpaidInvestment',
      headerName: 'Max. Unpaid Investment',
      width: 150,
      editable: true,
    },
    {
      field: 'maxUnpaidSkip',
      headerName: 'Max. Unpaid skip',
      width: 150,
      editable: true,
    },
    {
      field: 'shortName',
      headerName: 'Short Name',
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
        <title>Dashboard | Cycle Period </title>
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
            Cycle Period View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              // setShowAdd(true)
              router.push('/eCommerce/cyclePeriod/add-cyclePeriod')
            }
            sx={theme.custom.addButton}
          >
            Create Cycle Period
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={query.data.docs}
        columns={columns}
        create="Cycle Period"
        url="/cyclePeriod/add-cyclePeriod"
        title="Cycle PeriodView"
      />
    </>
  );
}
CyclePeriod.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
