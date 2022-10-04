import Head from "next/head";
import { Container, Typography, Grid, Button, styled, TextField ,Box} from "@mui/material";
import { DashboardLayout } from "../../../components/layout/dashboard-layout";
import FormInput from "../../../components/utility/formInput";
import Form from "../../../components/utility/form";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateCyclePeriod,getCyclePeriodById } from "src/apis/cyclePeriod";
import Loading from "src/components/loading";
import { useTheme } from '@mui/styles';
import { CustomTextField } from 'src/components/customMUI';
import { useController } from "src/controller/cyclePeriod";

//=======================================================
export default function EditCyclePeriod() {
  //=======================
  const router = useRouter();
  const theme = useTheme();
const {edit,editForm} = useController()
  //=======================================================
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     shortName: "",
  //     gracePeriod: 0,
  //     cycle: 0,
  //     lockinPeriod: 0,
  //     maxSkip: 0,
  //     maxUnpaidSkip: 0,
  //     maxUnpaidInvestment: 0,
  //   },
  //   validationSchema: yup.object({
  //     name: yup.string("Enter cycle period name").required("Name is required"),
  //     shortName: yup.string("Enter cycle period short name").required("Short Name is required"),
  //     gracePeriod: yup.number("Enter grace period").required("grace period is required"),
  //     cycle: yup.number("Enter cycle ").required("cycle is required"),
  //     lockinPeriod: yup.number("Enter locking period").required("locking period is required"),
  //     maxSkip: yup.number("Enter Max Skip Count").required("Max Skip Count is required"),
  //     maxUnpaidSkip: yup
  //       .number("Enter Max Unpaid Skip Count")
  //       .required("Max Unpaid Skip Count is required"),
  //     maxUnpaidInvestment: yup
  //       .number("Enter Max Unpaid Investment")
  //       .required("Max Unpaid Investment is required"),
  //   }),
  //   onSubmit: (values) => {
  //     cyclePeriodMutation.mutate({
  //       data: values,
  //       id:router.query.id
  //     });
  //   },
  // });

  const query = useQuery({
    queryKey: ["Cycle", router.query.id],
    queryFn: () => getCyclePeriodById(router.query.id),
    onSuccess: (res) => editForm.setValues(res),
    onError: (err) => console.log(err),
    enabled: !!router.query.id,
  });


  // const cyclePeriodMutation = useMutation({
  //   mutationFn: updateCyclePeriod,
  //   onSuccess: (res) => {
  //     swal("Cycle Period Updated !", res.message, "success"),
  //       router.push("/cyclePeriod/view-cyclePeriod");
  //   },
  //   onError: (err) => swal("Error !", err.message, "error"),
  // });
    if (query.isLoading) return <Loading />;

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Cycle Period</title>
      </Head>
      <Container
        sx={{
          padding: 5,
          borderRadius: 2,
          boxShadow: '0px 4px 1px 0px #d2c6c6',
          marginTop: 5,
          border: '1px solid #d2c6c657',
          backgroundColor: 'white',
          minWidth:"100% "
        }}
      >
        {/* ------------------------------ */}
        <Typography
          variant="h6"
          sx={{
            color: '#8B5704',
          }}
        >
          Edit Cycle Period
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Edit Cycle Period for Buy and Save Modules
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
          <Grid item xs={8}>
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
                Cycle Period Name
              </Typography>
              <CustomTextField
                error={editForm.touched.name && Boolean(editForm.errors.name)}
                helperText={editForm.touched.name && editForm.errors.name}
                id="name"
                name="name"
                value={editForm.values.name}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Cycle Period Name"
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
                Cycle Period short Name
              </Typography>
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
                label="short name"
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
                Grace Period
              </Typography>
              <CustomTextField
                error={
                  editForm.touched.gracePeriod &&
                  Boolean(editForm.errors.gracePeriod)
                }
                helperText={
                  editForm.touched.gracePeriod && editForm.errors.gracePeriod
                }
                id="gracePeriod"
                name="gracePeriod"
                type="number"
                value={editForm.values.gracePeriod}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="grace period"
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
                Cycle Period
              </Typography>
              <CustomTextField
                error={editForm.touched.cycle && Boolean(editForm.errors.cycle)}
                helperText={editForm.touched.cycle && editForm.errors.cycle}
                id="cycle"
                name="cycle"
                type="number"
                value={editForm.values.cycle}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="cycle"
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
                Locking Period
              </Typography>
              <CustomTextField
                error={
                  editForm.touched.lockinPeriod &&
                  Boolean(editForm.errors.lockinPeriod)
                }
                helperText={
                  editForm.touched.lockinPeriod && editForm.errors.lockinPeriod
                }
                id="lockinPeriod"
                name="lockinPeriod"
                type="number"
                value={editForm.values.lockinPeriod}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="locking period"
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
                Maximum Skip Count
              </Typography>
              <CustomTextField
                error={editForm.touched.maxSkip && Boolean(editForm.errors.maxSkip)}
                helperText={editForm.touched.maxSkip && editForm.errors.maxSkip}
                id="maxSkip"
                name="maxSkip"
                type="number"
                value={editForm.values.maxSkip}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Max. Skip Count"
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
                Maximum Unpaid Skip Count
              </Typography>
              <CustomTextField
                error={
                  editForm.touched.maxUnpaidSkip &&
                  Boolean(editForm.errors.maxUnpaidSkip)
                }
                helperText={
                  editForm.touched.maxUnpaidSkip && editForm.errors.maxUnpaidSkip
                }
                id="maxUnpaidSkip"
                name="maxUnpaidSkip"
                type="number"
                value={editForm.values.maxUnpaidSkip}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Max. Unpaid Skip Count"
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
                Maximum Unpaid Investment
              </Typography>
              <CustomTextField
                error={
                  editForm.touched.maxUnpaidInvestment &&
                  Boolean(editForm.errors.maxUnpaidInvestment)
                }
                helperText={
                  editForm.touched.maxUnpaidInvestment &&
                  editForm.errors.maxUnpaidInvestment
                }
                id="maxUnpaidInvestment"
                name="maxUnpaidInvestment"
                type="number"
                value={editForm.values.maxUnpaidInvestment}
                onChange={editForm.handleChange}
                fullWidth
                variant="outlined"
                label="Max. Unpaid Investment"
              />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <LoadingButton
                  disabled={edit.isLoading}
                  loading={edit.isLoading}
                  type="submit"
                  fullWidth
                  sx={theme.custom.addButton}
                >
                  Edit Cycle Period
                </LoadingButton>
              </Box>
            </form>
          </Grid>
        </Grid>
        {/* ------------------------------ */}
      </Container>
    </>
  );
}
EditCyclePeriod.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
