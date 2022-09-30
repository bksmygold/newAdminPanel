

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
export default function CaptainFaq() {
    const router = useRouter();
    const theme = useTheme();

    const [showAdd, setShowAdd] = React.useState(false);
    const [showEdit, setShowEdit] = React.useState(false);
    const [id, setId] = useState('');
    //=======================
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
            captainMutation.mutate(values);
        },
    });

    const editFormik = useFormik({
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
            console.log('payload --', values);
            editMutation.mutate({ data: values, id: id });
        },
    });


    const captainQuery = useQuery({
        queryKey: 'FAQ',
        queryFn: () => getFaq("captain"),
    });


    const captainMutation = useMutation({
        mutationFn: postFaq,
        onSuccess: (res) => {
            captainQuery.refetch();
            setShowAdd(false);
            captainFormik.resetForm();
            swal('FAQ Added !', 'Continue with the e-comm panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    });



    const editMutation = useMutation({
        mutationFn: updateFaq,
        onSuccess: (res) => {
            captainQuery.refetch();
            setShowEdit(false);
            swal('FAQ Updated !', 'Continue with the e-comm panel', 'success');
        },
        onError: (err) => swal('Erro !', err.message, 'error'),
    });

    if (captainQuery.isLoading) return <Loading />;
    console.log("errors", captainFormik.errors)
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
            field: "category",
            headerName: "category",
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


    //   console.log(router.query.name)
    //=======================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Customer-FAQ </title>
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
                            Edit Customer FAQ
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#cba56a',
                                marginBottom: 15,
                                fontWeight: 'bold',
                            }}
                        >
                            Edit FAQ for Customer App
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
                                    editFormik.touched.question &&
                                    Boolean(editFormik.errors.category)
                                }
                                helperText={
                                    editFormik.touched.category && editFormik.errors.category
                                }
                                id="category"
                                name="category"
                                value={editFormik.values.category}
                                onChange={editFormik.handleChange}
                                fullWidth
                                variant="outlined"
                                label="category"
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
                            Add Customer FAQ
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#cba56a',
                                marginBottom: 15,
                                fontWeight: 'bold',
                            }}
                        >
                            Add FAQ for the Customer App
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
                        Customer FAQ View
                    </Typography>
                </Grid>
                <Grid item>
                    <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
                        Create Customer FAQ
                        <AddIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </Grid>

            </Grid>{' '}

            <Table rows={captainQuery.data.docs} columns={columns} />


        </>
    );
}
CaptainFaq.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
