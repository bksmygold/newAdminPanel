import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import DeleteSpinner from 'src/components/deleteSpinner';
import { deleteSlider, getSlider } from 'src/apis/slider';
import Loading from 'src/components/loading';
import { useTheme } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
//=======================================================
export default function Slider() {
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
            router.push(`/promotionalSetting/slider/edit-slider/?id=${params.id}`);
          }}
        >
          Edit <EditIcon sx={theme.custom.editButton.iconStyle}/>
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
    { field: 'name', headerName: 'Slider Name', width: 150,      flex:1 },
    { field: 'type', headerName: 'Slider Type', width: 150,      flex:1 },
    {
      field: 'typeId.name',
      headerName: 'Sub Type',
      width: 160,      flex:1,
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
      width: 250,      flex:1,
      renderCell: (params) => (
        <div style={{padding:50}}>

          <img
            style={{ width: "100%"  }}
            src={params.value}
          />
        </div>
      ),

      editable: true,
    },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: editButton,      flex:1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: deleteButton,      flex:1
    },
  ];

  console.log(query.data.docs)
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Slider </title>
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
            Slider View
          </Typography>
        </Grid>
        <Grid item>
          <Button sx={theme.custom.addButton} onClick={() => router.push("/promotionalSetting/slider/add-slider")}>
            Create Slider
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
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
