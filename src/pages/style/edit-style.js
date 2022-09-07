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
        <title>Dashboard | Edit-Style</title>
      </Head>
      <Form title="Edit Style" desc="Edit Style type used for products in E-commerce" edit="Style">
        <FormInput title="Enter Style Type*" label=" style name " />
        <FormInput title="Choose Metal Group*" label=" metal group" dropdown />
      </Form>
    </>
  );
}
EditMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
