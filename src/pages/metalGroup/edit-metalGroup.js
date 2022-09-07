import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditMetal() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Metal-Group </title>
      </Head>

      <Form title="Edit Metal Group" desc="Edit Metal Group for E-commerce" edit="Metal Group">
        <FormInput title="Metal Group Short Name*" label="Short name" />
        <FormInput title="Select Metal Type *" dropdown label="Choose Metal" />
        <FormInput title="Enter Purityof the Metal*" label="Purity" />
        <FormInput title="Rounding Digits*" label="Choose digit" dropdown />
        <FormInput title="Select the Unit Type*" label="Choose Unit" dropdown />
        <FormInput title="Select the Ornament Type*" label="Choose Ornament" dropdown />
      </Form>
    </>
  );
}
EditMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
