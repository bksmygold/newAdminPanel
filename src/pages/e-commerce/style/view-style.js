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
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { getMetalGroup } from 'src/apis/metalGroup';
import { useTheme } from '@mui/styles';
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import { EditButton } from 'src/components/button/editButton';
import { DeleteButton } from 'src/components/button/deleteButton';
import { useController } from 'src/controller/style';
//=======================================================
export default function Style() {

  const theme = useTheme();
  const {
    add,
    edit,
    addForm,
    editForm,
    query,
    metalQuery,
    setShowAdd,
    showAdd,
    setShowEdit,
    showEdit
  } = useController()

  if (query.isLoading) return <Loading />; 
  // if (metalQuery.isLoading) return console.log("Loading ...");
  //==========
  const columns = [
    {
      field: 'name',
      headerName: 'style name',
      width: 150,
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <p style={theme.custom.typography.table}>{params.value}</p>
      ),

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
      }, flex: 1
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
          deleting={deleteStyle}
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
                Style Name
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
                Metal Group
              </Typography>
              <CustomFormControl fullWidth>

                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="metalGroup"
                  value={editForm.values.metalGroup}
                  onChange={editForm.handleChange}
                  name="metalGroup"
                >
                  {metalQuery?.data?.docs.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.shortName} {x.metal.name}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
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
                Style Name
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
                Metal Group
              </Typography>
              <CustomFormControl fullWidth>

                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="metalGroup"
                  value={addForm.values.metalGroup}
                  onChange={addForm.handleChange}
                  name="metalGroup"
                >
                  {metalQuery?.data?.docs.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.shortName} {x.metal.name}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
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
