import Head from "next/head";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { GraphCard } from "./cards/graphCard";
import { useController } from "src/controller/dashboard";
import { RateCard } from "./cards/rateCard";
import { LoadingSkeleton } from "../loading";
export default function GeneralDetails() {

    const { query } = useController()
     if(query.isLoading) return <LoadingSkeleton/>
    return (
        
        <Grid container spacing={1}>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Visits"
                    stats={query.data?.visits?.value}
                    statsPer={query.data?.visits?.change}
                    graph={query.data?.visits?.data}

                />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Downloads"
                    stats={query.data?.downloads?.value}
                    statsPer={query.data?.downloads?.change}
                    graph={query.data?.downloads?.data}

                />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Conversions"
                    stats={query.data?.conversions?.value}
                    statsPer={query.data?.conversions?.change}
                    graph={query.data?.conversions?.data}
                />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
                <GraphCard
                    title="Orders"
                    stats={query.data?.orders?.value}
                    statsPer={query.data?.orders?.value}
                    graph={query.data?.orders?.data}

                />
            </Grid>
            {/* </Grid>

{/* -------------------------------------------------------------- */}

            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Current Buy Rate"
                    rate={query.data?.currentBuyRate?.value}
                    percentage={query.data?.currentBuyRate?.change}
                    updatedAt={query.data?.currentBuyRate?.updatedAt.substring(0, 10)}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Current Sell Rate"
                    rate={query.data?.currentSellRate?.value}
                    percentage={query.data?.currentSellRate?.change}
                    updatedAt={query.data?.currentSellRate?.updatedAt.substring(0, 10)}
                />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Average Buy Rate"
                    rate={query?.data?.averageBuyRate}

                />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RateCard
                    title="Average Sell Rate"
                    rate={query.data?.averageSellRate}
                />
            </Grid>
        </Grid >
    )
}