import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddVariety() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Variety </title>
      </Head>
      <Form
        title="Add Variety"
        desc="Add Variety type used in E-commerce"
        add="Variety"
      >
        <FormInput title="Enter Variety Type*" label=" Variety" />
      </Form>
    </>
  );
}
AddVariety.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
