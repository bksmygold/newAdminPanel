// import Head from 'next/head';
// import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
// import { Box, Container, Typography, Grid, Button } from '@mui/material';
// import { DashboardLayout } from '../../../components/layout/dashboard-layout';
// import { InfoCard } from '../../../components/cards/infoCard';
// import { DataGrid, gridClasses } from '@mui/x-data-grid';
// import { alpha, styled } from '@mui/material/styles';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Table from '../../../components/utility/table';
// import { useRouter } from 'next/router';
// import { getVideo, deleteVideo } from 'src/apis/howToVideo';
// import { useQuery } from '@tanstack/react-query';
// import Loading from 'src/components/loading';
// import DeleteSpinner from 'src/components/deleteSpinner';
// import { useTheme } from "@mui/styles"
// import AddIcon from '@mui/icons-material/Add';
// import Link from 'next/link';
// //=======================================================
// export default function ViewVideo() {
//   const router = useRouter();
//   const theme = useTheme()
//   //=======================
//   const editButton = (params) => {
//     return (
//       <strong>
//         <Button
//           variant="contained"
//           sx={theme.custom.editButton}
//           size="small"
//           onClick={() => {
//             router.push(`/promotional-setting/how-to-video/edit-how-to-video/?id=${params.id}`);
//           }}
//         >
//                   Edit <EditIcon sx={theme.custom.editButton.iconStyle}/>

//         </Button>
//       </strong>
//     );
//   };
//   //==========
//   const deleteButton = (params) => {
//     return (
//       <DeleteSpinner
//         id={params.id}
//         deleting={deleteVideo}
//         url={'/how-to-video/view-how-to-video'}
//       />
//     );
//   };
//   //=======================
//   const query = useQuery({
//     queryKey: 'howToVideo',
//     queryFn: getVideo,
//     onSuccess: (res) => console.log('Success ---', res.message),
//     onError: (err) => console.log('Error --->', err),
//   });
//   if (query.isLoading) return <Loading />;
//   console.log(query.data.docs);
//   //===============================
//   const columns = [
//     {
//       field: 'title',
//       headerName: 'Video Title',
//       width: 250,
//       editable: true, flex: 1,
//       renderCell: (params) => (
//         <p style={{
//           textDecoration: "none",
//           fontWeight: "bold",
//           color: "#b57a1d"
//         }}>{params.value}</p>
//       )
//     },
//     {
//       field: 'category',
//       headerName: 'Video Category',
//       width: 250,
//       editable: true, flex: 1
//     },
//     {
//       field: 'language',
//       headerName: 'Video Language',
//       width: 250,
//       editable: true, flex: 1
//     },
//     {
//       field: 'url',
//       headerName: 'Video',
//       width: 250,
//       editable: true,
//       renderCell: (params) =>
//       (
//         <a
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             textDecoration: "none",
//             fontWeight: "bold",
//             color: "#b57a1d"
//           }}
//           href={params.value}>Video</a>
//         // <Link href={params.value} />
//         // <a href={params.value} />
//       )
//       ,
//       flex: 1
//     },

//     {
//       field: 'edit',
//       headerName: 'Edit',
//       width: 150,
//       editable: true,
//       renderCell: editButton,
//     },
//     {
//       field: 'delete',
//       headerName: 'Delete',
//       width: 150,
//       editable: true,
//       renderCell: deleteButton,
//     },
//   ];

//   //=======================================================
//   return (
//     <>
//       {/* ------------------------------ */}
//       <Head>
//         <title>Dashboard | How-To-Video </title>
//       </Head>
//       <Grid
//         sx={{
//           marginLeft: 5,
//           marginTop: 5,
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//         container
//       >
//         <Grid item>
//           <Typography variant="h5" sx={{ color: '#8B5704', marginBottom: 3 }}>
//             Video View
//           </Typography>
//         </Grid>
//         <Grid item>
//           <Button sx={theme.custom.addButton} onClick={() => router.push("/promotional-setting/how-to-video/add-how-to-video")}>
//             Create how-to-video
//             <AddIcon sx={{ marginLeft: 1 }} />
//           </Button>
//         </Grid>
//       </Grid>{' '}
//       <Table
//         rows={query.data.docs}
//         columns={columns}
//         create="How-To-Video"
//         url="/how-to-video/add-how-to-video"
//         title="How-To-VideoView"
//       />
//     </>
//   );
// }
// ViewVideo.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;



import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Modal,
  TextField,
  Select,
  MenuItem
} from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getCollection,
  deleteCollection,
  postCollection,
  updateCollection,
} from 'src/apis/collection';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'Formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/styles';
import { CustomTextField, CustomFormControl } from 'src/components/customMUI';
import { getVideo, postVideo, updateVideo } from 'src/apis/howToVideo';

