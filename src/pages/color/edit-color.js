import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditMetal() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Color </title>
      </Head>
      <Form title="Edit Color" desc="Edit Color type used for products in E-commerce" edit="Color">
        <FormInput title="Enter Color Type*" label=" Color" />
      </Form>
    </>
  );
}
EditMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
