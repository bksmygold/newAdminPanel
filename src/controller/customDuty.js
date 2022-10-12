import { useFormik } from "formik";
import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { customDutyValidation } from "src/validation/customDuty";
import { getCustomDuty, postCustomDuty, updateCustomDuty } from "src/apis/customDuty";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "Custom Duty",
        queryFn: getCustomDuty
    })
    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            name: "",
            value: 0,
            surcharge: 0,
        },
        validationSchema: customDutyValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            name: "",
            value: 0,
            surcharge: 0,
        },
        validationSchema: customDutyValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postCustomDuty,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Custom Duty Added !', 'Continue with the tax panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateCustomDuty,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Custom Duty Updated !', 'Continue with the tax panel', 'success');
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