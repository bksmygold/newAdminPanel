import { useFormik } from "formik";
import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getHsn, postHsn, updateHsn } from "src/apis/hsn";
import { hsnValidation } from "src/validation/hsn";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "hsn",
        queryFn: getHsn
    })
    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            code: '',
            description:"",
            gst:0
        },
        validationSchema: hsnValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            code: '',
            description:"",
            gst:0
        },
        validationSchema: hsnValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postHsn,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Hsn Added !', 'Continue with the tax panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateHsn,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Hsn Updated !', 'Continue with the tax panel', 'success');
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