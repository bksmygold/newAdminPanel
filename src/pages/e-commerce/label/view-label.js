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
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
import { useController } from 'src/controller/label';
//=======================================================
export default function Label() {

  const theme = useTheme();
  const {
    add,
    edit,
    addForm,
    editForm,
    query,
    styleQuery,
    setShowAdd,
    showAdd,
    setShowEdit,
    showEdit
  } = useController()
  if (query.isLoading) return <Loading />;

  console.log(query.data.docs)
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'label name',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <p style={theme.custom.typography.table}>{params.value}</p>
      ),
      flex: 1
    },
    {
      field: 'mode',
      headerName: 'mode',
      width: 150,
      editable: true, flex: 1
    },
    {
      field: 'weight',
      headerName: 'weight',
      width: 150,
      editable: true, flex: 1
    },
    {
      field: 'piece',
      headerName: 'piece',
      width: 150,
      editable: true, flex: 1
    },
    {
      field: 'style.name',
      headerName: 'style name',
      width: 150,
      editable: true,
      flex: 1,
      valueGetter: (params) => {
        return (params.row.style.name)
      }
    },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <EditButton
          onClick={() => {
            editForm.setValues(params.row);
            setShowEdit(params.row);
          }}
        />),
      flex: 1
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <DeleteButton
          id={params.id}
          deleting={deleteLabel}
        />
      ),
      flex: 1
    }
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

            <form onSubmit={editForm.handleSubmit}>
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
                  editForm.touched.name && Boolean(editForm.errors.name)
                }
                helperText={editForm.touched.name && editForm.errors.name}
                id="name"
                name="name"
                value={editForm.values.name}
                onChange={editForm.handleChange}
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
                  value={editForm.values.style}
                  onChange={editForm.handleChange}
                  name="style"
                >
                  {styleQuery?.data?.docs.map((x) => (
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
                  value={editForm.values.mode}
                  onChange={editForm.handleChange}
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
                  editForm.touched.weight && Boolean(editForm.errors.weight)
                }
                helperText={
                  editForm.touched.weight && editForm.errors.weight
                }
                id="weight"
                name="weight"
                value={editForm.values.weight}
                onChange={editForm.handleChange}
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
                  editForm.touched.piece && Boolean(editForm.errors.piece)
                }
                helperText={editForm.touched.piece && editForm.errors.piece}
                id="piece"
                name="piece"
                value={editForm.values.piece}
                onChange={editForm.handleChange}
                fullWidth
                type="number"
                variant="outlined"
                label=" piece"
              />

              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
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
                Label name
              </Typography>
              <CustomTextField
                multiline
                error={addForm.touched.name && Boolean(addForm.errors.name)}
                helperText={addForm.touched.name && addForm.errors.name}
                id="name"
                name="name"
                value={addForm.values.name}
                onChange={addForm.handleChange}
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
                  value={addForm.values.style}
                  onChange={addForm.handleChange}
                  name="style"
                >
                  {styleQuery?.data?.docs.map((x) => (
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
                  value={addForm.values.mode}
                  onChange={addForm.handleChange}
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
                  addForm.touched.weight && Boolean(addForm.errors.weight)
                }
                helperText={addForm.touched.weight && addForm.errors.weight}
                id="weight"
                name="weight"
                value={addForm.values.weight}
                onChange={addForm.handleChange}
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
                  addForm.touched.piece && Boolean(addForm.errors.piece)
                }
                helperText={addForm.touched.piece && addForm.errors.piece}
                id="piece"
                name="piece"
                value={addForm.values.piece}
                onChange={addForm.handleChange}
                fullWidth
                type="number"
                variant="outlined"
                label=" piece"
              />

              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
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
