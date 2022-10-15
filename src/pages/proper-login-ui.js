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
import { useMutation } from "@tanstack/react-query";
import { validateLogin } from "src/apis/login";
import swal from "sweetalert";
import LoadingButton from "@mui/lab/LoadingButton";
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
const Lauda = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
        }),
        onSubmit: (values) => {
            loginMutation.mutate(values);
            // router.push("/mfa");
        },
    });

    const loginMutation = useMutation({
        onSuccess: (res) => {
            if (res === "OK")
                Swal.fire("Credentials verified !", "Continue with the MFA code verification", "success"),
                    router.push({
                        pathname: "/mfa",
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
                    width: "67%",
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
                                <Image src="/logo.png" alt="me" width="80" height="80" />

                                <Typography sx={{ fontWeight: 700 }} variant="h5">
                                    Sign in for{" "}
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
                                error={Boolean(formik.touched.email && formik.errors.email)}
                                fullWidth
                                helperText={formik.touched.email && formik.errors.email}
                                label="email"
                                margin="normal"
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
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
                                    Sign in
                                </LoadingButton>
                            </Box>
                            <Typography color="textSecondary" variant="body2">
                                <NextLink href="/login" passHref>
                                    <Link variant="subtitle2" underline="hover">
                                        Forgot password?{" "}
                                    </Link>
                                </NextLink>
                            </Typography>
                        </form>
                    </Box>
                    <Box
                        sx={{
                            // width: "40%"
                            m:"5%"
                        }}
                    >
                        <img className="responsive-image" src={'./loginBg.png'} style={{maxWidth:"40vw"}} />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Lauda;
