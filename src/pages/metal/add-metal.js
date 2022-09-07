import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddMetal() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Metal </title>
      </Head>
      <Form title="Add Metal" desc="Add Metal for E-commerce" add="Metal">
        <FormInput title="Metal Name*" label="Name" />
        <FormInput title="Choose Metal Icon" isFile />
      </Form>
    </>
  );
}
AddMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
