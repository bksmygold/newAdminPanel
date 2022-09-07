import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddShape() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Shape </title>
      </Head>
      <Form title="Add Shape" desc="Add Shape  used for products in E-commerce" add="Shape">
        <FormInput title="Enter Shape Type*" label=" Shape" />
      </Form>
    </>
  );
}
AddShape.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
