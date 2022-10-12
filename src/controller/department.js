import { useFormik } from "formik";

import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getOrnament, postOrnament, updateOrnament } from "src/apis/ornament";
import { ornamentValidation } from "src/validation/ornament";
import { unitValidation } from "src/validation/unit";
import { postUnit, updateUnit ,getUnit} from "src/apis/unit";
import { getCut, postCut, updateCut } from "src/apis/cut";
import { cutValidation } from "src/validation/cut";
import { getDepartment, postDepartment, updateDepartment } from "src/apis/department";
import { departmentValidation } from "src/validation/department";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "department",
        queryFn: getDepartment
    })
    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            name: '',
           
        },
        validationSchema: departmentValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: departmentValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postDepartment,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Department Added !', 'Continue with the user management panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateDepartment,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Department Updated !', 'Continue with the user management panel', 'success');
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