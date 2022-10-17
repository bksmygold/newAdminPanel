import Head from "next/head";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { GraphCard } from "./cards/graphCard";
import { useController } from "src/controller/dashboard";
import { RateCard } from "./cards/rateCard";
import { LoadingSkeleton } from "../loading";
//================================================
export default function GeneralDetails() {
    const { analyticsQuery } = useController()
    if (analyticsQuery.isLoading) return <LoadingSkeleton />
    //================================================
    return (

        <Grid container spacing={1}>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Visits"
                    stats={analyticsQuery.data?.visits?.value}
                    statsPer={analyticsQuery.data?.visits?.change}
                    graph={analyticsQuery.data?.visits?.data}
                />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Downloads"
                    stats={analyticsQuery.data?.downloads?.value}
                    statsPer={analyticsQuery.data?.downloads?.change}
                    graph={analyticsQuery.data?.downloads?.data}

                />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Conversions"
                    stats={analyticsQuery.data?.conversions?.value}
                    statsPer={analyticsQuery.data?.conversions?.change}
                    graph={analyticsQuery.data?.conversions?.data}
                />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Orders"
                    stats={analyticsQuery.data?.orders?.value}
                    statsPer={analyticsQuery.data?.orders?.value}
                    graph={analyticsQuery.data?.orders?.data}

                />
            </Grid>
            {/* </Grid>

{/* -------------------------------------------------------------- */}

            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Current Buy Rate"
                    rate={analyticsQuery.data?.currentBuyRate?.value}
                    percentage={analyticsQuery.data?.currentBuyRate?.change}
                    updatedAt={analyticsQuery.data?.currentBuyRate?.updatedAt.substring(0, 10)}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Current Sell Rate"
                    rate={analyticsQuery.data?.currentSellRate?.value}
                    percentage={analyticsQuery.data?.currentSellRate?.change}
                    updatedAt={analyticsQuery.data?.currentSellRate?.updatedAt.substring(0, 10)}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Average Buy Rate"
                    rate={analyticsQuery?.data?.averageBuyRate}

                />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Average Sell Rate"
                    rate={analyticsQuery.data?.averageSellRate}
                />
            </Grid>
        </Grid >
    )
}