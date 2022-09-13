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
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import Image from "next/image";
//========================================
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
//========================================
const Login  = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("First name is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      router.push("/mfa");
    },
  });
  //========================================
  return (
    <>
      <Head>
        <title>Register | MyGold Login</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "50%",
          width: "90%",
          margin: "auto",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "#fdfaf2",
            borderRadius: 1.5,
            // height: "70vh",
            padding: 5,
            boxShadow: "0px 4px 1px 0px #d2c6c6",
            border: "1px solid #d2c6c657",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 7, color: "#8b5704" }}>
              <Image src="/logo.png" alt="me" width="80" height="80" />

              <Typography sx={{ fontWeight: 700 }} variant="h5">
                Sign in for{" "}
              </Typography>
              <Typography sx={{ fontWeight: 400 }} variant="h5">
                {" "}
                MyGold Applications
              </Typography>

              <Typography color="textSecondary" sx={{ marginTop: 1 }} gutterBottom variant="body2">
                Use your email to log in to your account
              </Typography>
            </Box>
            <CustomTextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="Username/email"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
              variant="outlined"
            />

            <CustomTextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <Button
                sx={{ backgroundColor: "#ddb070", color: "white" }}
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              <NextLink href="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Forgot password?{" "}
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
