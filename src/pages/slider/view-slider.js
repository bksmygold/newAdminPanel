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
import { deleteSlider, getSlider } from 'src/apis/slider';
import Loading from 'src/components/loading';
//=======================================================
export default function Slider() {
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
            router.push(`/slider/edit-slider/?id=${params.id}`);
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
        deleting={deleteSlider}
        url={'/slider/view-slider'}
      />
    );
  };
  //===============================
  const query = useQuery({
    queryKey: 'slider',
    queryFn: getSlider,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });

  if (query.isLoading) return <Loading />;
  //===============================
  const columns = [
    { field: 'name', headerName: 'Slider Name', width: 150 },
    { field: 'type', headerName: 'Slider Type', width: 150 },
    {
      field: 'typeId.name',
      headerName: 'Sub Type',
      width: 160,
      valueGetter: (params) => {
        console.log(params.row.typeId.name);
        let result = [];
        if (params.row.typeId) {
          if (params.row.typeId.name) {
            result.push(params.row.typeId.name);
          }
        } else {
          result = ['Unknown'];
        }
        return result.join(', ');
      },
    },
    {
      field: 'image',
      headerName: 'Slider Image',
      width: 250,
      renderCell: (params) => (
        <img
          style={{ width: '100%', height: 'fit-content' }}
          src={params.value}
        />
      ),

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
        <title>Dashboard | Slider </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="Slider"
        url="/slider/add-slider"
        title="Slider View"
      />
    </>
  );
}
Slider.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
