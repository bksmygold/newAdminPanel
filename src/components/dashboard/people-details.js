import Head from "next/head";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { GraphCard } from "./cards/graphCard";
import { useController } from "src/controller/dashboard";
import { PeopleCard } from "./cards/myGoldPeopleCard";
import Loading, { PeopleSkeleton } from "../loading";

//================================================
export default function PeopleDetails() {
    const {
        people_customer_query,
        people_merchant_query,
        people_business_Query,
        people_referral_Query
    } = useController()

    // if (people_customer_query.isLoading) return <PeopleSkeleton />
    // console.log("Graph data ---", people_referral_Query.data.data)
    //================================================
    return (
        <>
            <Grid container spacing={3}>
                {/* if(people_customer_query.isLoading){
                        return <PeopleSkeleton />
                    } */}
                <Grid item lg={3} sm={6} xs={12}>
                    {people_customer_query.isLoading ?
                        <PeopleSkeleton /> :
                        <PeopleCard
                            title="Total Customers"
                            stats={people_customer_query?.data?.currentValue}
                            percentage={people_customer_query?.data?.change}
                            graph={people_customer_query?.data?.data}
                        />}

                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    {people_customer_query.isLoading ?
                        <PeopleSkeleton /> :
                        <PeopleCard
                            title="Total Merchants"
                            stats={people_merchant_query?.data?.currentValue}
                            percentage={people_merchant_query?.data?.change}
                            graph={people_merchant_query?.data?.data}
                        />}
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    {people_customer_query.isLoading ?
                        <PeopleSkeleton /> :
                        <PeopleCard
                            title="Total Retails"
                            stats={people_business_Query?.data?.currentValue}
                            percentage={people_business_Query?.data?.change}
                            graph={people_business_Query?.data?.data}
                        />}
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    {people_customer_query.isLoading ?
                        <PeopleSkeleton /> :
                        <PeopleCard
                            title="Total VIP Referrals"
                            stats={people_referral_Query?.data?.currentValue}
                            percentage={people_referral_Query?.data?.change}
                            graph={people_referral_Query?.data?.data}
                        />}
                </Grid>
            </Grid>

        </>
    )
}