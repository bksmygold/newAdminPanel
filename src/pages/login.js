import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import * as React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import swal from "sweetalert";
import { login } from "src/apis/login";
//=====================================================
const Login = () => {
  //====================================
  const [loading, setLoading] = React.useState(false);

  //====================================
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string("Enter your password").required("Password is required"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      login(values)
        .then((res) => {
          localStorage.setItem("token", res.data.token),
            swal("Logged In !", "Welcome To BKS My Gold Admin Panel", "success");
          router.push("/");
        })
        .catch((err) => swal(err.message, "Please check the login credentials", "error"))
        .finally(() => setLoading(false));
    },
  });
  //====================================
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  //=====================================================

  return (
    <div className="container">
      <div className="login">
        <div className="box">
          {/* <img src={logo} /> */}
          <h4>Sign in for MyGold Applications </h4>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              id="username"
              name="username"
              // type="email"
              value={formik.values.username}
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              sx={{
                marginTop: 2,
                borderColor: "red",
              }}
              label="Email Address"
              variant="outlined"
            />
            <TextField
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              sx={{
                marginTop: 2,
              }}
              label="Password"
              variant="outlined"
            />
            <LoadingButton
              disabled={loading}
              loading={loading}
              type="submit"
              sx={{
                marginTop: 2,
                backgroundColor: "#DDB070",
                border: "none",
                color: "white",
                "&:hover": {
                  backgroundColor: "#DBA251",
                },
              }}
            >
              Sign In
            </LoadingButton>
            {/* <button type="submit">Login</button> */}
          </form>
        </div>
        <div className="box1">
          <h2>The all-in-one Platform for managing MyGold Eco-System </h2>
          <p>
            {" "}
            <CheckCircleOutlineIcon />
            Manage Master Data of Entire Eco-System
          </p>{" "}
          <p>
            <CheckCircleOutlineIcon />
            Manage Merchants.
          </p>
          <p>
            <CheckCircleOutlineIcon />
            Customer Relation Managmenet{" "}
          </p>
          <p>
            <CheckCircleOutlineIcon />
            Settlement Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
