import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddMetalGroup() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Ornament </title>
      </Head>
      <Form title="Add Ornament Type" desc="Add Ornament Type for E-commerce" add="Ornament">
        <FormInput title="Enter Ornament Name*" label=" ornament name" />
      </Form>
    </>
  );
}
AddMetalGroup.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
