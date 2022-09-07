import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditCategory() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Collection </title>
      </Head>
      <Form
        title="Edit Category"
        desc="Edit Category type used for products in E-commerce"
        edit="Category"
      >
        <FormInput title="Enter Category Name*" label=" Category" />
      </Form>
    </>
  );
}
EditCategory.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
