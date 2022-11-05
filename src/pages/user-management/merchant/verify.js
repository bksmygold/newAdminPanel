import Head from 'next/head';
import { DashboardSidebar } from 'src/components/sidebar.js/dashboard-sidebar';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { DashboardLayout } from '../../../components/layout/dashboard-layout';
import { InfoCard } from '../../../components/cards/infoCard';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '../../../components/utility/table';
import { useRouter } from 'next/router';
import { getMerchantById, updateMerchant } from 'src/apis/merchant';
import { useMutation, useQuery } from '@tanstack/react-query';
import Loading from 'src/components/loading';
import DeleteSpinner from 'src/components/deleteSpinner';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { LoadingButton } from '@mui/lab';
import swal from 'sweetalert';

//=======================================================
export default function VerifyMerchant() {
    const router = useRouter();
    const theme = useTheme();
    //=======================
    const update = useMutation({
        mutationFn: updateMerchant({ isVerified: true }, router.query.id),
        onSuccess: (res) => {
            swal('Merhcant Verified !', 'Continue with the admin panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
        // enabled: !!router.query.id,
    });
    //=======================
    const query = useQuery({
        queryKey: 'singleMerchant',
        queryFn: () => getMerchantById(router.query.id),
        enabled: !!router.query.id,

    });
    if (query.isLoading) return <Loading />
    //===============================


    //=======================================================
    return (
        <>
            {/* ------------------------------ */}
            <Head>
                <title>Dashboard | Verify-Merchant </title>
            </Head>
            <Grid
                sx={{ mt: 5 }}
                container>
                {query.data?.documents?.map(x => (

                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{
                        justifyContent: "space-around",
                        p: 5,
                        m: "auto",
                        boxShadow: '-3px 3px 4px -2px #d2c6c6',
                        border: '1px solid #d2c6c657',
                        backgroundColor: "#FDFAF2",
                    }}>
                        <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                            <Typography variant="h6" sx={{ color: "black" }}>Document Type :</Typography>
                            <Typography variant="h6" sx={{ color: "black" }}>{x.name}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: 'space-between', mt: 2 }}>
                            <Typography variant="h6" sx={{ color: "black" }}>File :</Typography>
                            <a href={x.file} target="_blank">View Document</a>
                        </Box>
                    </Grid>
                ))}

            </Grid>
            <LoadingButton
                onClick={() => {
                    try {
                        updateMerchant({ isVerified: true }, router.query.id).then(() =>
                        swal('Merhcant Verified !', 'Continue with the admin panel', 'success'))
                        router.push('/user-management/merchant/view')
                    } catch (error) {
                        alert(error)
                    } 
                }}
                type="submit"
                sx={[theme.custom.editButton, { width: "40%", m: "auto", mt: 4 }]}
            >
                Verify ✔
            </LoadingButton>


            {/* <LoadingButton
                disabled={update.isLoading}
                loading={update.isLoading}
                fullWidth
                type="submit"
                sx={[theme.custom.editButton, { width: "40%", m: "auto", mt: 4 }]}
            >
                Verify
            </LoadingButton> */}



        </>
    );
}
VerifyMerchant.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
