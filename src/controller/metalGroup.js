import { useFormik } from "formik";
import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getMetalGroup, postMetalGroup, updateMetalGroup } from "src/apis/metalGroup";
import { metalGroupValidation } from "src/validation/metalGroup";
//============================================================
export const useController = () => {
    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "metalGroup",
        queryFn: getMetalGroup
    })



    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            shortName: "",
            metal: "",
            purity: 0,
            roundingDigits: 0,
            unit: "",
            ornament: "",
            gst: 3

        },
        validationSchema: metalGroupValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            shortName: "",
            metal: "",
            purity: 0,
            roundingDigits: 0,
            unit: "",
            ornament: "",
            gst: 3
        },
        validationSchema: metalGroupValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })

    const getByIdQuery = (id) => {
        return (
            useQuery({
                queryKey: 'plan',
                queryFn: () => getPlanById(id),
                onSuccess: (res) => editForm.setValues(res),
            })
        )

    }

    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postMetalGroup,
        onSuccess: (res) => {
            query.refetch();
            // setShowAdd(false);
            addForm.resetForm();
            swal('Metal Group Added !', 'Continue with the e-comm panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateMetalGroup,
        onSuccess: (res) => {
            query.refetch();
            // setShowEdit(false);
            swal('Metal Group Updated !', 'Continue with the e-comm panel', 'success');
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
        showEdit,
        getByIdQuery
    }
}
//--------------------------------------------------------