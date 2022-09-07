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
        <title>Dashboard | Edit-Unit </title>
      </Head>

      <Form title="Edit Unit" desc="Edit Unit type for conversions used in E-commerce" edit="unit">
        <FormInput title="Enter Unit Type*" label=" unit" />
      </Form>
    </>
  );
}
EditMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
