import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { InfoCard } from '../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../components/utility/table';
import { useRouter } from 'next/router';
import { getVideo, deleteVideo } from 'src/apis/howToVideo';
import { useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';

//=======================================================
export default function ViewVideo() {
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
            router.push(`/how-to-video/edit-how-to-video/?id=${params.id}`);
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
        deleting={deleteVideo}
        url={'/how-to-video/view-how-to-video'}
      />
    );
  };
  //=======================
  const query = useQuery({
    queryKey: 'howToVideo',
    queryFn: getVideo,
    onSuccess: (res) => console.log('Success ---', res.message),
    onError: (err) => console.log('Error --->', err),
  });
  if (query.isLoading) return <Loading />;
  console.log(query.data.data.data);
  //===============================
  const columns = [
    {
      field: 'title',
      headerName: 'Video Title',
      width: 250,
      editable: true,      flex:1
    },
    {
      field: 'category',
      headerName: 'Video Category',
      width: 250,
      editable: true,      flex:1
    },
    {
      field: 'language',
      headerName: 'Video Language',
      width: 250,
      editable: true,      flex:1
    },
    {
      field: 'url',
      headerName: 'Video',
      width: 250,
      editable: true,
      renderCell: (params) => {
        <a target="_blank" rel="noreferrer" href={params.value} />;
      },      flex:1
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
        <title>Dashboard | How-To-Video </title>
      </Head>

      <Table
        rows={query.data.docs}
        columns={columns}
        create="How-To-Video"
        url="/how-to-video/add-how-to-video"
        title="How-To-VideoView"
      />
    </>
  );
}
ViewVideo.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
