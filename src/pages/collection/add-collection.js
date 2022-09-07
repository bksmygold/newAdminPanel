import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddCollection() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Collection </title>
      </Head>
      <Form title="Add Collection" desc="Add Collection type used for products in E-commerce" add="Collection">
        <FormInput title="Enter Collection Name*" label=" Collection" />
      </Form>
    </>
  );
}
AddCollection.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
