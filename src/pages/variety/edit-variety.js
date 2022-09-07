import Head from "next/head";
import { Container, Typography, Grid, Button } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import FormInput from "../../components/utility/formInput";
import Form from '../../components/utility/form'
//=======================================================
export default function EditVariety() {
  //=======================

  //=======================================================
  return (
    <>
      {/* ------------------------------ */}
      <Head>
        <title>Dashboard | Edit-Variety </title>
      </Head>

      <Form
        title="Edit Variety"
        desc="Edit Variety type  used in E-commerce"
        edit="Variety"
      >
        <FormInput title="Enter Variety Type*" label=" Variety" />
      </Form>
    </>
  );
}
EditVariety.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
