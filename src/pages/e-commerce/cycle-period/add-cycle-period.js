import Head from "next/head";
import { Container, Typography, Grid, Button, styled, TextField, Box } from "@mui/material";
import { DashboardLayout } from "../../../components/layout/dashboard-layout";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useRouter } from "next/router";
import { useTheme } from '@mui/styles';
import { CustomTextField } from 'src/components/customMUI';
import { useController } from "src/controller/cyclePeriod";
//=======================================================
export default function AddCyclePeriod() {
  //=======================
  const router = useRouter();
  const theme = useTheme();
  const {
    add,
    addForm,
  } = useController()

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Cycle Period</title>
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
          Add Cycle Period
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#cba56a',
            marginBottom: 5,
            fontWeight: 'bold',
          }}
        >
          Add Cycle Period for Buy and Save Modules
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
                Cycle Period Name
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
                  addForm.touched.shortName && Boolean(addForm.errors.shortName)
                }
                helperText={addForm.touched.shortName && addForm.errors.shortName}
                id="shortName"
                name="shortName"
                value={addForm.values.shortName}
                onChange={addForm.handleChange}
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
                  addForm.touched.gracePeriod &&
                  Boolean(addForm.errors.gracePeriod)
                }
                helperText={
                  addForm.touched.gracePeriod && addForm.errors.gracePeriod
                }
                id="gracePeriod"
                name="gracePeriod"
                type="number"
                value={addForm.values.gracePeriod}
                onChange={addForm.handleChange}
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
                error={addForm.touched.cycle && Boolean(addForm.errors.cycle)}
                helperText={addForm.touched.cycle && addForm.errors.cycle}
                id="cycle"
                name="cycle"
                type="number"
                value={addForm.values.cycle}
                onChange={addForm.handleChange}
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
                  addForm.touched.lockinPeriod &&
                  Boolean(addForm.errors.lockinPeriod)
                }
                helperText={
                  addForm.touched.lockinPeriod && addForm.errors.lockinPeriod
                }
                id="lockinPeriod"
                name="lockinPeriod"
                type="number"
                value={addForm.values.lockinPeriod}
                onChange={addForm.handleChange}
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
                error={addForm.touched.maxSkip && Boolean(addForm.errors.maxSkip)}
                helperText={addForm.touched.maxSkip && addForm.errors.maxSkip}
                id="maxSkip"
                name="maxSkip"
                type="number"
                value={addForm.values.maxSkip}
                onChange={addForm.handleChange}
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
                  addForm.touched.maxUnpaidSkip &&
                  Boolean(addForm.errors.maxUnpaidSkip)
                }
                helperText={
                  addForm.touched.maxUnpaidSkip && addForm.errors.maxUnpaidSkip
                }
                id="maxUnpaidSkip"
                name="maxUnpaidSkip"
                type="number"
                value={addForm.values.maxUnpaidSkip}
                onChange={addForm.handleChange}
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
                  addForm.touched.maxUnpaidInvestment &&
                  Boolean(addForm.errors.maxUnpaidInvestment)
                }
                helperText={
                  addForm.touched.maxUnpaidInvestment &&
                  addForm.errors.maxUnpaidInvestment
                }
                id="maxUnpaidInvestment"
                name="maxUnpaidInvestment"
                type="number"
                value={addForm.values.maxUnpaidInvestment}
                onChange={addForm.handleChange}
                fullWidth
                variant="outlined"
                label="Max. Unpaid Investment"
              />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <LoadingButton
                  fullWidth
                  disabled={add.isLoading}
                  loading={add.isLoading}
                  type="submit"
                  sx={theme.custom.addButton}
                >
                  Add Cycle Period
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
AddCyclePeriod.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;