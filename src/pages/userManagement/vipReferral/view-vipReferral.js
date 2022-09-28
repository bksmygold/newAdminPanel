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
import { deleteVipReferral, getVipReferral } from 'src/apis/referralUser';
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
            router.push(`/userManagement/vipReferral/edit-vipReferral/?id=${params.row.user.id}`);
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
        deleting={deleteVipReferral}
        url="/unit/view-unit"
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
      field: 'user.referralCriteria.subscriptions',
      headerName: 'Subscriptions',
      width: 150,
      editable: true, flex: 1,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.referralCriteria) {
            if (params.row.user.referralCriteria.subscriptions) {

              result.push(params.row.user.referralCriteria.subscriptions);
            }


          }
        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },
    },
    {
      field: 'user.referralCriteria.downloads',
      headerName: 'Downloads',
      width: 150,
      editable: true, flex: 1,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.referralCriteria) {
            if (params.row.user.referralCriteria.downloads) {
              result.push(params.row.user.referralCriteria.downloads);
            }
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

  const rows = [
    {
      id: 1,
      metal: 'Gold',
      icon: 'Icon hai',
      edit: 'Edit',
    },
  ];


  const referralTypeQuery = useQuery({
    queryKey:"Vip Referral Type",
    queryFn:()=>getReferralType({filter:{userType:"vip"}})
  })

  let vipId = referralTypeQuery.data?.docs[0].id


  const query = useQuery({
    queryKey: 'vip referral',
    queryFn: () => getVipReferral(vipId),
    enabled:!! vipId
  });
  console.log(query.data?.docs)

  if(query.isLoading) return <Loading/>
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
            VIP Referral View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              router.push("/userManagement/vipReferral/add-vipReferral")
            }
            sx={theme.custom.addButton}
          >
            Add VIP Referral
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table
        rows={query?.data?.docs}
        // rows={rows}

        columns={columns}

      />
    </>
  );
}
VipReferral.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
