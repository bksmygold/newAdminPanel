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
import { DashboardLayout } from '../../components/dashboard-layout';
import { InfoCard } from '../../components/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../components/utility/table';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getMakingCharge,
  deleteMakingCharge,
  postMakingCharge,
  updateMakingCharge,
} from 'src/apis/makingCharge';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik, FormikProvider, FieldArray } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import AddIcon from '@mui/icons-material/Add';
import { getSupplier } from 'src/apis/supplier';
import { getProductType } from 'src/apis/productType';
import { getItem } from 'src/apis/item';
import { getMetalGroup } from 'src/apis/metalGroup';
import { getVariety } from 'src/apis/variety';
import React, { useEffect, useState } from 'react';

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
export default function MakingCharge() {
  const router = useRouter();


  const [supplier, setSupplier] = useState([]);
  const [variety, setVariety] = useState([]);
  const [productType, setProductType] = useState([]);
  const [item, setItem] = useState([]);
  const [metalGroup, setMetalGroup] = useState([]);

  useEffect(() => {
    getSupplier().then((res) => setSupplier(res.docs));
    getVariety().then((res) => setVariety(res.docs));
    getItem().then((res) => setItem(res.docs));
    getProductType().then((res) => setProductType(res.docs));
    getMetalGroup().then((res) => setMetalGroup(res.docs));
  }, []);




  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const addFormik = useFormik({
    initialValues: {
      supplier: '',
      variety: '',
      item: '',
      productType: '',
      metalGroup: '',
      rates: [],
    },
    validationSchema: yup.object({
      supplier: yup
        .string('Enter supplier Name')
        .required('supplier is required'),
      variety: yup.string('Enter variety').required('variety is required'),
      item: yup.string('Enter item').required('item is required'),
      productType: yup
        .string('Enter product type')
        .required('product type is required'),
      metalGroup: yup
        .string('Enter metal group')
        .required('metal group is required'),
    }),
    onSubmit: (values) => {
      console.log('payload --', values);
      addMutation.mutate(values);
    },
  });

  const editFormik = useFormik({
    initialValues: {
      supplier: '',
      variety: '',
      item: '',
      productType: '',
      metalGroup: '',
      rates: [],
    },
    validationSchema: yup.object({
      supplier: yup
        .string('Enter supplier Name')
        .required('supplier is required'),
      variety: yup.string('Enter variety').required('variety is required'),
      item: yup.string('Enter item').required('item is required'),
      productType: yup
        .string('Enter product type')
        .required('product type is required'),
      metalGroup: yup
        .string('Enter metal group')
        .required('metal group is required'),
    }),
    onSubmit: (values) => {
      editMutation.mutate({ data: values, id: id });
    },
  });

  const query = useQuery({
    queryKey: 'Making Charge',
    queryFn: () => getMakingCharge(),
  });

  const addMutation = useMutation({
    mutationFn: postMakingCharge,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal(
        'Making Charge Added !',
        'Continue with the e-comm panel',
        'success'
      );
    },
    onError: (err) => swal('Erro !', err.message, 'error'),
  });

  const editMutation = useMutation({
    mutationFn: updateMakingCharge,
    onSuccess: (res) => {
      query.refetch();
      setShowEdit(false);
      swal(
        'Making Charge Updated !',
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
            // setId(params.row.id);
            // editFormik.setValues(params.row);
            // setShowEdit(params.row);
                          router.push(`/makingCharge/edit-makingCharge?id=${params.row.id}`);

          }}
        >
          Edit <EditIcon sx={{ marginLeft: 1, width: 23, height: 23 }} />
        </Button>
      </strong>
    );
  };
  //==========
  const deleteButton = (params) => {
    return (
      <DeleteSpinner
        id={params.id}
        deleting={deleteMakingCharge}
        url="/makingCharge/view-makingCharge"
      />
    );
  };
  //==========
    const columns = [
      {
        field: 'supplier.name',
        headerName: 'MakingCharge Name',
        width: 150,
        editable: true,
        valueGetter: (params) => {
          let result = [];
          if (params.row.supplier) {
            if (params.row.supplier.name) {
              result.push(params.row.supplier.name);
            }
          } else {
            result = ['Empty'];
          }
          return result.join(', ');
        },
      },
      {
        field: 'variety',
        headerName: 'Variety',
        width: 150,
        editable: true,
      },
      {
        field: 'item',
        headerName: 'Item',
        width: 150,
        editable: true,
      },
      {
        field: 'productType.name',
        headerName: 'Product Type',
        width: 200,
        editable: true,
        valueGetter: (params) => {
          let result = [];
          if (params.row.productType) {
            if (params.row.productType.name) {
              result.push(params.row.productType.name);
            }
          } else {
            result = ['Empty'];
          }
          return result.join(', ');
        },
      },
      {
        field: 'metalGroup.metal.name',
        headerName: 'Metal Group Id',
        width: 200,
        editable: true,
        valueGetter: (params) => {
          let result = [];
          if (params.row.metalGroup) {
            if (params.row.metalGroup.metal) {
              if (params.row.metalGroup.metal.name) {
                result.push(
                  params.row.metalGroup.shortName +
                    '' +
                    params.row.metalGroup.metal.name
                );
              }
            }
          } else {
            result = ['Empty'];
          }
          return result.join(', ');
        },
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
        <title>Dashboard | Making Charge </title>
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
              Edit Making Charge
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Edit Making Charge for products used in E-commerce
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
                Making Charge Name
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
                label="Making Charge name"
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
                Making Charge Mobile
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.phone && Boolean(editFormik.errors.phone)
                }
                helperText={editFormik.touched.phone && editFormik.errors.phone}
                id="phone"
                name="phone"
                value={editFormik.values.phone}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Making Charge phone"
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
                Making Charge Email
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.email && Boolean(editFormik.errors.email)
                }
                helperText={editFormik.touched.email && editFormik.errors.email}
                id="email"
                name="email"
                value={editFormik.values.email}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Making Charge email"
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
                Making Charge Code
              </Typography>
              <CustomTextField
                error={
                  editFormik.touched.code && Boolean(editFormik.errors.code)
                }
                helperText={editFormik.touched.code && editFormik.errors.code}
                id="code"
                name="code"
                value={editFormik.values.code}
                onChange={editFormik.handleChange}
                fullWidth
                variant="outlined"
                label="Making Charge code"
              />

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
                Edit Making Charge
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
              Add Making Charge
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#cba56a',
                marginBottom: 15,
                fontWeight: 'bold',
              }}
            >
              Add Making Charge for products used in E-commerce
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
                Supplier Name
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  supplier name
                </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="supplier"
                  value={addFormik.values.supplier}
                  onChange={addFormik.handleChange}
                  name="supplier"
                >
                  {supplier?.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
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
                Variety Name
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  variety name
                </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="variety"
                  value={addFormik.values.variety}
                  onChange={addFormik.handleChange}
                  name="variety"
                >
                  {variety?.map((x) => (
                    <MenuItem key={x.id} value={x.name}>
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
                Item Name
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">item name</InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="item"
                  value={addFormik.values.item}
                  onChange={addFormik.handleChange}
                  name="item"
                >
                  {item?.map((x) => (
                    <MenuItem key={x.id} value={x.name}>
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
                Product Type
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  product type{' '}
                </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="productType"
                  value={addFormik.values.productType}
                  onChange={addFormik.handleChange}
                  name="productType"
                >
                  {productType?.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
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
                Metal Group
              </Typography>
              <CustomFormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  metal group{' '}
                </InputLabel>
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
              {/* ----------------------- Rates --------------------- */}
              <FormikProvider value={addFormik}>
                <FieldArray
                  name="rates"
                  render={(arrayHelpers) => (
                    <div>
                      {addFormik.values.rates.map((rate, index) => (
                        <div key={index}>
                          {/** both these conventions do the same  */}

                          <Typography
                            variant="body1"
                            sx={{
                              color: '#8B5704',
                              marginBottom: 2,
                              marginTop: 2,
                              fontWeight: 600,
                            }}
                          >
                            From Weight
                          </Typography>
                          <TextField
                            name={`rates[${index}].fromWeight`}
                            type="number"
                            value={addFormik.values.rates[index].fromWeight}
                            onChange={addFormik.handleChange}
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
                            To Weight
                          </Typography>
                          <TextField
                            name={`rates.${index}.toWeight`}
                            type="number"
                            value={addFormik.values.rates[index].toWeight}
                            onChange={addFormik.handleChange}
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
                            Rate Type
                          </Typography>
                          <CustomFormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              supplier name
                            </InputLabel>
                            <Select
                              defaultValue=""
                              name={`rates.${index}.rateType`}
                              value={addFormik.values.rates[index].rateType}
                              onChange={addFormik.handleChange}
                            >
                              <MenuItem value="net_weight">Net Weight</MenuItem>
                              <MenuItem value="gross_weight">
                                {' '}
                                Gross Weight
                              </MenuItem>
                              <MenuItem value="per_piece"> Per Piece</MenuItem>
                              <MenuItem value="fixed"> Fixed</MenuItem>
                              <MenuItem value="gross_weight_percentage">
                                {' '}
                                Gross Weight Percentage
                              </MenuItem>

                              <MenuItem value="net_weight_percentage">
                                {' '}
                                Net Weight Percentage
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
                            Rate
                          </Typography>
                          <TextField
                            name={`rates.${index}.rate`}
                            type="number"
                            value={addFormik.values.rates[index].rate}
                            onChange={addFormik.handleChange}
                          />
                          <Box
                            sx={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <Button
                              sx={{
                                backgroundColor: '#ff6d6d',
                                color: 'white',
                                marginTop: 1,
                              }}
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove
                            </Button>
                          </Box>
                        </div>
                      ))}
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          sx={{
                            m: 2,
                            backgroundColor: '#70dd89',
                            color: 'white',
                            justifyContent: 'center',
                          }}
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              fromWeight: 0,
                              toWeight: 0,
                              rate: 0,
                              rateType: '',
                            })
                          }
                        >
                          Add
                        </Button>
                      </Box>
                    </div>
                  )}
                />
              </FormikProvider>
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
                Add Making Charge
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
            Making Charge View
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              // setShowAdd(true)
              router.push('/makingCharge/add-makingCharge')
            }
            sx={{
              background: 'linear-gradient(43deg, #8b5704, #ddb070)',
              color: 'white',
            }}
          >
            Create Making Charge
            <AddIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>{' '}
      <Table rows={query.data.docs} columns={columns} />
    </>
  );
}
MakingCharge.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
