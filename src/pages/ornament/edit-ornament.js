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
        <title>Dashboard | Edit-Ornament </title>
      </Head>

      <Form title="Edit Ornament Type" desc="Edit Ornament Type for E-commerce" edit="Ornament">
        <FormInput title="Enter Ornament Name*" label=" ornament name" />
      </Form>
    </>
  );
}
EditMetal.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
