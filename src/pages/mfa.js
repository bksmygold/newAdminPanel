import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography,
  styled,
  Link,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import Image from "next/image";
// import Link from "next/link";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation } from "@tanstack/react-query";
import { login } from "src/apis/login";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

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
  let { email, password } = router.query;

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required("Code is required"),
    }),
    onSubmit: (values) => {
      
      let payload = {
        email: email,
        password: password,
        code: values.code,
      };
      console.log("payload ==>",payload);
      loginMutation.mutate(payload)
      // router.push("/");
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      
      Swal.fire("Logged in successfully !", res.message, "success"),
        router.push("/");
      localStorage.setItem("token",res.accessToken )
    },
    onError: (err) =>
      Swal.fire("Something went wrong !", err.message, "error"),
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
                with MFA, Please enter MFA using{" "}
                <Link
                  sx={{ textDecoration: "underLine", color: "#8b5704" }}
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_IN&gl=US"
                >
                  Google Authenticator
                </Link>
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
              <LoadingButton
                disabled={loginMutation.isLoading}
                loading={loginMutation.isLoading}
                type="submit"
                fullWidth
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
                Verify and proceed
              </LoadingButton>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Mfa;
