import { useFormik } from "formik";

import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getOrnament, postOrnament, updateOrnament } from "src/apis/ornament";
import { ornamentValidation } from "src/validation/ornament";
import { unitValidation } from "src/validation/unit";
import { postUnit, updateUnit ,getUnit} from "src/apis/unit";
import { getCut, getShape, postCut, postShape, updateCut, updateShape } from "src/apis/shape";
import { cutValidation } from "src/validation/shape";
import { getStyle, postStyle, updateStyle } from "src/apis/style";
import { styleValidation } from "src/validation/style";
import { getMetalGroup } from "src/apis/metalGroup";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "style",
        queryFn: getStyle
    })

    const metalQuery = useQuery({
        queryKey: "metalGroup",
        queryFn: getMetalGroup
    })
    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            name: '',
            metalGroup: '',
        },
        validationSchema: styleValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            name: '',
            metalGroup: '',

        },
        validationSchema: styleValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postStyle,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Style Added !', 'Continue with the e-comm panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateStyle,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Style Updated !', 'Continue with the e-comm panel', 'success');
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
        metalQuery,
        setShowAdd,
        showAdd,
        setShowEdit,
        showEdit
    }
}
//--------------------------------------------------------