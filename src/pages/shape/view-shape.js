import Head from 'next/head';
import { DashboardSidebar } from 'src/components/dashboard-sidebar';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Modal,
  TextField,
} from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { InfoCard } from '../../components/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getShape, deleteShape, postShape, updateShape } from 'src/apis/Shape';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

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
export default function Shape() {
  const router = useRouter();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: yup.object({
      name: yup.string('Enter Shape Name').required('Shape is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: yup.object({
      name: yup.string('Enter Shape Name').required('Shape is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Shape',
    queryFn: () => getShape(),
  });

  const addMutation = useMutation({
    mutationFn: postShape,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Shape Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateShape,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Shape Updated !', 'Continue with the e-comm panel', 'success');
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
          sx={{ backgroundColor: '#ddb070', color: 'white' }}
          size="small"
          onClick={() => {
            // console.log("params ---", params.row);
            setId(params.row.id);
            editFormik.setValues(params.row);
            setShowEdit(params.row);
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
        deleting={deleteShape}
        url="/Shape/view-Shape"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'Shape Name',
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
        <title>Dashboard | Shape </title>
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
        <Box
          sx={{
            backgroundColor: 'white',
            // width: "40%",
            // height:"50%",
            p: 8,
            borderRadius: 1,
            boxShadow: '0px 4px 1px 0px #d2c6c6',
            border: '1px solid #d2c6c657',
          }}
        >
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: '#8B5704',
                fontWeight: 'bolder',
              }}
            >
              Edit Shape
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Shape for products used in E-commerce
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
                Shape Type Name
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.name && Boolean(editFormik.errors.name)
                }
                helperText={editFormik.touched.name && editFormik.errors.name}
                id="name"
                name="name"
                value={editFormik.values.name}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Shape Type name"
              />

              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={{
                  marginTop: 2,
                  backgroundColor: '#DDB070',
                  border: 'none',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#DBA251',
                  },
                }}
              >
                Edit Shape
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
        <Box
          sx={{
            backgroundColor: 'white',
            // width: "40%",
            // height:"50%",
            p: 8,
            borderRadius: 1,
            boxShadow: '0px 4px 1px 0px #d2c6c6',
            border: '1px solid #d2c6c657',
          }}
        >
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: '#8B5704',
                fontWeight: 'bolder',
              }}
            >
              Add Shape
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Shape for products used in E-commerce
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
                Shape Type Name
              </Typography>
              <CustomTextField
                error={addFormik.touched.name && Boolean(addFormik.errors.name)}
                helperText={addFormik.touched.name && addFormik.errors.name}
                id="name"
                name="name"
                value={addFormik.values.name}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Shape Type name"
              />

              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={{
                  marginTop: 2,
                  backgroundColor: '#DDB070',
                  border: 'none',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#DBA251',
                  },
                }}
              >
                Add Shape
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
            Shape View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setShowAdd(true)}
            sx={{ backgroundColor: '#8B5704', color: 'white' }}
          >
            Create Shape
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
Shape.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
