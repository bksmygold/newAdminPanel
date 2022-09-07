import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditCollection() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Collection </title>
      </Head>
      <Form title="Edit Collection" desc="Edit Collection type used for products in E-commerce" edit="Collection">
        <FormInput title="Enter Collection Name*" label=" Collection" />
      </Form>
    </>
  );
}
EditCollection.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
