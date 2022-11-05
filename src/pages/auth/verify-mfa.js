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
import { login } from "src/apis/login";

//========================================
const MfaVerification = () => {
    const theme = useTheme()
    const [showPassword, setShowPassword] = useState(false)
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
            console.log("payload ==>", payload);
            loginMutation.mutate(payload)
            // router.push("/");
        },
    });

    const loginMutation = useMutation({
        
        onSuccess: (res) => {

            localStorage.setItem("token", res.accessToken)

            Swal.fire("Logged in successfully !", res.message, "success"),
                router.push("/");
        },
        onError: (err) =>
            Swal.fire("Something went wrong !", err.message, "error"),
    });
    //========================================
    return (
        <>
            <Head>
                <title>Login | Bks MyGold </title>
            </Head>
            <Box
                maxWidth="xl"
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

                                <Typography sx={{ fontWeight: 800 }} variant="h5">
                                    Your system is protected{" "}
                                </Typography>
                                <Typography variant="h5">
                                    {" "}
                                    with MFA, Please enter MFA using{" "}
                                    <Link
                                        variant="h5"
                                        sx={{
                                            textDecoration: "none",
                                            fontWeight: 400,
                                            color: "#8b5704",
                                            "&:hover": {
                                                fontWeight: "bolder"
                                            }
                                        }}
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
                                // type="password"
                                value={formik.values.password}
                                variant="outlined"
                            />



                            <Box sx={{ py: 2 }}>
                                <Button
                                    onClick={()=>router.push("/auth/reset-password")}
                                    type="submit"
                                    fullWidth
                                    sx={theme.custom.editButton}
                                >
                                    Verify and proceed
                                </Button>
                            </Box>

                        </form>
                    </Box>
                    <Box
                        sx={{
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

export default MfaVerification;
