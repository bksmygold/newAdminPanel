import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Modal,
  Box,
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
  getReturnReason,
  deleteReturnReason,
  postReturnReason,
  updateReturnReason,
} from 'src/apis/returnReason';
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
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
//=======================================================
export default function ReturnReason() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      title: '',
      type: '',
    },
    validationSchema: yup.object({
      title: yup.string('Enter Title').required('Title is required'),
      type: yup.string('Enter type').required('type is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      title: '',
      type: '',
    },
    validationSchema: yup.object({
      title: yup.string('Enter Title').required('Title is required'),
      type: yup.string('Enter type').required('type is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Return Reason',
    queryFn: () => getReturnReason(),
  });

  const addMutation = useMutation({
    mutationFn: postReturnReason,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal(
        'Return Reason Added !',
        'Continue with the e-comm panel',
        'success'
      );
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateReturnReason,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal(
        'Return Reason Updated !',
        'Continue with the e-comm panel',
        'success'
      );
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
        deleting={deleteReturnReason}
        url="/returnreason/view-returnreason"
      />
    );
  };
  //==========
 const columns = [
   {
     field: 'title',
     headerName: 'return reason title',
     width: 150,
     editable: true,      flex:1
   },
   {
     field: 'type',
     headerName: 'Type',
     width: 150,
     editable: true,      flex:1
   },
  
   {
     field: 'edit',
     headerName: 'Edit',
     width: 250,
     editable: true,
     renderCell: editButton,      flex:1
   },
   {
     field: 'delete',
     headerName: 'Delete',
     width: 250,
     editable: true,
     renderCell: deleteButton,      flex:1
   },
 ];
 console.log(query.data.docs);
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Return Reason </title>
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
              Edit Return Reason
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Return Reason for products used in E-commerce
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
                Return Reason Description
              </Typography>
              <CustomTextField
                multiline
                error={
                  editFormik.touched.title && Boolean(editFormik.errors.title)
                }
                helperText={editFormik.touched.title && editFormik.errors.title}
                id="title"
                name="title"
                value={editFormik.values.title}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label=" title"
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
                Return Reason Type
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="type"
                  value={editFormik.values.type}
                  onChange={editFormik.handleChange}
                  name="type"
                >
                  <MenuItem key="collection" value="item">
                    Item
                  </MenuItem>
                  <MenuItem key="category" value="order">
                    Order
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Return Reason
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
              Add Return Reason
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Return Reason for products used in E-commerce
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
                Return Reason Description
              </Typography>
              <CustomTextField
                multiline
                error={
                  addFormik.touched.title && Boolean(addFormik.errors.title)
                }
                helperText={addFormik.touched.title && addFormik.errors.title}
                id="title"
                name="title"
                value={addFormik.values.title}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label=" title"
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
                Return Reason Type
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="type"
                  value={addFormik.values.type}
                  onChange={addFormik.handleChange}
                  name="type"
                >
                  <MenuItem key="collection" value="item">
                    Item
                  </MenuItem>
                  <MenuItem key="category" value="order">
                    Order
                  </MenuItem>
                </Select>
              </CustomFormControl>
              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Return Reason
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
            Return Reason View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Return Reason
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
ReturnReason.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
