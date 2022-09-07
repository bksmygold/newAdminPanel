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
        <title>Dashboard | Add-Color </title>
      </Head>
      <Form title="Add Color" desc="Add Color type used for products in E-commerce" add="Color">
        <FormInput title="Enter Color Type*" label=" Color" />
      </Form>
    </>
  );
}
AddColor.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
