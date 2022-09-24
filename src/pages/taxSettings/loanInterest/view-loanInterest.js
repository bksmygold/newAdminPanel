// import Head from 'next/head';
// import { DashboardSidebar } from 'src/components/dashboard-sidebar';
// import { Box, Container, Typography, Grid, Button } from '@mui/material';
// import { DashboardLayout } from '../../../components/dashboard-layout';
// import { InfoCard } from '../../../components/infoCard';
// import { DataGrid, gridClasses } from '@mui/x-data-grid';
// import { alpha, styled } from '@mui/material/styles';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Table from '../../../components/utility/table';
// import { useRouter } from 'next/router';
// import { getLoanInterest, deleteLoanInterest } from 'src/apis/loanInterest';
// import { useQuery } from '@tanstack/react-query';
// import Loading from 'src/components/loading';
// import DeleteSpinner from 'src/components/deleteSpinner';

// //=======================================================
// export default function LoanInterest() {
//   const router = useRouter();
//   //=======================
//   const editButton = (params) => {
//     return (
//       <strong>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: 'white', color: '#8B5704' }}
//           size="small"
//           onClick={() => {
//             router.push(`/loanInterest/edit-loanInterest/?id=${params.id}`);
//           }}
//         >
//           <EditIcon />
//         </Button>
//       </strong>
//     );
//   };
//   //==========
//   const deleteButton = (params) => {
//     return (
//       <DeleteSpinner
//         id={params.id}
//         deleting={deleteLoanInterest}
//         url={'/loanInterest/view-loanInterest'}
//       />
//     );
//   };
//   //=======================
//   const query = useQuery({
//     queryKey: 'getLoanInterest',
//     queryFn: getLoanInterest,
//     onSuccess: (res) => console.log('Success ---', res.message),
//     onError: (err) => console.log('Error --->', err),
//   });
//   if (query.isLoading) return <Loading />;

//   //===============================
//   const columns = [
//     {
//       field: 'minMonth',
//       headerName: 'Minimum Month',
//       width: 250,
//       editable: true,
//     },
//     {
//       field: 'maxMonth',
//       headerName: 'Maximum Month',
//       width: 250,
//       editable: true,
//     },
//     {
//       field: 'interest',
//       headerName: 'Interest',
//       width: 250,
//       editable: true,
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
//         <title>Dashboard | Loan Interest </title>
//       </Head>

//       <Table
//         rows={query.data.docs}
//         columns={columns}
//         create="Loan Interest"
//         url="/loanInterest/add-loanInterest"
//         title="Loan Interest View"
//       />
//     </>
//   );
// }
// LoanInterest.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;


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
  getLoanInterest,
  deleteLoanInterest,
  postLoanInterest,
  updateLoanInterest,
} from 'src/apis/loanInterest';
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
export default function LoanInterest() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      minMonth: 0,
      maxMonth: 0,
      interest: 0,
    },
    validationSchema: yup.object({
      minMonth: yup.number("Enter minimum month").required("minimum month is required"),
      maxMonth: yup.number("Enter maximum month").required("maximum monthis required"),
      interest: yup.number("Enter Interest").required("Interest is required"),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      minMonth: 0,
      maxMonth: 0,
      interest: 0,
    },
    validationSchema: yup.object({
      minMonth: yup.number("Enter minimum month").required("minimum month is required"),
      maxMonth: yup.number("Enter maximum month").required("maximum monthis required"),
      interest: yup.number("Enter Interest").required("Interest is required"),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Loan Interest',
    queryFn: () => getLoanInterest(),
  });

  const addMutation = useMutation({
    mutationFn: postLoanInterest,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Loan Interest Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateLoanInterest,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Loan Interest Updated !', 'Continue with the e-comm panel', 'success');
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
        deleting={deleteLoanInterest}
      />
    );
  };
  //==========
   const columns = [
    {
      field: 'minMonth',
      headerName: 'Minimum Month',
      width: 150,
      editable: true,
    },
    {
      field: 'maxMonth',
      headerName: 'Maximum Month',
      width: 150,
      editable: true,
    },
    {
      field: 'interest',
      headerName: 'Interest',
      width: 150,
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
              Edit Loan Interest
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 1,
                fontWeight: 'bold',
              }}
            >
              Edit Loan Interest for products used in E-commerce
            </Typography>

            <form onSubmit={editFormik.handleSubmit}>
            <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Minimum Month
              </Typography>

              <CustomTextField
                error={editFormik.touched.minMonth && Boolean(editFormik.errors.minMonth)}
                helperText={editFormik.touched.minMonth && editFormik.errors.minMonth}
                id="minMonth"
                name="minMonth"
                type="number"
                value={editFormik.values.minMonth}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Min.Month"
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
                Maximum Month
              </Typography>

              <CustomTextField
                error={editFormik.touched.maxMonth && Boolean(editFormik.errors.maxMonth)}
                helperText={editFormik.touched.maxMonth && editFormik.errors.maxMonth}
                id="maxMonth"
                name="maxMonth"
                type="number"
                value={editFormik.values.maxMonth}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Max.Month"
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
                Loan Interest
              </Typography>

              <CustomTextField
                error={editFormik.touched.interest && Boolean(editFormik.errors.interest)}
                helperText={editFormik.touched.interest && editFormik.errors.interest}
                id="interest"
                name="interest"
                type="number"
                value={editFormik.values.interest}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="interest"
              />
              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Loan Interest
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
              Add Loan Interest
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Loan Interest for products used in E-commerce
            </Typography>

            <form onSubmit={addFormik.handleSubmit}>
            <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Minimum Month
              </Typography>

              <CustomTextField
                error={addFormik.touched.minMonth && Boolean(addFormik.errors.minMonth)}
                helperText={addFormik.touched.minMonth && addFormik.errors.minMonth}
                id="minMonth"
                name="minMonth"
                type="number"
                value={addFormik.values.minMonth}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Min.Month"
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
                Maximum Month
              </Typography>

              <CustomTextField
                error={addFormik.touched.maxMonth && Boolean(addFormik.errors.maxMonth)}
                helperText={addFormik.touched.maxMonth && addFormik.errors.maxMonth}
                id="maxMonth"
                name="maxMonth"
                type="number"
                value={addFormik.values.maxMonth}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Max.Month"
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
                Loan Interest
              </Typography>

              <CustomTextField
                error={addFormik.touched.interest && Boolean(addFormik.errors.interest)}
                helperText={addFormik.touched.interest && addFormik.errors.interest}
                id="interest"
                name="interest"
                type="number"
                value={addFormik.values.interest}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="interest"
              />

              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Loan Interest
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
            Loan Interest View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Loan Interest
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
LoanInterest.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
