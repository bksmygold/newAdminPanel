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
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';
import DeleteSpinner from 'src/components/deleteSpinner';
import { useQuery, useMutation } from '@tanstack/react-query';
import { deleteSaleReferral, getSaleReferral } from 'src/apis/referralUser';
import Loading from 'src/components/loading';
import { getReferralType } from 'src/apis/referraltype';

//=======================================================
export default function VipReferral() {
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
            router.push(`/userManagement/saleReferral/edit-saleReferral/?id=${params.row.id}`);
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
        deleting={deleteSaleReferral}
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'fullName',
      headerName: 'Name',
      width: 150,
      editable: true,
      flex: 1,

      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      width: 150,
      editable: true, flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true, flex: 1,
    },

    // {
    //   field: 'referral.code',
    //   headerName: 'Code',
    //   width: 150,
    //   editable: true, flex: 1,
    //   valueGetter: (params) => {
    //     return (params.row.referral.code);
    //   }
    // },
    // {
    //   field: 'referral.subscriptions',
    //   headerName: 'Subscriptions',
    //   width: 150,
    //   editable: true, flex: 1,
    //   valueGetter: (params) => {


    //     return (params.row.referral.subscriptions);
    //   }




    // },
    // {
    //   field: 'referral.downloads',
    //   headerName: 'Downloads',
    //   width: 150,
    //   editable: true, flex: 1,
    //   valueGetter: (params) => {
    //     return (params.row.referral.downloads);
    //   }
    // },


    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: editButton, flex: 1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: deleteButton, flex: 1
    },
  ];

  const referralTypeQuery = useQuery({
    queryKey:"Sale Referral Type",
    queryFn:()=>getReferralType({filter:{userType:["sales_offer" ,"sales_associate"]}})
  })
  
  let saleId = referralTypeQuery.data?.docs[0].id
  let saleAssociateId = referralTypeQuery.data?.docs[1].id

  

  const query = useQuery({
    queryKey: 'Sale referral',
    queryFn: () => getSaleReferral(saleId,saleAssociateId),
  });
  // if(referralTypeQuery.isLoading) return <Loading/>

  if(query.isLoading) return <Loading/>

  console.log("saleId--",saleId)
  console.log("saleAssociateId--",saleAssociateId)
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | view-Referral Type </title>
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
            Sales Referral View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              router.push("/user-management/sale-referral/add-sale-referral")
              }
            sx={theme.custom.addButton}
          >
            Add Sales Referral 
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={query?.data?.docs}
        columns={columns}
        
      />
    </>
  );
}
VipReferral.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
