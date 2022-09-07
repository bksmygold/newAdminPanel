import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddItem() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Item </title>
      </Head>
      <Form title="Add Item" desc="Add Item type used for products in E-commerce" add="Item">
        <FormInput title="Enter Item Name*" label=" Item" />
      </Form>
    </>
  );
}
AddItem.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
