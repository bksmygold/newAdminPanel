import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { updateUser, getUserById } from "src/apis/user";
import LoadingButton from "@mui/lab/LoadingButton";
import { getLoggedInUser } from "src/apis/user";
import { useEffect } from "react";
import Swal from "sweetalert2";
import {useTheme} from "@mui/styles"

//=======================================================
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

export const AccountProfileDetails = (props) => {
  const router = useRouter()
  const theme = useTheme()
  
    const [user, setUser] = useState({});
    useEffect(() => {
      getLoggedInUser().then((res) => setUser(res));
    }, []);
    
    //=======================================================
  
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobile: 0,
    },
    validationSchema: yup.object({
      fullName: yup.string("Enter full name").required("full name is required"),
      email: yup.string("Enter email").required("email is required"),
      mobile: yup.number("Enter mobile").required("mobile is required"),
    }),
    onSubmit: (values) => {
      userMutation.mutate({ data: values, id: query.data.id });
    },
  });
  
    const query = useQuery({
      querKey: ["user", user.id],
      queryFn: () => getLoggedInUser(),
      onSuccess: (res) => formik.setValues(res),
      enabled: !!user.id,
    });
  
    // console.log("query ---",query.data.id);
    
  
    const userMutation = useMutation({
      mutationFn: updateUser,
      onSuccess: (res) => {
        Swal.fire("User updated!", res.message, "success"),
        router.push("/account")
      },
      onError: (err) => swal("Error !", err.message, "error"),
    });

  




  //=======================================================
  // const [values, setValues] = useState({
  //   firstName: "Katarina",
  //   lastName: "Smith",
  //   email: "demo@devias.io",
  //   phone: "",
  //   state: "Alabama",
  //   country: "USA",
  // });

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <CustomTextField
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
                id="fullName"
                fullWidth
                label="First name"
                name="fullName"
                onChange={formik.handleChange}
                required
                value={formik.values.fullName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CustomTextField
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                id="mobile"
                fullWidth
                label="mobile"
                name="mobile"
                onChange={formik.handleChange}
                required
                value={formik.values.mobile}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CustomTextField
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                fullWidth
                label="Email"
                name="email"
                onChange={formik.handleChange}
                required
                value={formik.values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          {/* <Button sx={{ backgroundColor: "#905E0F", color: "white" }} variant="contained">
            Save details
          </Button> */}
          <LoadingButton
            disabled={userMutation.isLoading}
            loading={userMutation.isLoading}
            type="submit"
            sx={theme.custom.addButton}
          >Save Changes</LoadingButton>
        </Box>
      </Card>
    </form>
  );
};
