import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddClarity() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Clarity </title>
      </Head>
      <Form title="Add Clarity" desc="Add Clarity  used for products in E-commerce" add="Clarity">
        <FormInput title="Enter Clarity*" label=" Clarity" />
      </Form>
    </>
  );
}
AddClarity.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
