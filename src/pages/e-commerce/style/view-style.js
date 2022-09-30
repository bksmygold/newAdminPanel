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
import { getStyle, deleteStyle, postStyle, updateStyle } from 'src/apis/style';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState,useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { getMetalGroup } from 'src/apis/metalGroup';
import { useTheme } from '@mui/styles';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
//=======================================================
export default function Style() {
  const router = useRouter();

const theme = useTheme() 
    const [metalGroup, setMetalGroup] = useState([]);

    useEffect(() => {
      getMetalGroup().then((res) => setMetalGroup(res.docs));
    }, []);

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      name: '',
      metalGroup: '',
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
      metalGroup: '',
    },
    validationSchema: yup.object({
      name: yup.string('Enter name').required('Name is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Style',
    queryFn: () => getStyle(),
  });

  console.log('query ---', query?.data?.docs);
  const addMutation = useMutation({
    mutationFn: postStyle,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('Style Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateStyle,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal('Style Updated !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Erro !', 'Continue with the e-comm panel', 'error'),
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
        deleting={deleteStyle}
        url="/eCommerce/style/view-style"
      />
    );
  };
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'style name',
      width: 150,
      editable: true,      flex:1
    },
    {
      field: 'metalGroup.metal',
      headerName: 'Metal Name',
      width: 150,
      editable: true,
      valueGetter: (params) => {
        let result = [];
        if (params.row.metalGroup) {
          if (params.row.metalGroup.metal) {
            if (params.row.metalGroup.metal.name) { 

              result.push(params.row.metalGroup.metal.name);
            }
          }
        } else {
          result = ['Empty'];
        }
        return result.join(', ');
      },      flex:1
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
        <title>Dashboard | Style </title>
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
              Edit Style
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Style for products used in E-commerce
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
                Style Name
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
                Metal Group
              </Typography>
              <CustomFormControl fullWidth>
              
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="metalGroup"
                  value={editFormik.values.metalGroup}
                  onChange={editFormik.handleChange}
                  name="metalGroup"
                >
                  {metalGroup?.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.shortName} {x.metal.name}
                    </MenuItem>
                  ))}
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
                Edit Style
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
              Add Style
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Style for products used in E-commerce
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
                Style Name
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
                Metal Group
              </Typography>
              <CustomFormControl fullWidth>
            
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="metalGroup"
                  value={addFormik.values.metalGroup}
                  onChange={addFormik.handleChange}
                  name="metalGroup"
                >
                  {metalGroup?.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.shortName} {x.metal.name}
                    </MenuItem>
                  ))}
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
                  '&:hover': {
                    backgroundColor: '#DBA251',
                  },
                }}
              >
                Add Style
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
            Style View
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
            Create Style
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query?.data?.docs} columns={columns} />
    </>
  );
}
Style.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
