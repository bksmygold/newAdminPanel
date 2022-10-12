import { useFormik } from "formik";

import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getOrnament, postOrnament, updateOrnament } from "src/apis/ornament";
import { ornamentValidation } from "src/validation/ornament";
import { unitValidation } from "src/validation/unit";
import { postUnit, updateUnit, getUnit } from "src/apis/unit";
import { getCut, getShape, postCut, postShape, updateCut, updateShape } from "src/apis/shape";
import { cutValidation } from "src/validation/shape";
import { getSubBids, postSubBids } from "src/apis/subBids";
import { subBidsValidation } from "src/validation/subBids";
import { getSubAds, postSubAds, updateSubAds } from "src/apis/subAds";
import { subAdsValidation } from "src/validation/subAds";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "subAds",
        queryFn: getSubAds
    })
    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            position: "",
            validity: "",
            price: ""
        },
        validationSchema: subAdsValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            position: "",
            validity: "",
            price: ""
        },
        validationSchema: subAdsValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postSubAds,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Subscriptions Ads Added !', 'Continue with the tax panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateSubAds,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Subscriptions Ads Updated !', 'Continue with the tax panel', 'success');
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