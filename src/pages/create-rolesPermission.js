import Head from "next/head";
import { DashboardSidebar } from "src/components/dashboard-sidebar";
import { Box, Container, Typography, Grid, Button, TextField } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { InfoCard } from "../components/infoCard";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "../components/utility/table";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getUnit, deleteUnit, postUnit } from "src/apis/unit";
import React, { useState } from "react";
import DeleteSpinner from "src/components/deleteSpinner";
import Loading from "src/components/loading";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { RoleCard } from "../components/roleCard";
import { PermissionCard } from "../components/permissionCard";
import LoadingButton from "@mui/lab/LoadingButton";

//=============================
const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #a88143;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #a88143;
    }
  }
`;
//=======================================================
export default function RolesPermission() {
  //=======================================================
  let taxList = [
    "Governement Tax",
    "HSN & GST",
    "TDS & TCS",
    "By & Save",
    "Treasury Mandi",
    "Interest Rates",
    "Bid-Buy and Sell",
    "Refer & Earn Commissions",
    "E-Commerce Making Charge",
    "Retailer Commissions",
    "Subscription for ads",
    "Subscription for bids",
    "GBP Levels",
  ];
  let userManagementList = [
    "Roles & Permissions",
    "Organisation Users",
    "VIP Referrals",
    "GBP Users",
    "Sales Referrals",
    "Merchant",
    "Retail",
    "Suppliers",
  ];
  let ecommList = [
    "Metal",
    "Metal Group",
    "Ornaments",
    "Units",
    "Cuts",
    "Colors",
    "Shape",
    "Clarity",
    "Style",
    "Collections",
    "Categories",
    "Varieties",
    "Items",
    "Product Types",
    "FAQ",
    "Standard Plans",
    "Cycle Period",
  ];
  let promotionalList = [
    "Offer Sliders",
    "How-to Videos",
    "Testimonials",
    "Ad Position",
    "Offer Popups",
    "Merchant Banners",
  ];
  let reportsList = ["Financials", "Metal", "Smart Reports"];
  //=======================================================
  const router = useRouter();

  const [generalSelected, setGeneralSelected] = useState(false);
  const [financialSelected, setFinancialSelected] = useState(false);
  const [tax, setTax] = useState(false);
  const [userManagement, setUserManagement] = useState(false);
  const [ecomm, setEcomm] = useState(false);
  const [promotional, setPromotional] = useState(false);
  const [reports, setReports] = useState(false);

  //=======================
  const formik = useFormik({
    initialValues: {
      name: "",
      permissions: [],
    },
    validationSchema: yup.object({
      name: yup.string("Enter Unit Name").required("Unit is required"),
      conversionFactor: yup
        .number("Enter Conversion Factor")
        .required("Conversion Factor is required"),
    }),
    onSubmit: (values) => {
      roleMutation.mutate(values);
    },
  });

  const roleMutation = useMutation({
    mutationFn: postUnit,
    onSuccess: (res) => {
      swal("Unit Added !", res.message, "success"), router.push("/unit/view-unit");
    },
    onError: (err) => swal("Erro !", err.message, "error"),
  });
  //=======================================================
  return (
    <>
      <Typography
        sx={{
          marginTop: 4,
          marginBottom: 2,
          color: "#8B5704",
          marginLeft: 1,
          // fontWeight: "bolder",
        }}
        variant="h5"
      >
        Create Roles & Permissions
      </Typography>
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <Box sx={{ width: "70vw", display: "flex", justifyContent: "space-between" }}>
            <CustomTextField
              id="name"
              name="name"
              variant="outlined"
              label="Role name "
              sx={{ mt: 1, width: "40%" }}
            />{" "}
            <CustomTextField
              id="name"
              name="name"
              variant="outlined"
              label="Description"
              sx={{ mt: 1, width: "50%" }}
            />{" "}
          </Box>
        </Grid>
      </Grid>
      <Typography
        sx={{
          marginTop: 4,
          marginBottom: 2,
          color: "#8B5704",
          marginLeft: 1,
          // fontWeight: "bolder",
        }}
        variant="h6"
      >
        Selected Dashboard can be accessed
      </Typography>
      <Grid container spacing={8} sx={{ backgroundColor: "", p: 5 }}>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard
            title="General"
            generalSelected={generalSelected}
            onClick={() => setGeneralSelected((prev) => !prev)}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard
            title="Financial"
            financialSelected={financialSelected}
            onClick={() => setFinancialSelected((prev) => !prev)}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard title="Retail" />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard title="Inventory" />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <RoleCard title="CRM" />
        </Grid>
      </Grid>
      {generalSelected ? (
        <>
          <Typography
            sx={{
              marginTop: 4,
              marginBottom: 2,
              color: "#8B5704",
              marginLeft: 1,
            }}
            variant="h6"
          >
            Select Modules
          </Typography>
          <Grid container spacing={3} sx={{ p: 2 }}>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                userManagement={userManagement}
                title="User Management"
                onClick={() => setUserManagement((prev) => !prev)}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard tax={tax} title="Tax Settings" onClick={() => setTax((prev) => !prev)} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                ecomm={ecomm}
                title="E-Commerce Management"
                onClick={() => setEcomm((prev) => !prev)}
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                promotional={promotional}
                onClick={() => setPromotional((prev) => !prev)}
                title="Promotional Settings"
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <RoleCard
                reports={reports}
                title="Reports"
                onClick={() => setReports((prev) => !prev)}
              />
            </Grid>
          </Grid>
        </>
      ) : null}

      {tax ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {taxList.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard key={x} title={x} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
      {userManagement ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {userManagementList.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard key={x} title={x} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
      {ecomm ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {ecommList.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard key={x} title={x} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
      {promotional ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {promotionalList.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard key={x} title={x} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
      {reports ? (
        <>
          <Grid container spacing={3} sx={{ p: 2 }}>
            {reportsList.map((x) => (
              <Grid key={x} item xl={3} lg={3} sm={6} xs={12}>
                <PermissionCard key={x} title={x} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}

      <LoadingButton
        disabled={roleMutation.isLoading}
        loading={roleMutation.isLoading}
        type="submit"
        sx={{
          backgroundColor: "#DDB070",
          width:"50%",
          margin:"auto",
          marginTop: 2,
          marginBottom: 8,
          border: "none",
          color: "white",
          "&:hover": {
            backgroundColor: "#DBA251",
          },
        }}
      >
        Add Role
      </LoadingButton>
    </>
  );
}
RolesPermission.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
