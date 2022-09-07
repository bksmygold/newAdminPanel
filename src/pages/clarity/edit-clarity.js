import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditClarity() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Clarity </title>
      </Head>
      <Form title="Edit Clarity" desc="Add Clarity  used for products in E-commerce" edit="Clarity">
        <FormInput title="Enter Clarity*" label=" Clarity" />
      </Form>
    </>
  );
}
EditClarity.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
