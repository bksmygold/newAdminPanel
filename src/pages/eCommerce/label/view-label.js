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
import { getLabel, deleteLabel, postLabel, updateLabel } from 'src/apis/label';
import React, { useEffect } from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { getStyle } from 'src/apis/style';
import { useTheme } from '@mui/styles';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
//=======================================================
export default function Label() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================

  const [style, setStyle] = useState([]);

  useEffect(() => {
    getStyle().then((res) => setStyle(res.docs));
  }, []);

  //=======================

  const addFormik = useFormik({
    initialValues: {
      name: '',
      style: '',
      mode: '',
      weight: 0,
      piece: 0,
    },
    validationSchema: yup.object({
      name: yup.string('Enter name').required('Name is required'),
      style: yup.string('Enter style').required('style is required'),
      mode: yup.string('Enter mode').required('mode is required'),
      weight: yup.number('Enter weight').required('weight is required'),
      piece: yup.number('Enter piece').required('piece is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      name: '',
      style: '',
      mode: '',
      weight: 0,
      piece: 0,
    },
    validationSchema: yup.object({
      name: yup.string('Enter name').required('Name is required'),
      style: yup.string('Enter style').required('style is required'),
      mode: yup.string('Enter mode').required('mode is required'),
      weight: yup.number('Enter weight').required('weight is required'),
      piece: yup.number('Enter piece').required('piece is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Label',
    queryFn: () => getLabel(),
  });

  const addMutation = useMutation({
    mutationFn: postLabel,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Label Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateLabel,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Label Updated !', 'Continue with the e-comm panel', 'success');
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
        deleting={deleteLabel}
        url="/eCommerce/label/view-label"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'label name',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'mode',
      headerName: 'mode',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'weight',
      headerName: 'weight',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'piece',
      headerName: 'piece',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'style.name',
      headerName: 'style name',
      width: 150,
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
        <title>Dashboard | Label </title>
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
              Edit Label
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Label for products used in E-commerce
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
                Label name
              </Typography>
              <CustomTextField
                multiline
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
                label=" name"
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
                Style
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="consignmentRequired"
                  value={editFormik.values.style}
                  onChange={editFormik.handleChange}
                  name="style"
                >
                  {style.map((x) => (
                    <MenuItem key="weight" value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
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
                Mode
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="mode"
                  value={editFormik.values.mode}
                  onChange={editFormik.handleChange}
                  name="mode"
                >
                  <MenuItem key="weight" value="weight">
                    Weight
                  </MenuItem>
                  <MenuItem key="value" value="value">
                    Value
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
                Weight
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.weight && Boolean(editFormik.errors.weight)
                }
                helperText={
                  editFormik.touched.weight && editFormik.errors.weight
                }
                id="weight"
                name="weight"
                value={editFormik.values.weight}
                onChange={editFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
                label=" weight"
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
                piece
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.piece && Boolean(editFormik.errors.piece)
                }
                helperText={editFormik.touched.piece && editFormik.errors.piece}
                id="piece"
                name="piece"
                value={editFormik.values.piece}
                onChange={editFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
                label=" piece"
              />

              <LoadingButton
                disabled={editMutation.isLoading}
                loading={editMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Edit Label
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
              Add Label
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Label for products used in E-commerce
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
                Label name
              </Typography>
              <CustomTextField
                multiline
                error={addFormik.touched.name && Boolean(addFormik.errors.name)}
                helperText={addFormik.touched.name && addFormik.errors.name}
                id="name"
                name="name"
                value={addFormik.values.name}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
                label=" name"
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
                Style
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="consignmentRequired"
                  value={addFormik.values.style}
                  onChange={addFormik.handleChange}
                  name="style"
                >
                  {style.map((x) => (
                    <MenuItem key="weight" value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
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
                Mode
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="consignmentRequired"
                  value={addFormik.values.mode}
                  onChange={addFormik.handleChange}
                  name="mode"
                >
                  <MenuItem key="weight" value="weight">
                    Weight
                  </MenuItem>
                  <MenuItem key="value" value="value">
                    Value
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
                Weight
              </Typography>
              <CustomTextField
                error={
                  addFormik.touched.weight && Boolean(addFormik.errors.weight)
                }
                helperText={addFormik.touched.weight && addFormik.errors.weight}
                id="weight"
                name="weight"
                value={addFormik.values.weight}
                onChange={addFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
                label=" weight"
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
                piece
              </Typography>
              <CustomTextField
                error={
                  addFormik.touched.piece && Boolean(addFormik.errors.piece)
                }
                helperText={addFormik.touched.piece && addFormik.errors.piece}
                id="piece"
                name="piece"
                value={addFormik.values.piece}
                onChange={addFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
                label=" piece"
              />

              <LoadingButton
                disabled={addMutation.isLoading}
                loading={addMutation.isLoading}
                type="submit"
                sx={theme.custom.addButton}
              >
                Add Label
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
            Label View
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
            Create Label
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query?.data?.docs} columns={columns} />
    </>
  );
}
Label.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
