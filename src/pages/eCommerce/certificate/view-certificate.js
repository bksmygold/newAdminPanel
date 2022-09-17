import Head from 'next/head';
import { DashboardSidebar } from 'src/components/dashboard-sidebar';
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
import { DashboardLayout } from '../../../components/dashboard-layout';
import { InfoCard } from '../../../components/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getCertificate,
  deleteCertificate,
  postCertificate,
  updateCertificate,
} from 'src/apis/certificate';
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

const CustomFormControl = styled(FormControl)`
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
export default function Certificate() {
  const router = useRouter();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
     name:""
    },
    validationSchema: yup.object({
      name: yup.string('Enter name').required('Name is required'),
      
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
      name: yup.string('Enter name').required('Name is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Certificate',
    queryFn: () => getCertificate(),
  });

  const addMutation = useMutation({
    mutationFn: postCertificate,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Certificate Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateCertificate,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal(
        'Certificate Updated !',
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
          sx={{
            background: 'linear-gradient(43deg, #8b5704, #ddb070)',
            color: 'white',
          }}
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
        deleting={deletePolicy}
        url="/certificate/view-certificate"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'certificate name',
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
        <title>Dashboard | Certificate </title>
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
            background: 'linear-gradient(11deg, rgb(252 252 253), #f5f5f5)',
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
              Edit Certificate
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Certificate for products used in E-commerce
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
                Certificate title
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
                Certificate description
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
                sx={{
                  marginTop: 2,
                  background: 'linear-gradient(43deg, #8b5704, #ddb070)',
                  border: 'none',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#DBA251',
                  },
                }}
              >
                Edit Certificate
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
            background: 'linear-gradient(11deg, rgb(252 252 253), #f5f5f5)',
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
              Add Certificate
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Certificate for products used in E-commerce
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
                Certificate title
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
                Certificate description
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
                sx={{
                  marginTop: 2,
                  background: 'linear-gradient(43deg, #8b5704, #ddb070)',

                  border: 'none',
                  color: 'white',
                }}
              >
                Add Certificate
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
            Certificate View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setShowAdd(true)}
            sx={{
              background: 'linear-gradient(43deg, #8b5704, #ddb070)',
              color: 'white',
            }}
          >
            Create Certificate
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query?.data?.docs} columns={columns} />
    </>
  );
}
Certificate.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
