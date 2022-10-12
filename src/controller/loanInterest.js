import { useFormik } from "formik";

import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getOrnament, postOrnament, updateOrnament } from "src/apis/ornament";
import { ornamentValidation } from "src/validation/ornament";
import { getLabel, postLabel, updateLabel } from "src/apis/label";
import { labelValidation } from "src/validation/label";
import { getStyle } from "src/apis/style";
import { loanInterestValidation } from "src/validation/loanInterest";
import { getLoanInterest, postLoanInterest, updateLoanInterest } from "src/apis/loanInterest";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "loanInterest",
        queryFn: getLoanInterest
    })

    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            minMonth: 0,
            maxMonth: 0,
            interest: 0,
        },
        validationSchema: loanInterestValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            minMonth: 0,
            maxMonth: 0,
            interest: 0,
        },
        validationSchema: loanInterestValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postLoanInterest,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Loan Intetrest Added !', 'Continue with the tax panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateLoanInterest,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Loan Intetrest!', 'Continue with the tax panel', 'success');
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