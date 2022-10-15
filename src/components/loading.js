import Image from 'next/image';
import { Grid, Skeleton } from "@mui/material";
import Stack from '@mui/material/Stack';


export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src="/loading.gif" alt="me" width="700" height="500" />
    </div>
  );
}

export const LoadingSkeleton = () => {
  return (
    <>
      <Stack spacing={1}>
        <Grid container spacing={4} sx={{margin:"auto"}}>
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
        </Grid>

        <Grid container spacing={4} >
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Skeleton variant="rounded" width={250} height={150} />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
