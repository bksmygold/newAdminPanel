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
import {
    getCategory,
    deleteCategory,
    postCategory,
    updateCategory,
} from 'src/apis/category';
import React from 'react';
import DeleteSpinner from 'src/components/deleteSpinner';
import Loading from 'src/components/loading';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/Styles'
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
import { useController } from 'src/controller/category';
import Merchant from 'src/pages/user-management/merchant/view';
//=======================================================
export default function MerchantBanner() {

    const theme = useTheme();
    const {
        add,
        edit,
        addForm,
        editForm,
        query,
        setShowAdd,
        showAdd,
        setShowEdit,
        showEdit
    } = useController()


    //==========
    const columns = [
        {
            field: 'plan',
            headerName: 'plan Name',
            width: 150,
            editable: true,
            flex: 1,
            renderCell: (params) => (
                <p style={theme.custom.typography.table}>{params.row.plan}</p>
            ),
        },
        {
            field: 'image',
            headerName: 'image',
            width: 150,
            editable: true,
            flex: 1,
        },
        {
            field: 'amount',
            headerName: 'amount',
            width: 150,
            editable: true,
            flex: 1,
        },
        {
            field: 'fromDate',
            headerName: 'fromDate',
            width: 150,
            editable: true,
            flex: 1,
        },
        {
            field: 'toDate',
            headerName: 'toDate',
            width: 150,
            editable: true,
            flex: 1,
        },

        {
            field: 'Reject',
            headerName: 'Reject',
            width: 150,
            editable: true,
            renderCell: (params) => (
                <Button sx={{ border: "1px solid red", color: "red" }} variant='outlined'>Reject</Button>),
            flex: 1
        },
        {
            field: 'Accept',
            headerName: 'Accept',
            width: 150,
            editable: true,
            renderCell: (params) => (
                <Button sx={{ border: "1px solid green", color: "green" }} variant='outlined'>Accept</Button>),
            flex: 1
        }
    ];

    const rows = [
        {
            id: 1,
            plan: "Flexi",
            image: "Link",
            amount: 9234,
            fromDate: "02/10/2022",
            toDate: "03/10/2023"


        }
    ]

    if (query.isLoading) return <Loading />

    //=======================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Merchant Banner </title>
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
                            Edit Category
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#cba56a',
                                marginBottom: 15,
                                fontWeight: 'bold',
                            }}
                        >
                            Edit Merchant Banner used in the app
                        </Typography>

                        <form onSubmit={addForm.handleSubmit}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#8B5704',
                                    marginBottom: 2,
                                    marginTop: 2,
                                    fontWeight: 600,
                                }}
                            >
                                Plan Name
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                variant="outlined"
                                label="plan name"
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
                                Banner Image
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                type='file'
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
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
                                Amount
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                variant="outlined"
                                label="amount"
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
                                From Date
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                type="date"
                                variant="outlined"
                                label="from Date"
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
                                To Date
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                type="date"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                variant="outlined"
                                label="To Date"
                            />


                            <LoadingButton
                                disabled={add.isLoading}
                                loading={add.isLoading}
                                type="submit"
                                sx={theme.custom.addButton}
                            >
                                Add Category
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
                            Add Merchant Banner
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#cba56a',
                                marginBottom: 15,
                                fontWeight: 'bold',
                            }}
                        >
                            Add Merchant Banner for used in he app
                        </Typography>

                        <form onSubmit={addForm.handleSubmit}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#8B5704',
                                    marginBottom: 2,
                                    marginTop: 2,
                                    fontWeight: 600,
                                }}
                            >
                                Plan Name
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                variant="outlined"
                                label="plan name"
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
                                Banner Image
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                type='file'
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
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
                                Amount
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                variant="outlined"
                                label="amount"
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
                                From Date
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                type="date"
                                variant="outlined"
                                label="from Date"
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
                                To Date
                            </Typography>
                            <CustomTextField
                                error={addForm.touched.name && Boolean(addForm.errors.name)}
                                helperText={addForm.touched.name && addForm.errors.name}
                                id="name"
                                type="date"
                                name="name"
                                value={addForm.values.name}
                                onChange={addForm.handleChange}
                                fullWidth
                                variant="outlined"
                                label="To Date"
                            />


                            <LoadingButton
                                disabled={add.isLoading}
                                loading={add.isLoading}
                                type="submit"
                                sx={theme.custom.addButton}
                            >
                                Add Category
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
                        Merchant Banner View
                    </Typography>
                </Grid>
                <Grid item>
                    <Button onClick={() => setShowAdd(true)} sx={theme.custom.addButton}>
                        Create Merchant Banner
                        <AddIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </Grid>
            </Grid>{' '}
            <Table rows={rows} columns={columns} />
        </>
    );
}
MerchantBanner.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
