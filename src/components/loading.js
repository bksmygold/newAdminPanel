import Image from 'next/image';
import React from 'react';
import { Grid, Skeleton, Card, CardHeader, CardContent, Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useController } from 'src/controller/dashboard';

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
        <Grid container spacing={4} sx={{ margin: "auto" }}>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex"}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="50%" />

              </Box>
              <CardHeader sx={{ p: 2 }}
                avatar={<Skeleton animation="wave" variant="rounded" width={120} height={100} />
                }
              />
            </Card>
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex"}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="50%" />

              </Box>
              <CardHeader sx={{ p: 2 }}
                avatar={<Skeleton animation="wave" variant="rounded" width={120} height={100} />
                }
              />
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex"}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="50%" />

              </Box>
              <CardHeader sx={{ p: 2 }}
                avatar={<Skeleton animation="wave" variant="rounded" width={120} height={100} />
                }
              />
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex"}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="50%" />

              </Box>
              <CardHeader sx={{ p: 2 }}
                avatar={<Skeleton animation="wave" variant="rounded" width={120} height={100} />
                }
              />
            </Card>
          </Grid>

                
        </Grid>
      </Stack>
    </>
  );
}

export const OrderSkeleton = () => {
  return (
    <>
      <Stack spacing={1}>
        <Grid container spacing={4} sx={{ margin: "auto" }}>
          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Stack>

      <Stack spacing={1}>
        <Grid container spacing={4} sx={{ margin: "auto" }}>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardHeader
                avatar={<Skeleton animation="wave" variant="circular" width={50} height={50} />
                }
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Skeleton animation="wave" height={40} width="140px" />
                <Skeleton animation="wave" height={40} width="50%" />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export const PeopleSkeleton = () => {
  return (
    <>
       <Stack spacing={1} sx={{width:"100%"}}>
        <Grid container spacing={4} sx={{ margin: "auto" }}>

          <Grid item lg={3} sm={6} xs={12}>
            <Card sx={{ display: "flex",width:"600%"}}>
              <Box sx={{ display: "flex", flexDirection: "column",width:"100%" }}>
                <Skeleton animation="wave" height={30} width="140px" />
                <Skeleton animation="wave" height={30} width="140px" />

              </Box>
              <CardHeader sx={{ p: 2 }}
                avatar={<Skeleton animation="wave" variant="rounded" width={120} height={100} />
                }
              />
            </Card>
          </Grid>

         
                
        </Grid>
      </Stack>
    </>
  );
}