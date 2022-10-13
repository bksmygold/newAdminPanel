import { useFormik } from "formik";
import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getDashboardAnalytics } from "../apis/dashboard";
import { useDashboardFilter } from "src/context/dashboardFilter";
//============================================================
export const useController = () => {

const filter = useDashboardFilter()
console.log("==================================>", filter)

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "dashboardanalytics",
        queryFn: getDashboardAnalytics,
        enabled: !!(filter.fromDate && filter.toDate)
    })
    return {
        query
    }
}
//--------------------------------------------------------