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
import { postMetalGroup } from "src/apis/metalGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddModeratorRounded } from "@mui/icons-material";
import { getMetal } from "src/apis/metal";
import { getUnit } from "src/apis/unit";
import { getOrnament } from "src/apis/ornament";
import { useTheme } from '@mui/styles';
import { CustomTextField, CustomFormControl } from 'src/components/customMUI';
import { useController } from 'src/controller/metalGroup';
import EditMetalGroup from "./edit-metal-group";
import Loading from "src/components/loading";

//=======================================================
export default function AddMetalGroup() {
  //=======================
  const router = useRouter();
  const theme = useTheme()
  const {
    add,
    addForm,
    metalQuery,
    unit,
    ornament
  } = useController()

  if(metalQuery.isLoading && unit.isLoading && ornament.isLoading) return <Loading/>
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
          boxShadow: "0px 4px 1px 0px #d2c6c6",
          marginTop: 5,
          border: "1px solid #d2c6c657",
          backgroundColor: "white",
          minWidth: "100%"
        }}
      >
        {/* ------------------------------ */}
        <Typography
          variant="h6"
          sx={{
            color: "#8B5704",
          }}
        >
          Add Metal Group
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#cba56a",
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          Add Metal Group for products used in E-commerce
        </Typography>
        {/* ------------------------------ */}

        <Grid
          sx={{
            padding: 5,
            borderRadius: 2,
            boxShadow: "0px 4px 1px 0px #d2c6c6",
            marginTop: 5,
            border: "1px solid #d2c6c657",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          container
        >
          <Grid item sm={8} xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: "#8B5704",
                marginBottom: 2,
                marginTop: 2,
                fontWeight: 600,
              }}
            >
              Metal Group Name
            </Typography>

            <form onSubmit={addForm.handleSubmit}>
              <CustomTextField
                error={addForm.touched.shortName && Boolean(addForm.errors.shortName)}
                helperText={addForm.touched.shortName && addForm.errors.shortName}
                id="shortName"
                name="shortName"
                value={addForm.values.shortName}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="Metal Group name"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
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
                  value={addForm.values.metal}
                  onChange={addForm.handleChange}
                  name="metal"
                >
                  {metalQuery?.data?.docs.map((x) => (
                    <MenuItem key={x.id} value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))}
                </Select>
              </CustomFormControl>

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
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
                  value={addForm.values.unit}
                  onChange={addForm.handleChange}
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
                  color: "#8B5704",
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
                  value={addForm.values.ornament}
                  onChange={addForm.handleChange}
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
                  color: "#8B5704",
                  marginBottom: 2,
                  marginTop: 2,
                  fontWeight: 600,
                }}
              >
                Purity
              </Typography>
              <CustomTextField
                error={addForm.touched.purity && Boolean(addForm.errors.purity)}
                helperText={addForm.touched.purity && addForm.errors.purity}
                id="purity"
                name="purity"
                type="number"
                value={addForm.values.purity}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="Purity"
              />

              <Typography
                variant="body1"
                sx={{
                  color: "#8B5704",
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
                  value={addForm.values.roundingDigits}
                  onChange={addForm.handleChange}
                  name="roundingDigits"
                >
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </CustomFormControl>

              <LoadingButton
                disabled={add.isLoading}
                loading={add.isLoading}
                type="submit"
                fullWidth
                sx={theme.custom.addButton}
              >
                Add Metal Group
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
AddMetalGroup.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