//=======================================================
export default function TestimonialVideo() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      title: "",
      language: "",
      category: "testimonial",
      video: [],
    },
    validationSchema: yup.object({
      title: yup.string("Enter how-to-video title").required("how-to-video title  is required"),
      language: yup.string("Enter language").required("language is required"),
      // category: yup.string("Enter category Name").required("categoryis required"),
    }),
    onSubmit: (values) => {
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      title: "",
      language: "",
      category: "testimonial",
      video: [],
    },
    validationSchema: yup.object({
      title: yup.string("Enter how-to-video title").required("how-to-video title  is required"),
      language: yup.string("Enter language").required("language is required"),
      // category: yup.string("Enter category Name").required("categoryis required"),
    }),
    onSubmit: (values) => {
      // console.log("id-->",id)
      editMutation.mutate({ data: values, id: id });
      },
  });

  const query = useQuery({
    queryKey: 'VideoTestimonial',
    queryFn: () => getVideo("testimonial"),
  });

  const addMutation = useMutation({
    mutationFn: postVideo,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Video Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateVideo,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Video Updated !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  if (query.isLoading) return <Loading />;
  //===============

  const editButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={theme.custom.editButton}
          size="small"
          onClick={() => {
            // console.log("params ---", params.row);
            setId(params.row.id);
            editFormik.setValues(params.row);
            setShowEdit(params.row);
          }}
        >
          Edit <EditIcon sx={theme.custom.editButton.iconStyle} />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteCollection}
        url="/collection/view-collection"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'title',
      headerName: 'Video Title',
      width: 250,
      editable: true, flex: 1,
      renderCell: (params) => (
        <p style={{
          textDecoration: "none",
          fontWeight: "bold",
          color: "#b57a1d"
        }}>{params.value}</p>
      )
    },
    {
      field: 'category',
      headerName: 'Video Category',
      width: 250,
      editable: true, flex: 1
    },
    {
      field: 'language',
      headerName: 'Video Language',
      width: 250,
      editable: true, flex: 1
    },
    {
      field: 'url',
      headerName: 'Video',
      width: 250,
      editable: true,
      renderCell: (params) =>
      (
        <a
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "#b57a1d"
          }}
          href={params.value}>Video</a>
        // <Link href={params.value} />
        // <a href={params.value} />
      )
      ,
      flex: 1
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
        <title>Dashboard | Testimonial </title>
      </Head>
      {/* ================= EDIT ================================== */}
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={!!showEdit}
        onClose={() => setShowEdit(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={theme.custom.modal}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: '#8B5704',
                fontWeight: 'bolder',
              }}
            >
              Edit Testimonial
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                fontWeight: 'bold',
              }}
            >
              Edit Testimonial for products used in E-commerce
            </Typography>

            <form onSubmit={editFormik.handleSubmit}>
              <CustomTextField
                error={editFormik.touched.title && Boolean(editFormik.errors.title)}
                helperText={editFormik.touched.title && editFormik.errors.title}
                id="title"
                name="title"
                value={editFormik.values.title}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Video Title"
                sx={{ mt: 5 }}
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Video Language
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="language"
                  value={editFormik.values.language}
                  onChange={editFormik.handleChange}
                  name="language"
                >
                  <MenuItem key="Hi" value="hindi">
                    Hindi
                  </MenuItem>
                  <MenuItem key="En" value="english">
                    English
                  </MenuItem>
                </Select>
              </CustomFormControl>


              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Upload Video
              </Typography>
              <CustomTextField
                // error={addFormik.touched.icon && Boolean(addFormik.errors.icon)}
                // helperText={addFormik.touched.icon && addFormik.errors.icon}
                type="file"
                id="video"
                name="video"
                // value={addFormik.values.video}
                onChange={(e) => {
                  editFormik.setFieldValue("video", e.target.files[0])
                }}
                fullWidth
                variant="outlined"
              />

              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={[theme.custom.editButton, { mt: 2 }]}
              >
                Edit how-to-video
              </LoadingButton>
            </form>
          </Grid>
        </Box>
      </Modal>
      {/* =============== ADD ================================================ */}
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={showAdd}
        onClose={() => setShowAdd(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={theme.custom.modal}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: '#8B5704',
                fontWeight: 'bolder',
              }}
            >
              Add Testimonial
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                fontWeight: 'bold',
              }}
            >
              Add Testimonial for products used in E-commerce
            </Typography>

            <form onSubmit={addFormik.handleSubmit}>
              <CustomTextField
                error={addFormik.touched.title && Boolean(addFormik.errors.title)}
                helperText={addFormik.touched.title && addFormik.errors.title}
                id="title"
                name="title"
                value={addFormik.values.title}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Video Title"
                sx={{ mt: 5 }}

              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Video Language
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="language"
                  value={addFormik.values.language}
                  onChange={addFormik.handleChange}
                  name="language"
                >
                  <MenuItem key="Hi" value="hindi">
                    Hindi
                  </MenuItem>
                  <MenuItem key="En" value="english">
                    English
                  </MenuItem>
                </Select>
              </CustomFormControl>


              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Upload Video
              </Typography>
              <CustomTextField
                // error={addFormik.touched.icon && Boolean(addFormik.errors.icon)}
                // helperText={addFormik.touched.icon && addFormik.errors.icon}
                type="file"
                id="video"
                name="video"
                // value={addFormik.values.video}
                onChange={(e) => {
                  addFormik.setFieldValue("video", e.target.files[0])
                }}
                fullWidth
                variant="outlined"
              />

              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={[theme.custom.editButton, { mt: 2 }]}
              >
                Add how-to-video
              </LoadingButton>
            </form>
          </Grid>
        </Box>
      </Modal>
      {/* =============================================================== */}
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
            Testimonial View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Testimonial
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
TestimonialVideo.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
