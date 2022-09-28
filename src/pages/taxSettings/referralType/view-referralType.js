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
  getReferralType,
  deleteReferralType,
  postReferralType,
  updateReferralType,
} from 'src/apis/referraltype';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { getMetalGroup } from 'src/apis/metalGroup';

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
export default function ReferralType() {
  const router = useRouter();

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
      userType: '',
      referredBonus: 0,
      joiningBonus: {
        min: 0,
        max: 0,
      },
      criteria: '',
    },
    validationSchema: yup.object({
      userType: yup.string('Enter User Type').required('user type is required'),
      referredBonus: yup
        .number('Enter  referred bonus')
        .required('referred bonus is required'),
      criteria: yup.string('Enter  criteria ').required('criteria is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      userType: '',
      referredBonus: 0,
      joiningBonus: {
        min: 0,
        max: 0,
      },
      criteria: '',
    },
    validationSchema: yup.object({
      userType: yup.string('Enter User Type').required('user type is required'),
      referredBonus: yup
        .number('Enter  referred bonus')
        .required('referred bonus is required'),
      criteria: yup.string('Enter  criteria ').required('criteria is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'ReferralType',
    queryFn: () => getReferralType(),
  });

  console.log('query ---', query?.data?.docs);
  const addMutation = useMutation({
    mutationFn: postReferralType,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal(
        'Referral Type Added !',
        'Continue with the e-comm panel',
        'success'
      );
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateReferralType,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal(
        'Referral Type Updated !',
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
        deleting={deleteReferralType}
        url="/promotionalSetting/referralType/view-referralType"
      />
    );
  };
  //==========
    const columns = [
      {
        field: 'userType',
        headerName: 'user type ',
        width: 150,      flex:1,
        renderCell: (params) => (
          <p style={{ color: '#925F0F', fontWeight: 600 }}>{params.value}</p>
        ),
      },
      {
        field: 'joiningBonus.min',
        headerName: 'joining bonus min.',
        width: 150,
        valueGetter: (params) => {
          let res = [];
          if (params.row.joiningBonus) {
            if (params.row.joiningBonus.min) {
              res.push(params.row.joiningBonus.min);
            }
          } else {
            res.push('empty');
          }
          return res;
        },      flex:1
      },
      {
        field: 'joiningBonus.max',
        headerName: 'joining bonus max.(%)',
        width: 220,
        valueGetter: (params) => {
          let res = [];
          if (params.row.joiningBonus) {
            if (params.row.joiningBonus.max) {
              res.push(params.row.joiningBonus.max);
            }
          } else {
            res.push('empty');
          }
          return res;
        },      flex:1
      },
      {
        field: 'referredBonus',
        headerName: 'referred bonus',
        width: 150,      flex:1
      },
   
      {
        field: 'criteria',
        headerName: 'criteria',
        width: 150,      flex:1
      },

      {
        field: 'edit',
        headerName: 'Edit',
        width: 150,
        editable: true,
        renderCell: editButton,      flex:1
      },
      // {
      //   field: 'delete',
      //   headerName: 'Delete',
      //   width: 150,
      //   editable: true,
      //   renderCell: deleteButton,      flex:1
      // },
    ];

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Referral Type </title>
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
              Edit Referral Type
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Referral Type for influencers
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
                User Type
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="userType"
                  value={editFormik.values.userType}
                  onChange={editFormik.handleChange}
                  name="userType"
                >
                  <MenuItem key="customer" value="customer">
                    Customer
                  </MenuItem>
                  <MenuItem key="sales_offer" value="sales_offer">
                    Sales Offers
                  </MenuItem>
                  <MenuItem key="sales_associate" value="sales_associate">
                    Sales Associate
                  </MenuItem>
                  <MenuItem key="vip" value="vip">
                    VIP
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
                Referred Bonus
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.referredBonus &&
                  Boolean(editFormik.errors.referredBonus)
                }
                helperText={
                  editFormik.touched.referredBonus && editFormik.errors.referredBonus
                }
                id="referredBonus"
                type="number"
                name="referredBonus"
                value={editFormik.values.referredBonus}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
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
                Minimum Percentage
              </Typography>
              <CustomTextField
                // error={editFormik.touched.min && Boolean(editFormik.errors.min)}
                // helperText={editFormik.touched.min && editFormik.errors.min}
                id="joiningBonus.min"
                name="joiningBonus.min"
                value={editFormik.values.joiningBonus.min}
                onChange={editFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
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
                Maximum Amount
              </Typography>
              <CustomTextField
                // error={editFormik.touched.max && Boolean(editFormik.errors.max)}
                // helperText={editFormik.touched.max && editFormik.errors.max}
                id="joiningBonus.max"
                name="joiningBonus.max"
                value={editFormik.values.joiningBonus.max}
                onChange={editFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
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
                Criteria
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="criteria"
                  value={editFormik.values.criteria}
                  onChange={editFormik.handleChange}
                  name="criteria"
                >
                  <MenuItem key="customer" value="plan_maturity">
                    Plan Maturity
                  </MenuItem>
                  <MenuItem key="sales_offer" value="download_subscriptions">
                    Download Subscriptions
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
                Edit Referral Type
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
              Add Referral Type
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Referral Type for products used in E-commerce
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
                User Type
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="userType"
                  value={addFormik.values.userType}
                  onChange={addFormik.handleChange}
                  name="userType"
                >
                  <MenuItem key="customer" value="customer">
                    Customer
                  </MenuItem>
                  <MenuItem key="sales_offer" value="sales_offer">
                    Sales Offers
                  </MenuItem>
                  <MenuItem key="sales_associate" value="sales_associate">
                    Sales Associate
                  </MenuItem>
                  <MenuItem key="vip" value="vip">
                    VIP
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
                Referred Bonus
              </Typography>
              <CustomTextField
                error={
                  addFormik.touched.referredBonus &&
                  Boolean(addFormik.errors.referredBonus)
                }
                helperText={
                  addFormik.touched.referredBonus && addFormik.errors.referredBonus
                }
                id="referredBonus"
                type="number"
                name="referredBonus"
                value={addFormik.values.referredBonus}
                onChange={addFormik.handleChange}
                fullWidth
                variant="outlined"
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
                Minimum Percentage
              </Typography>
              <CustomTextField
                // error={addFormik.touched.min && Boolean(addFormik.errors.min)}
                // helperText={addFormik.touched.min && addFormik.errors.min}
                id="joiningBonus.min"
                name="joiningBonus.min"
                value={addFormik.values.joiningBonus.min}
                onChange={addFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
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
                Maximum Amount
              </Typography>
              <CustomTextField
                // error={addFormik.touched.max && Boolean(addFormik.errors.max)}
                // helperText={addFormik.touched.max && addFormik.errors.max}
                id="joiningBonus.max"
                name="joiningBonus.max"
                value={addFormik.values.joiningBonus.max}
                onChange={addFormik.handleChange}
                fullWidth
                type="number"
                variant="outlined"
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
                Criteria
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="criteria"
                  value={addFormik.values.criteria}
                  onChange={addFormik.handleChange}
                  name="criteria"
                >
                  <MenuItem key="customer" value="plan_maturity">
                    Plan Maturity
                  </MenuItem>
                  <MenuItem key="sales_offer" value="download_subscriptions">
                    Download Subscriptions
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
                  '&:hover': {
                    backgroundColor: '#DBA251',
                  },
                }}
              >
                Add Referral Type
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
            Referral Type View
          </Typography>
        </Grid>
        {/* <Grid item>
          <Button
            onClick={() => setShowAdd(true)}
            sx={{
              background: 'linear-gradient(43deg, #8b5704, #ddb070)',
              color: 'white',
            }}
          >
            Create Referral Type
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid> */}
      </Grid>{' '}
      <Table rows={query?.data?.docs} columns={columns} />
    </>
  );
}
ReferralType.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
