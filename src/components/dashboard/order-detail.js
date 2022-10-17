import Head from "next/head";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { GraphCard } from "./cards/graphCard";
import { useController } from "src/controller/dashboard";
import { RetailCard } from "./cards/myGoldRetailCard";
import { OrderSkeleton } from "../loading";
//================================================
export default function OrderDetails() {
    const { orderQuery } = useController()
    if (orderQuery.isLoading) return <OrderSkeleton />
    // console.log("orders ---", orderQuery)
    //================================================
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard totalOrder title="Total Order" stats={orderQuery.data.orders.total} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard toBePacked title="To be Packed" stats={orderQuery.data.orders.toBePacked} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard toBeShipped title="To be Shipped" stats={orderQuery.data.orders.toBeShipped} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard inTransit title="In-Transit" stats={orderQuery.data.orders.inTransit} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard orderDelivered title="Order Delivered" stats={orderQuery.data.orders.delivered} />
                </Grid>

            </Grid>

            <Grid container spacing={3} sx={{mt:5}}>

                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard totalReturn title="Total Returns" stats={orderQuery.data.returns.total} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard toBePicked title="To be Picked" stats={orderQuery.data.returns.toBePicked} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard toBeRecieved title="To be Recieved" stats={orderQuery.data.returns.toBeReceived} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard returnAccepted title="Return Accepted" stats={orderQuery.data.returns.accepted} />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                    <RetailCard returnRejected title="Return Rejected" stats={orderQuery.data.returns.rejected} />
                </Grid>

            </Grid>


        </>
    )
}