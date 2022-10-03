import { useFormik } from "formik";
import { metalValidation } from "src/validation/metal";
import { metalModel } from "src/model/metal";
import { useQuery, useMutation } from '@tanstack/react-query';
import { postMetal, getMetal, updateMetal } from "src/apis/metal";
import React from "react";
import swal from 'sweetalert';
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "metal",
        queryFn: getMetal
    })
    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            name: '',
            icon: '',
        },
        validationSchema: metalValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            name: '',
            icon: '',
        },
        validationSchema: metalValidation,
        onSubmit: (values) => {
            console.log("edit ho raha hai---", values)
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postMetal,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Metal Added !', 'Continue with the e-comm panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateMetal,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Metal Updated !', 'Continue with the e-comm panel', 'success');
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