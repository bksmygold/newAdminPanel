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
import { useQuery } from '@tanstack/react-query';
import DeleteSpinner from 'src/components/deleteSpinner';
import { getColor, deleteColor } from 'src/apis/color';
import Loading from 'src/components/loading';
import { getCustomDuty, deleteCustomDuty } from 'src/apis/customDuty';

//=======================================================
export default function CustomDuty() {
  const router = useRouter();

  const query = useQuery({
    queryKey: 'CustomDuty',
    queryFn: getCustomDuty,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;

  console.log('====>', query);
  //=======================
  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'white', color: '#8B5704' }}
          size="small"
          onClick={() => {
            router.push(`/customDuty/edit-customDuty/?id=${params.id}`);
          }}
        >
          <EditIcon />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => (
    <DeleteSpinner
      id={params.id}
      deleting={deleteCustomDuty}
      url="/customDuty/view-customDuty"
    />
  );

  //==========
  const columns = [
    { field: 'name', headerName: 'Custom Duty Name', width: 150 },
    { field: 'value', headerName: 'Custom Duty value', width: 150 },
    { field: 'surcharge', headerName: 'Custom Duty surcharge', width: 150 },

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
        <title>Dashboard | Color </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="Custom Duty"
        url="/customDuty/add-customDuty"
        title="Custom Duty View"
      />
    </>
  );
}
CustomDuty.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
