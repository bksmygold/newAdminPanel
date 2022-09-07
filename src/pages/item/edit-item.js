import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditItem() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Item </title>
      </Head>
      <Form title="Edit Item" desc="Edit Item type used for products in E-commerce" edit="Item">
        <FormInput title="Enter Item Name*" label=" Item" />
      </Form>
    </>
  );
}
EditItem.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
