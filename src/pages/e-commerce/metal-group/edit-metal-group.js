import Head from "next/head";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Grid,
  Button,
  styled,
  TextField,
} from "@mui/material";
import { DashboardLayout } from "../../../components/layout/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { updateMetalGroup, getMetalGroupById } from "src/apis/metalGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddModeratorRounded } from "@mui/icons-material";
import { getMetal } from "src/apis/metal";
import { getUnit } from "src/apis/unit";
import { getOrnament } from "src/apis/ornament";
import Loading from "src/components/loading";
import { useTheme } from "@mui/styles"
import { CustomFormControl } from 'src/components/customMUI';
import { CustomTextField } from 'src/components/customMUI';
import { useController } from "src/controller/metalGroup";
import { useFormControlUnstyledContext } from "@mui/base";
//=======================================================
export default function EditMetalGroup() {
  //=======================
  const router = useRouter();
  const theme = useTheme()
  const {
    edit,
    editForm,
    metalQuery,
    unit,
    ornament
  } = useController()
  //=======================================================


  const query = useQuery({
    querKey: ["metalGroup", router.query.id],
    queryFn: () => getMetalGroupById(router.query.id),
    onSuccess: (res) => editForm.setValues(res),
    enabled: !!router.query.id,
  });



  if (query.isLoading) return <Loading />;
  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Metal Group</title>
      </Head>
      <Container
        sx={{
          padding: 5,
          borderRadius: 2,
          boxShadow: '0px 4px 1px 0px #d2c6c6',
          marginTop: 5,
          border: '1px solid #d2c6c657',
          backgroundColor: 'white',
          minWidth: "100%"
        }}
      >
        {/* ------------------------------ */}
        <Typography
          variant="h6"
          sx={{
            color: '#8B5704',
          }}
        >
          Edit Metal Group
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Edit Metal Group for products used in E-commerce
        </Typography>
        {/* ------------------------------ */}

        <Grid
          sx={{
            padding: 5,
            borderRadius: 2,
            boxShadow: '0px 4px 1px 0px #d2c6c6',
            marginTop: 5,
            border: '1px solid #d2c6c657',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          container
        >
          <Grid item sm={8} xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: '#8B5704',
                marginBottom: 2,
                marginTop: 2,
                fontWeight: 600,
              }}
            >
              Metal Group Name
            </Typography>

            <form onSubmit={editForm.handleSubmit}>
              <CustomTextField
                error={
                  editForm.touched.shortName && Boolean(editForm.errors.shortName)
                }
                helperText={editForm.touched.shortName && editForm.errors.shortName}
                id="shortName"
                name="shortName"
                value={editForm.values.shortName}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Metal Group name"
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
                Metal
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={editForm.values.metal}
                  onChange={editForm.handleChange}
                  name="metal"
                >
                  {metalQuery?.data?.docs?.map((x) => (
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
                Unit
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={editForm.values.unit}
                  onChange={editForm.handleChange}
                  name="unit"
                >
                  {unit?.data?.docs?.map((x) => (
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
                Ornament
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  // value={age}
                  value={editForm.values.ornament}
                  onChange={editForm.handleChange}
                  name="ornament"
                >
                  {ornament?.data?.docs?.map((x) => (
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
                Purity
              </Typography>
              <CustomTextField
                error={editForm.touched.purity && Boolean(editForm.errors.purity)}
                helperText={editForm.touched.purity && editForm.errors.purity}
                id="purity"
                name="purity"
                type="number"
                value={editForm.values.purity}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Purity"
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
                Rounding Digits
              </Typography>
              <CustomFormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  value={editForm.values.roundingDigits}
                  onChange={editForm.handleChange}
                  name="roundingDigits"
                >
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={edit.isLoading}
                loading={edit.isLoading}
                type="submit"
                fullWidth
                sx={theme.custom.addButton}
              >
                Edit Metal Group
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditMetalGroup.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
