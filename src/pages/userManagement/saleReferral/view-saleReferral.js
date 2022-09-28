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
import { getSaleReferral } from 'src/apis/referralUser';
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
            router.push(`/userManagement/saleReferral/edit-saleReferral/?${params.id}`);
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
        deleting={""}
        url="/unit/view-unit"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'user.fullName',
      headerName: 'Name',
      width: 150,
      editable: true,
      flex: 1,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.fullName) {

            result.push(params.row.user.fullName);

          }
        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },
      renderCell: (params) => (
        <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
      ),
    },
    {
      field: 'user.mobile',
      headerName: 'Mobile',
      width: 150,
      editable: true, flex: 1,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.mobile) {

            result.push(params.row.user.mobile);

          }
        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },
    },

    {
      field: 'code',
      headerName: 'Code',
      width: 150,
      editable: true, flex: 1,

    },
 


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
    queryKey:"Vip Referral Type",
    queryFn:()=>getReferralType({filter:{userType:["sales_offer" ,"sales_associate"]}})
  })
  
  let saleId = referralTypeQuery.data?.docs[1].id
  let saleAssociateId = referralTypeQuery.data?.docs[1].id

  

  const query = useQuery({
    queryKey: 'Sale referral',
    queryFn: () => getSaleReferral(saleId,saleAssociateId),
  });
  if(query.isLoading) return <Loading/>


  console.log("----",query.data?.docs)
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
              router.push("/userManagement/saleReferral/add-saleReferral")
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
