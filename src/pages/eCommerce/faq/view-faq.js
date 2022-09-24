// import Head from "next/head";
// import { DashboardSidebar } from "src/components/dashboard-sidebar";
// import { Box, Container, Typography, Grid, Button } from "@mui/material";
// import { DashboardLayout } from "../../components/dashboard-layout";
// import { InfoCard } from "../../components/infoCard";
// import { DataGrid, gridClasses } from "@mui/x-data-grid";
// import { alpha, styled } from "@mui/material/styles";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Table from "../../components/utility/table";
// import { useRouter } from "next/router";
// import { getFaq, deleteFaq } from "src/apis/faq";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "src/components/loading";
// import DeleteSpinner from "src/components/deleteSpinner";

// //=======================================================
// export default function Faq() {
//   const router = useRouter();
//   //=======================
//   const editButton = (params) => {
//     return (
//       <strong>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "white", color: "#8B5704" }}
//           size="small"
//           onClick={() => {
//             router.push(`/faq/edit-faq/?id=${params.id}`);
//           }}
//         >
//           <EditIcon />
//         </Button>
//       </strong>
//     );
//   };
//   //==========
//   const deleteButton = (params) => {
//     return <DeleteSpinner id={params.id} deleting={deleteFaq} url={"/faq/view-faq"} />;
//   };
//   //=======================
//   const query = useQuery({
//     queryKey: "faq",
//     queryFn: getFaq,
//     onSuccess: (res) => console.log("Success ---", res.message),
//     onError: (err) => console.log("Error --->", err),
//   });
//   if (query.isLoading) return <Loading />;

//   //===============================
//   const columns = [
//     {
//       field: "question",
//       headerName: "Faq question",
//       width: 250,
//       editable: true,
//     },
//     {
//       field: "answer",
//       headerName: "Faq answer",
//       width: 250,
//       editable: true,
//     },

//     {
//       field: "edit",
//       headerName: "Edit",
//       width: 150,
//       editable: true,
//       renderCell: editButton,
//     },
//     {
//       field: "delete",
//       headerName: "Delete",
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
//         <title>Dashboard | faq </title>
//       </Head>

//       <Table
//         rows={query.data.docs}
//         columns={columns}
//         create="FAQ"
//         url="/faq/add-faq"
//         title="FAQ View"
//       />
//     </>
//   );
// }
// Faq.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;


import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar/dashboard-sidebar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Modal,
  TextField,
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
import { getFaq, deleteFaq, postFaq, updateFaq } from 'src/apis/faq';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/styles';

//=======================================================
const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
//=======================================================
export default function FAQ() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },
    validationSchema: yup.object({
      question: yup.string('Enter question').required('question is required'),
      answer: yup.string('Enter answer').required('answer is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },
    validationSchema: yup.object({
      question: yup.string('Enter question').required('question is required'),
      answer: yup.string('Enter answer').required('answer is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      editMutation.mutate({ data: values, id: id });
    },
  });
  const query = useQuery({
    queryKey: 'FAQ',
    queryFn: () => getFaq(),
  });

  const addMutation = useMutation({
    mutationFn: postFaq,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('FAQ Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateFaq,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('FAQ Updated !', 'Continue with the e-comm panel', 'success');
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
      <DeleteSpinner id={params.id} deleting={deleteFaq} url="/faq/view-faq" />
    );
  };
  //==========
 const columns = [
    {
      field: "question",
      headerName: "Faq question",
      width: 250,
      editable: true,      flex:1
    },
    {
      field: "answer",
      headerName: "Faq answer",
      width: 250,
      editable: true,      flex:1
    },

    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      editable: true,
      renderCell: editButton,      flex:1
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      editable: true,
      renderCell: deleteButton,      flex:1
    },
  ];


  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | FAQ </title>
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
              Edit FAQ
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit FAQ for products used in E-commerce
            </Typography>

            <form onSubmit={editFormik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                FAQ Question
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.question &&
                  Boolean(editFormik.errors.question)
                }
                helperText={
                  editFormik.touched.question && editFormik.errors.question
                }
                id="question"
                name="question"
                value={editFormik.values.question}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="question"
              />

              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                FAQ Answer
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.answer && Boolean(editFormik.errors.answer)
                }
                helperText={
                  editFormik.touched.answer && editFormik.errors.answer
                }
                id="answer"
                name="answer"
                value={editFormik.values.answer}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="answer"
              />
              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit FAQ
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
              Add FAQ
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add FAQ for products used in E-commerce
            </Typography>

            <form onSubmit={addFormik.handleSubmit}>
              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                FAQ Question
              </Typography>
              <CustomTextField
                error={
                  addFormik.touched.question &&
                  Boolean(addFormik.errors.question)
                }
                helperText={
                  addFormik.touched.question && addFormik.errors.question
                }
                id="question"
                name="question"
                value={addFormik.values.question}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="question"
              />

              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                FAQ Answer
              </Typography>
              <CustomTextField
                error={
                  addFormik.touched.answer && Boolean(addFormik.errors.answer)
                }
                helperText={addFormik.touched.answer && addFormik.errors.answer}
                id="answer"
                name="answer"
                value={addFormik.values.answer}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="answer"
              />

              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add FAQ
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
            FAQ View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create FAQ
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
FAQ.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
