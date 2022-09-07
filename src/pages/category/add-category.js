import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddCategory() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Category </title>
      </Head>
      <Form
        title="Add Category"
        desc="Add Category type used for products in E-commerce"
        add="Category"
      >
        <FormInput title="Enter Category Name*" label=" Category" />
      </Form>
    </>
  );
}
AddCategory.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
