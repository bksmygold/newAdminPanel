import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddProductType() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Product Type </title>
      </Head>
      <Form
        title="Add Product Type"
        desc="Add Product Type type used for products in E-commerce"
        add="Product Type"
      >
        <FormInput title="Enter Product Type Name*" label=" Product Type" />
      </Form>
    </>
  );
}
AddProductType.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
