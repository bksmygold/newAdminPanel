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
import { getMerchant, deleteMerchant } from 'src/apis/merchant';
import { useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

//=======================================================
export default function Merchant() {
  const router = useRouter();
  const theme = useTheme();

  //=======================
  const manageButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.Button}
          size="small"
          onClick={() => {
            router.push(
              `/userManagement/merchant/edit-merchant/?id=${params.id}`
            );
          }}
        >
          Manage 
        </Button>
      </strong>
    );
  };
  
 
  //=======================
  const query = useQuery({
    queryKey: 'merchant',
    queryFn: getMerchant,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;

  //===============================
  const columns = [
    {
      field: 'name',
      headerName: 'Merchant Name',
      width: 250,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),
    },
    {
      field: 'modules',
      headerName: 'Modules Applicable',
      width: 280,
      renderCell: (params) => {
        params.value.map((x) => x);
      },
    },
    {
      field: 'retainershipType',
      headerName: 'Retainership Type',
      width: 200,
    },
    {
      field: 'retainershipValue',
      headerName: 'Retainership Value ',
      width: 150,
    },
    {
      field: 'commission',
      headerName: 'Buy Commission ',
      width: 200,
      valueGetter: (params) => {
        console.log(params.row.commission.buy);
        let result = [];
        if (params.row.commission) {
          if (params.row.commission.buy) {
            result.push(params.row.commission.buy);
          }
        } else {
          result = ['Unknown'];
        }
        return result.join(', ');
      },
    },

    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      editable: true,
      renderCell: manageButton,
    },
  
  ];

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Merchant </title>
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
            Merchant View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => router.push('/userManagement/merchant/add-merchant')}
            sx={theme.custom.addButton}
          >
            Add Merchant
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={query.data.docs}
        columns={columns}
        create="merchant"
        url="/userManagement/merchant/add-merchant"
        title="Your Merchant"
      />
    </>
  );
}
Merchant.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
