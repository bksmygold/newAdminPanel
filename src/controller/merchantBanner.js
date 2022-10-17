import { useFormik } from "formik";

import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getMerchantBanner, postMerchantBanner, updateMerchantBanner } from "src/apis/merchantBanner";
import { merchantBannerValidation } from "src/validation/merchantBanner";

//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "merchantBanner",
        queryFn: getMerchantBanner
    })

    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            plan: "",
            image: [],
            amount: 0,
            fromDate:"",
            toDate:""
        },
        validationSchema: merchantBannerValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            plan: "",
            image: [],
            amount: 0,
            fromDate:"",
            toDate:""
        },
        validationSchema: merchantBannerValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postMerchantBanner,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Merchant Banner Added !', 'Continue with the promotional setting panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateMerchantBanner,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Merchant Banner updated!', 'Continue with the promotional banner panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    });
    //--------------------------------------------------------------
    return {
        add,
        edit,
        addForm,
        editForm,
        query,
        setShowAdd,
        showAdd,
        setShowEdit,
        showEdit
    }
}
//--------------------------------------------------------