import { useFormik } from "formik";
import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getDashboardAnalytics, getDashboardOrders, getDashboardPeople } from "../apis/dashboard";
import { useDashboardFilter } from "src/context/dashboardFilter";
//============================================================
export const useController = (type) => {

    const filter = useDashboardFilter()

    //------------------ QUERY -------------------------------------
    const analyticsQuery = useQuery({
        queryKey: ["dashboardanalytics", filter.fromDate,filter.toDate],
        queryFn:()=> getDashboardAnalytics(filter.fromDate,filter.toDate),
        enabled: !!(filter.fromDate && filter.toDate),
    })

    const orderQuery = useQuery({
        queryKey:['dashboardOrderDetail',filter.fromDate,filter.toDate],
        queryFn:()=>getDashboardOrders(filter.fromDate,filter.toDate),
        enabled:!!(filter.fromDate && filter.toDate)
    })

    const people_customer_query = useQuery({
        queryKey:['dashboardPeopleCustomerDetail',filter.fromDate,filter.toDate],
        queryFn:()=>getDashboardPeople(filter.fromDate,filter.toDate,"customer"),
        enabled:!!(filter.fromDate && filter.toDate)
    })

    
    const people_merchant_query = useQuery({
        queryKey:['dashboardPeopleMerchantDetail',filter.fromDate,filter.toDate],
        queryFn:()=>getDashboardPeople(filter.fromDate,filter.toDate,"merchant"),
        enabled:!!(filter.fromDate && filter.toDate)
    })

    
    const people_business_Query = useQuery({
        queryKey:['dashboardPeopleBusinessDetail',filter.fromDate,filter.toDate],
        queryFn:()=>getDashboardPeople(filter.fromDate,filter.toDate,"business"),
        enabled:!!(filter.fromDate && filter.toDate)
    })

    
    const people_referral_Query = useQuery({
        queryKey:['dashboardPeopleReferralDetail',filter.fromDate,filter.toDate],
        queryFn:()=>getDashboardPeople(filter.fromDate,filter.toDate,"referral"),
        enabled:!!(filter.fromDate && filter.toDate)
    })
    return {
        analyticsQuery,
        orderQuery,
        people_customer_query,
        people_merchant_query,
        people_business_Query,
        people_referral_Query
    }
}
//--------------------------------------------------------