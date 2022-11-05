import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  styled,
  InputAdornment,
  IconButton
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { validateLogin } from "src/apis/login";
import swal from "sweetalert";
import LoadingButton from "@mui/lab/LoadingButton";
import Swal from "sweetalert2";
import { CustomTextField } from "src/components/customMUI";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTheme } from "@mui/styles";
//========================================
const Login = () => {
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      loginMutation.mutate(values);
      // router.push("/mfa");
    },
  });

  const loginMutation = useMutation({
    mutationFn: validateLogin,
    onSuccess: (res) => {
      console.log("--->", res)
      if (res === "OK")
        Swal.fire("Credentials verified !", "Continue with the MFA code verification", "success"),
          router.push({
            pathname: "/auth/mfa",
            query: formik.values,
          });
    },
    onError: (err) =>
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      }),
  });

  console.log(formik.errors)
  //========================================
  return (
    <>
      <Head>
        <title>Login | Bks MyGold </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          // minHeight: "50%",
          minWidth: "100%",
          margin: "auto",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#fdfaf2",
            borderRadius: 1.5,
            // height: "70vh",
            padding: 1,
            boxShadow: "0px 4px 1px 0px #d2c6c6",
            border: "1px solid #d2c6c657",
            display: "flex",
            width: "100%"
          }}
        >
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ my: 7, color: "#8b5704" }}>
                <Image src="/myGoldLogo.png" alt="me" width="150" height="150" />

                <Typography variant="h5">
                  <span style={{fontWeight:700}}>Sign in</span> for{" "}
                </Typography>
                <Typography sx={{ fontWeight: 400 }} variant="h5">
                  {" "}
                  MyGold Applications
                </Typography>

                <Typography color="textSecondary" sx={{ marginTop: 1 }} gutterBottom variant="body2">
                  Use your credentials to log in to your account
                </Typography>
              </Box>
              <CustomTextField
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                fullWidth
                label="email"
                name="email"
                // onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                variant="outlined"
              />

              <CustomTextField
                 error={formik.touched.password && Boolean(formik.errors.password)}
                 helperText={formik.touched.password && formik.errors.password}
                sx={{ mt: 2 }}
                label='password'
                id="password"
                name="password"
                value={formik.values.password}
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(prev => !prev)}
                      // onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Box sx={{ py: 2 }}>
                <LoadingButton
                  disabled={loginMutation.isLoading}
                  loading={loginMutation.isLoading}
                  type="submit"
                  fullWidth
                  sx={theme.custom.editButton}
                >
                  Sign in
                </LoadingButton>
              </Box>
              <Typography color="textSecondary" variant="body2">
                <NextLink href="/auth/verify-email" passHref>
                  <Link sx={{color:'#8b5704',fontWeight:"bold"}} variant="subtitle2" underline="hover">
                    Forgot password?{" "}
                  </Link>
                </NextLink>
              </Typography>
            </form>
          </Box>
          <Box
            sx={{
              // width: "40%"
              m: "5%"
            }}
          >
            <img className="responsive-image" src={'../loginBg.png'} style={{ maxWidth: "40vw" }} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
