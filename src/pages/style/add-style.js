import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddColor() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Style </title>
      </Head>
      <Form title="Add Style" desc="Add Style type used for products in E-commerce" add="Style">
        <FormInput title="Enter Style Type*" label=" style name " />
        <FormInput title="Choose Metal Group*" label=" metal group" dropdown />
      </Form>
    </>
  );
}
AddColor.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
