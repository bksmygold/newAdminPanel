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
const Mfa = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("First name is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      router.push("/");
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
              <Image src="/logo.png" alt="me" width="64" height="64" />

              <Typography sx={{ fontWeight: 800 }} variant="h5">
                Your system is protected{" "}
              </Typography>
              <Typography sx={{ fontWeight: 420 }} variant="h5">
                {" "}
                with MFA, Please enter MFA using google authenticator
              </Typography>

             
            </Box>

            <CustomTextField
              error={Boolean(formik.touched.code && formik.errors.code)}
              fullWidth
              helperText={formik.touched.code && formik.errors.code}
              label="MFA Code"
              margin="normal"
              name="code"
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
                Verify and proceed
              </Button>
            </Box>
         
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Mfa;
