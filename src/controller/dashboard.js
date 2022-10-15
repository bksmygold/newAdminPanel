import { useFormik } from "formik";
import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getDashboardAnalytics } from "../apis/dashboard";
import { useDashboardFilter } from "src/context/dashboardFilter";
//============================================================
export const useController = () => {

    const filter = useDashboardFilter()
    console.log("==========> From", filter.fromDate)
    console.log("==========> TO", filter.toDate)
    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: ["dashboardanalytics", filter.fromDate,filter.toDate],
        queryFn: () => getDashboardAnalytics(filter.fromDate, filter.toDate),
        enabled: !!(filter.fromDate && filter.toDate),

    })
    return {
        query
    }
}
//--------------------------------------------------------