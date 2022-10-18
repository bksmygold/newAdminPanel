import Head from "next/head";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { GraphCard } from "./cards/graphCard";
import { useController } from "src/controller/dashboard";
import { RateCard } from "./cards/rateCard";
import { LoadingSkeleton } from "../loading";
import { FinancialsCard } from "src/components/dashboard/cards/myGoldFinancialsCard";

//================================================
export default function FinancialsDetails() {
    const {
        receivables_Query,
        settlement_Query,
        commission_Query
    } = useController()

    console.log("commission ---", commission_Query.data)
    if (receivables_Query.isLoading) return <LoadingSkeleton />

    //================================================
    return (

        <Grid container spacing={3}>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <FinancialsCard isInvoice />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <FinancialsCard
                    title="Receiveables"
                    value={receivables_Query.data.data[0].value}
                />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <FinancialsCard
                    title="Settlements"
                    value={settlement_Query?.data?.data[0].value}
                />
            </Grid>

            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <FinancialsCard
                    title="Commissions"
                    value={commission_Query?.data?.data[0].value}
                />
            </Grid>

        </Grid>
    )
}