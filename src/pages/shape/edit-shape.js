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
        <title>Dashboard | Edit-Shape </title>
      </Head>
      <Form title="Edit Shape" desc="Edit Shape used for products in E-commerce" edit="Shape">
        <FormInput title="Enter Shape Type*" label=" Shape" />
      </Form>
    </>
  );
}
EditMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
