import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from "../../components/utility/form";
//=======================================================
export default function AddUnit() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Add-Unit </title>
      </Head>
      <Form title="Add Unit" desc="Add Unit type for conversions used in E-commerce" add="unit">
        <FormInput title="Enter Unit Type*" label=" unit" />
      </Form>
    </>
  );
}
AddUnit.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
