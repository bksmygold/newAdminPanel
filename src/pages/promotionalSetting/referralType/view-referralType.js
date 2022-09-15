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
import { useQuery } from '@tanstack/react-query';
import DeleteSpinner from 'src/components/deleteSpinner';
import { deleteReferralType, getReferralType } from 'src/apis/referralType';
import Loading from 'src/components/loading';
//=======================================================
export default function ReferralType() {
  const router = useRouter();
  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#ddb070', color: 'white' }}
          size="small"
          onClick={() => {
            router.push(
              `/promotionalSetting/referralType/edit-referralType/?id=${params.id}`
            );
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
        deleting={deleteReferralType}
        url={'/promotionalSetting/referralType/view-referralType'}
      />
    );
  };
  //===============================
  const query = useQuery({
    queryKey: 'referralType',
    queryFn: getReferralType,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;
  //===============================
  const columns = [
    {
      field: 'joiningBonus.min',
      headerName: 'joining bonus min.',
      width: 150,
      valueGetter: (params) => {
        let res = [];
        if (params.row.joiningBonus) {
          if (params.row.joiningBonus.min) {
            res.push(params.row.joiningBonus.min);
          }
        } else {
          res.push('empty');
        }
        return res;
      },
    },
    {
      field: 'joiningBonus.max',
      headerName: 'joining bonus max.(%)',
      width: 220,
      valueGetter: (params) => {
        let res = [];
        if (params.row.joiningBonus) {
          if (params.row.joiningBonus.max) {
            res.push(params.row.joiningBonus.max);
          }
        } else {
          res.push('empty');
        }
        return res;
      },
    },
    {
      field: 'referredBonus',
      headerName: 'referred bonus',
      width: 150,
    },
    {
      field: 'userType',
      headerName: 'user type ',
      width: 150,
    },
    {
      field: 'criteria',
      headerName: 'criteria',
      width: 150,
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
        <title>Dashboard | Referral Type </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="Referral Type"
        url="/promotionalSetting/referralType/add-referralType"
        title="Referral Type View"
      />
    </>
  );
}
ReferralType.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
