

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
import { CustomTextField } from 'src/components/customMUI';
import { FaqCard } from 'src/components/cards/faqCard';
//=======================================================
export default function FAQType() {
  const router = useRouter();
  const theme = useTheme();

  const [showAdd, setShowAdd] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [id, setId] = useState('');
  //=======================
  const merchantFormik = useFormik({
    initialValues: {
      question: '',
      answer: '',
      category: '',
      app: "merchant"
    },
    validationSchema: yup.object({
      question: yup.string('Enter question').required('question is required'),
      answer: yup.string('Enter answer').required('answer is required'),
      category: yup.string('Enter category').required('category is required'),

    }),
    onSubmit: (values) => {
      addMutation.mutate(values);
    },
  });
  const customerFormik = useFormik({
    initialValues: {
      question: '',
      answer: '',
      category: '',
      app: "customer"
    },
    validationSchema: yup.object({
      question: yup.string('Enter question').required('question is required'),
      answer: yup.string('Enter answer').required('answer is required'),
      category: yup.string('Enter category').required('category is required'),

    }),
    onSubmit: (values) => {
      addMutation.mutate(values);
    },
  });
  const businessFormik = useFormik({
    initialValues: {
      question: '',
      answer: '',
      category: '',
      app: "business"
    },
    validationSchema: yup.object({
      question: yup.string('Enter question').required('question is required'),
      answer: yup.string('Enter answer').required('answer is required'),
      category: yup.string('Enter category').required('category is required'),

    }),
    onSubmit: (values) => {
      addMutation.mutate(values);
    },
  });
  const captainFormik = useFormik({
    initialValues: {
      question: '',
      answer: '',
      category: '',
      app: "captain"
    },
    validationSchema: yup.object({
      question: yup.string('Enter question').required('question is required'),
      answer: yup.string('Enter answer').required('answer is required'),
      category: yup.string('Enter category').required('category is required'),

    }),
    onSubmit: (values) => {
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


  const merchantQuery = useQuery({
    queryKey: 'FAQ',
    queryFn: () => getFaq("merchant"),
  });
  const captainQuery = useQuery({
    queryKey: 'FAQ',
    queryFn: () => getFaq("captain"),
  });

  const businessQuery = useQuery({
    queryKey: 'FAQ',
    queryFn: () => getFaq("business"),
  });

  const customerQuery = useQuery({
    queryKey: 'FAQ',
    queryFn: () => getFaq("customer"),
  });


  const merchantMutation = useMutation({
    mutationFn: postFaq,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('FAQ Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
  });

  const customerMutation = useMutation({
    mutationFn: postFaq,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('FAQ Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
  });

  const businessMutation = useMutation({
    mutationFn: postFaq,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('FAQ Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
  });
  const captainMutation = useMutation({
    mutationFn: postFaq,
    onSuccess: (res) => {
      query.refetch();
      setShowAdd(false);
      addFormik.resetForm();
      swal('FAQ Added !', 'Continue with the e-comm panel', 'success');
    },
    onError: (err) => swal('Error !', err.message, 'error'),
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

  if (merchantQuery.isLoading) return <Loading />;

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
      headerName: "question",
      width: 250,
      editable: true, flex: 1
    },
    {
      field: "answer",
      headerName: "answer",
      width: 250,
      editable: true, flex: 1
    },
    {
      field: "app",
      headerName: "type",
      width: 250,
      editable: true, flex: 1
    },


    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      editable: true,
      renderCell: editButton, flex: 1
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      editable: true,
      renderCell: deleteButton, flex: 1
    },
  ];

  const customer = [
    {
      id: 1,
      name: "customer"
    }
  ]

  const merchant = [
    {
      id: 1,
      name: "Merchant"
    }
  ]


  const Business = [
    {
      id: 1,
      name: "Business"
    }
  ]


  const captain = [
    {
      id: 1,
      name: "captain"
    }
  ]


  console.log(router.query.name)
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
      {router.query.name === "Merchant" ? (
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

              <form onSubmit={merchantFormik.handleSubmit}>
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
                    merchantFormik.touched.question &&
                    Boolean(merchantFormik.errors.question)
                  }
                  helperText={
                    merchantFormik.touched.question && merchantFormik.errors.question
                  }
                  id="question"
                  name="question"
                  value={merchantFormik.values.question}
                  onChange={merchantFormik.handleChange}
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
                    merchantFormik.touched.answer && Boolean(merchantFormik.errors.answer)
                  }
                  helperText={merchantFormik.touched.answer && merchantFormik.errors.answer}
                  id="answer"
                  name="answer"
                  value={merchantFormik.values.answer}
                  onChange={merchantFormik.handleChange}
                  fullWidth
                  variant="outlined"
                  label="answer"
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
                  FAQ Category
                </Typography>
                <CustomTextField
                  error={
                    merchantFormik.touched.question &&
                    Boolean(merchantFormik.errors.category)
                  }
                  helperText={
                    merchantFormik.touched.category && merchantFormik.errors.category
                  }
                  id="category"
                  name="category"
                  value={merchantFormik.values.category}
                  onChange={merchantFormik.handleChange}
                  fullWidth
                  variant="outlined"
                  label="category"
                />


                <LoadingButton
                  disabled={merchantMutation.isLoading}
                  loading={merchantMutation.isLoading}
                  type="submit"
                  sx={theme.custom.addButton}
                >
                  Add FAQ
                </LoadingButton>
              </form>
            </Grid>
          </Box>
        </Modal>
      )
        : router.query.name === "Customer" ? (
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

                <form onSubmit={customerFormik.handleSubmit}>
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
                      customerFormik.touched.question &&
                      Boolean(customerFormik.errors.question)
                    }
                    helperText={
                      customerFormik.touched.question && customerFormik.errors.question
                    }
                    id="question"
                    name="question"
                    value={customerFormik.values.question}
                    onChange={customerFormik.handleChange}
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
                      customerFormik.touched.answer && Boolean(customerFormik.errors.answer)
                    }
                    helperText={customerFormik.touched.answer && customerFormik.errors.answer}
                    id="answer"
                    name="answer"
                    value={customerFormik.values.answer}
                    onChange={customerFormik.handleChange}
                    fullWidth
                    variant="outlined"
                    label="answer"
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
                    FAQ Category
                  </Typography>
                  <CustomTextField
                    error={
                      customerFormik.touched.question &&
                      Boolean(customerFormik.errors.category)
                    }
                    helperText={
                      customerFormik.touched.category && customerFormik.errors.category
                    }
                    id="category"
                    name="category"
                    value={customerFormik.values.category}
                    onChange={customerFormik.handleChange}
                    fullWidth
                    variant="outlined"
                    label="category"
                  />


                  <LoadingButton
                    disabled={customerMutation.isLoading}
                    loading={customerMutation.isLoading}
                    type="submit"
                    sx={theme.custom.addButton}
                  >
                    Add FAQ
                  </LoadingButton>
                </form>
              </Grid>
            </Box>
          </Modal>
        ) : router.query.name === "Business" ? (
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

                <form onSubmit={businessFormik.handleSubmit}>
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
                      businessFormik.touched.question &&
                      Boolean(businessFormik.errors.question)
                    }
                    helperText={
                      businessFormik.touched.question && businessFormik.errors.question
                    }
                    id="question"
                    name="question"
                    value={businessFormik.values.question}
                    onChange={businessFormik.handleChange}
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
                      businessFormik.touched.answer && Boolean(businessFormik.errors.answer)
                    }
                    helperText={businessFormik.touched.answer && businessFormik.errors.answer}
                    id="answer"
                    name="answer"
                    value={businessFormik.values.answer}
                    onChange={businessFormik.handleChange}
                    fullWidth
                    variant="outlined"
                    label="answer"
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
                    FAQ Category
                  </Typography>
                  <CustomTextField
                    error={
                      businessFormik.touched.question &&
                      Boolean(businessFormik.errors.category)
                    }
                    helperText={
                      businessFormik.touched.category && businessFormik.errors.category
                    }
                    id="category"
                    name="category"
                    value={businessFormik.values.category}
                    onChange={businessFormik.handleChange}
                    fullWidth
                    variant="outlined"
                    label="category"
                  />


                  <LoadingButton
                    disabled={businessMutation.isLoading}
                    loading={businessMutation.isLoading}
                    type="submit"
                    sx={theme.custom.addButton}
                  >
                    Add FAQ
                  </LoadingButton>
                </form>
              </Grid>
            </Box>
          </Modal>
        )
          : router.query.name === "Captain" ? (
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

                  <form onSubmit={captainFormik.handleSubmit}>
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
                        captainFormik.touched.question &&
                        Boolean(captainFormik.errors.question)
                      }
                      helperText={
                        captainFormik.touched.question && captainFormik.errors.question
                      }
                      id="question"
                      name="question"
                      value={captainFormik.values.question}
                      onChange={captainFormik.handleChange}
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
                        captainFormik.touched.answer && Boolean(captainFormik.errors.answer)
                      }
                      helperText={captainFormik.touched.answer && captainFormik.errors.answer}
                      id="answer"
                      name="answer"
                      value={captainFormik.values.answer}
                      onChange={captainFormik.handleChange}
                      fullWidth
                      variant="outlined"
                      label="answer"
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
                      FAQ Category
                    </Typography>
                    <CustomTextField
                      error={
                        captainFormik.touched.question &&
                        Boolean(captainFormik.errors.category)
                      }
                      helperText={
                        captainFormik.touched.category && captainFormik.errors.category
                      }
                      id="category"
                      name="category"
                      value={captainFormik.values.category}
                      onChange={captainFormik.handleChange}
                      fullWidth
                      variant="outlined"
                      label="category"
                    />


                    <LoadingButton
                      disabled={captainMutation.isLoading}
                      loading={captainMutation.isLoading}
                      type="submit"
                      sx={theme.custom.addButton}
                    >
                      Add FAQ
                    </LoadingButton>
                  </form>
                </Grid>
              </Box>
            </Modal>
          )
            : null

      }
      {/* =========================== VIEW ==================================== */}
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

      {router.query.name === "Customer" ? (
        <Table rows={customerQuery.data.docs} columns={columns} />

      ) : router.query.name === "Merchant" ? (
        <Table rows={merchantQuery.data.docs} columns={columns} />

      ) : router.query.name === "Business" ? (
        <Table rows={businessQuery.data.docs} columns={columns} />
      ) : router.query.name === "Captain" ? (
        <Table rows={captainQuery.data.docs} columns={columns} />
      ) : (
        null

      )}
    </>
  );
}
FAQType.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
