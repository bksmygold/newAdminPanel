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
import { getLoanInterest, deleteLoanInterest } from 'src/apis/loanInterest';
import { useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';

//=======================================================
export default function LoanInterest() {
  const router = useRouter();
  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'white', color: '#8B5704' }}
          size="small"
          onClick={() => {
            router.push(`/loanInterest/edit-loanInterest/?id=${params.id}`);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteLoanInterest}
        url={'/loanInterest/view-loanInterest'}
      />
    );
  };
  //=======================
  const query = useQuery({
    queryKey: 'getLoanInterest',
    queryFn: getLoanInterest,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;

  //===============================
  const columns = [
    {
      field: 'minMonth',
      headerName: 'Minimum Month',
      width: 250,
      editable: true,
    },
    {
      field: 'maxMonth',
      headerName: 'Maximum Month',
      width: 250,
      editable: true,
    },
    {
      field: 'interest',
      headerName: 'Interest',
      width: 250,
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
        <title>Dashboard | Loan Interest </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="Loan Interest"
        url="/loanInterest/add-loanInterest"
        title="Loan Interest View"
      />
    </>
  );
}
LoanInterest.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
