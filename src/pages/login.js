import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Facebook as FacebookIcon } from "../icons/facebook";
import { Google as GoogleIcon } from "../icons/google";
import logo from "../assets/logo.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//=====================================================
const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "demo@devias.io",
      password: "Password123",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      router.push("/");
    },
  });
  // console.log("formik --",formik)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  //=====================================================
  // return(
  //   <>
  //     <Head>
  //       <title>Login | Admin Panel</title>
  //     </Head>
  //     <Box
  //       component="main"
  //       sx={{
  //         alignItems: "center",
  //         display: "flex",
  //         flexGrow: 1,
  //         minHeight: "100%",
  //       }}
  //     >
  //       <Container maxWidth="sm">
  //         <NextLink href="/" passHref>
  //           <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
  //             Dashboard
  //           </Button>
  //         </NextLink>
  //         <form onSubmit={formik.handleSubmit}>
  //           <Box sx={{ my: 3 }}>
  //             <Typography color="textPrimary" variant="h4">
  //               Sign in
  //             </Typography>
  //             <Typography color="textSecondary" gutterBottom variant="body2">
  //               Sign in on the internal platform
  //             </Typography>
  //           </Box>

  //           <Box
  //             sx={{
  //               pb: 1,
  //               pt: 3,
  //             }}
  //           >
  //             <Typography align="center" color="textSecondary" variant="body1">
  //               Login with email address
  //             </Typography>
  //           </Box>
  //           <TextField
  //             error={Boolean(formik.touched.email && formik.errors.email)}
  //             fullWidth
  //             helperText={formik.touched.email && formik.errors.email}
  //             label="Email Address"
  //             margin="normal"
  //             name="email"
  //             onBlur={formik.handleBlur}
  //             onChange={formik.handleChange}
  //             type="email"
  //             value={formik.values.email}
  //             variant="outlined"
  //           />
  //           <TextField
  //             error={Boolean(formik.touched.password && formik.errors.password)}
  //             fullWidth
  //             helperText={formik.touched.password && formik.errors.password}
  //             label="Password"
  //             margin="normal"
  //             name="password"
  //             onBlur={formik.handleBlur}
  //             onChange={formik.handleChange}
  //             type="password"
  //             value={formik.values.password}
  //             variant="outlined"
  //           />
  //           <Box sx={{ py: 2 }}>
  //             <Button
  //               color="primary"
  //               disabled={formik.isSubmitting}
  //               fullWidth
  //               size="large"
  //               type="submit"
  //               variant="contained"
  //             >
  //               Sign In Now
  //             </Button>
  //           </Box>
  //           <Typography color="textSecondary" variant="body2">
  //             Don&apos;t have an account?{" "}
  //             <NextLink href="/register">
  //               <Link
  //                 to="/register"
  //                 variant="subtitle2"
  //                 underline="hover"
  //                 sx={{
  //                   cursor: "pointer",
  //                 }}
  //               >
  //                 Sign Up
  //               </Link>
  //             </NextLink>
  //           </Typography>
  //         </form>
  //       </Container>
  //     </Box>
  //   </>
  // );

  return (
    // <div className="loginContainer">
    //   <div className="login-box">
    //     <img src={logo} />
    //     <h1>Sign in for </h1>
    //     <h2 className="mb">MyGold Applications</h2>
    //     <div className="mb">
    //       <TextField fullWidth id="outlined-basic" label="Email Address" variant="outlined" />
    //     </div>
    //     <div className="mb">
    //       <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
    //     </div>
    //   </div>

    //   <div className="login-box box">
    //     <div>
    //       <h2>The all-in-one Platform for managing MyGold Eco-System</h2>
    //       <ul>
    //         <li>Powerful and Intiuitive suite of gold eco-system</li>
    //         <li>Manage Master Data of the Entire Eco-System</li>
    //         <li>Manage Merchants</li>
    //         <li>Customer Relational Management</li>
    //         <li>Settlement Management</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    // <Box class="" sx={{ flexDirection: "rows" }}>
    //   <Grid class='box' container spacing={2}>
    //     <Grid item xs={6}>
    //       <Item class="box">xs=8</Item>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //   </Grid>
    // </Box>
    
      <Box
        sx={{
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        alignItems: "center",
          
        }}
      >
        <Grid container>
          <div class="box">
            <Grid item xs={6}>
              <img src={logo} />
              <h3>Sign in for </h3>
              <h5 className="mb">MyGold Applications</h5>{" "}
              <div className="mb">
                {" "}
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                />{" "}
              </div>{" "}
              <div className="mb">
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />{" "}
              </div>
            </Grid>
          </div>
          <div class="box">
            <Grid item xs={6}>
              <div>
                <h2>The all-in-one Platform for managing MyGold Eco-System</h2>
                <ul>
                  <li>Powerful and Intiuitive suite of gold eco-system</li>
                  <li>Manage Master Data of the Entire Eco-System</li>
                  <li>Manage Merchants</li>
                  <li>Customer Relational Management</li>
                  <li>Settlement Management</li>
                </ul>
              </div>
            </Grid>
          </div>
        </Grid>
      </Box>
  );
};

export default Login;
