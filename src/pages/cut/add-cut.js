import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddCut() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Cut </title>
      </Head>
      <Form title="Add Cut" desc="Add Cut type used for products in E-commerce" add="Cut">
        <FormInput title="Enter Cut Type*" label=" Cut" />
      </Form>
    </>
  );
}
AddCut.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
