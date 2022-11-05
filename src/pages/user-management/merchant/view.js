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
import { getMerchant, deleteMerchant } from 'src/apis/merchant';
import { useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import VerifiedIcon from '@mui/icons-material/Verified';
import { getMerchantById, updateMerchant } from 'src/apis/merchant';

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
          sx={theme.custom.editButton}
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
  console.log(query.data.docs)
  //===============================
  const columns = [
    {
      field: 'name',
      headerName: 'Merchant Name',
      minWidth: 250,
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),
    },
    {
      field: 'modules',
      headerName: 'Modules Applicable',
      minWidth: 280,
      renderCell: (params) => {
        return (
          <ul>
            {params.value.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        )
      },
    },
    {
      field: 'mobile',
      headerName: 'Phone',
      minWidth: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 150,
    },
    {
      field: 'isVerified',
      headerName: 'Verified',
      minWidth: 150,
      renderCell: (params) => {
        if (params.row.isVerified === true) {
          return (
            <Box sx={{ display: "flex", margin: "auto" }}>
              Verified <VerifiedIcon sx={{ ml: 1, color: "#458eff" }} />
            </Box>
          )
        }
        return (
          <Box sx={{ margin: "auto" }}>
            <Button
              onClick={() => router.push(`/user-management/merchant/verify?id=${params.row.id}`)}
              sx={theme.custom.editButton}>
              Verify
            </Button>
          </Box>
        )

      }
    },

    {
      field: 'notVerified',
      headerName: 'Un-Verify',
      minWidth: 150,
      renderCell: (params) => {
        if (params.row.isVerified !== false) {
          return (

            <Box sx={{ margin: "auto" }}>
              <Button
                onClick={() => {
                  try {
                    updateMerchant({ isVerified: false }, params.id).then(() =>
                      swal('Merhcant Un-Verified !', 'Continue with the admin panel', 'success'));
                    query.refetch()

                  } catch (error) {
                    alert(error)
                  }

                }}
                sx={theme.custom.editButton}>
                Un-Verify
              </Button>
            </Box>
          )
        }

      }
    },


    {
      field: 'Action',
      headerName: 'Action',
      minWidth: 150,
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
            onClick={() => router.push('/user-management/merchant/add-merchant')}
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
        url="/user-management/merchant/add-merchant"
        title="Your Merchant"
      />
    </>
  );
}
Merchant.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
