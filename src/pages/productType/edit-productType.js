import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditProductType() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Product Type </title>
      </Head>
      <Form
        title="Edit Product Type"
        desc="Edit Product Type used for products in E-commerce"
        edit="Product Type"
      >
        <FormInput title="Enter Product Type Name*" label=" Product Type" />
      </Form>
    </>
  );
}
EditProductType.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
