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
  getPolicy,
  deletePolicy,
  postPolicy,
  updatePolicy,
} from 'src/apis/policy';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTheme} from '@mui/styles'
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
//=======================================================
export default function Policy() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      title: '',
      description: '',
      consignmentRequired: false,
    },
    validationSchema: yup.object({
      title: yup.string('Enter Title').required('Title is required'),
      description: yup
        .string('Enter description')
        .required('description is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      title: '',
      description: '',
      consignmentRequired: false,
    },
    validationSchema: yup.object({
      title: yup.string('Enter Title').required('Title is required'),
      description: yup
        .string('Enter description')
        .required('description is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Policy',
    queryFn: () => getPolicy(),
  });

  const addMutation = useMutation({
    mutationFn: postPolicy,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Policy Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updatePolicy,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Policy Updated !', 'Continue with the e-comm panel', 'success');
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
        deleting={deletePolicy}
        url="/policy/view-policy"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'title',
      headerName: 'policy title',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'description',
      headerName: 'description',
      width: 450,
      editable: true,      flex:1
    },
    {
      field: 'consignmentRequired',
      headerName: 'Consignment',
      width: 100,
      editable: true,      flex:1
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
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Policy </title>
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
              Edit Policy
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Policy for products used in E-commerce
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
                Policy title
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="title"
                  value={editFormik.values.title}
                  onChange={editFormik.handleChange}
                  name="title"
                >
                  <MenuItem key="collection" value="privacy">
                    Privacy
                  </MenuItem>
                  <MenuItem key="category" value="terms">
                    Terms
                  </MenuItem>
                  <MenuItem key="variety" value="shipping">
                    Shipping
                  </MenuItem>
                  <MenuItem key="item" value="cancellation">
                    Cancellation
                  </MenuItem>
                  <MenuItem key="variety" value="return">
                    Return
                  </MenuItem>
                  <MenuItem key="item" value="refund">
                    Refund
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Policy description
              </Typography>
              <CustomTextField
                multiline
                error={
                  editFormik.touched.description &&
                  Boolean(editFormik.errors.description)
                }
                helperText={
                  editFormik.touched.description &&
                  editFormik.errors.description
                }
                id="description"
                name="description"
                value={editFormik.values.description}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label=" description"
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
                Consignment
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="consignmentRequired"
                  value={editFormik.values.consignmentRequired}
                  onChange={editFormik.handleChange}
                  name="consignmentRequired"
                >
                  <MenuItem key="weight" value={true}>
                    yes
                  </MenuItem>
                  <MenuItem key="value" value={false}>
                    no
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Policy
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
              Add Policy
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Policy for products used in E-commerce
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
                Policy title
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="title"
                  value={addFormik.values.title}
                  onChange={addFormik.handleChange}
                  name="title"
                >
                  <MenuItem key="collection" value="privacy">
                    Privacy
                  </MenuItem>
                  <MenuItem key="category" value="terms">
                    Terms
                  </MenuItem>
                  <MenuItem key="variety" value="shipping">
                    Shipping
                  </MenuItem>
                  <MenuItem key="item" value="cancellation">
                    Cancellation
                  </MenuItem>
                  <MenuItem key="variety" value="return">
                    Return
                  </MenuItem>
                  <MenuItem key="item" value="refund">
                    Refund
                  </MenuItem>
                </Select>
              </CustomFormControl>

              <Typography
                variant="body1"
                sx={{
                  color: '#8B5704',
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Policy description
              </Typography>
              <CustomTextField
                multiline
                error={
                  addFormik.touched.description &&
                  Boolean(addFormik.errors.description)
                }
                helperText={
                  addFormik.touched.description && addFormik.errors.description
                }
                id="description"
                name="description"
                value={addFormik.values.description}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label=" description"
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
                Consignment
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="consignmentRequired"
                  value={addFormik.values.consignmentRequired}
                  onChange={addFormik.handleChange}
                  name="consignmentRequired"
                >
                  <MenuItem key="weight" value={true}>
                    yes
                  </MenuItem>
                  <MenuItem key="value" value={false}>
                    no
                  </MenuItem>
                </Select>
              </CustomFormControl>
              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Policy
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
            Policy View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Policy
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
Policy.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
