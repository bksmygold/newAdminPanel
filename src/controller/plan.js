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
import { getClarity, postClarity, updateClarity } from "src/apis/clarity";
import { clarityValidation } from "src/validation/clarity";
import { getCollection, postCollection, updateCollection } from "src/apis/collection";
import { collectionValidation } from "src/validation/collection";
import { getPlan, getPlanById, postPlan, updatePlan } from "src/apis/plan";
import { planValidation } from "src/validation/plan";
//============================================================
export const useController = (props) => {

    // let id = props.id
    // console.log("id -->", id)
    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "plan",
        queryFn: getPlan
    })

  

    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            name: '',
            mode: '',
            type: '',
            duration: 0,
            cyclePeriod: '',
            min: 0,

        },
        validationSchema: planValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            name: '',
            mode: '',
            type: '',
            duration: 0,
            cyclePeriod: '',
            min: 0,
        },
        validationSchema: planValidation,
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
        mutationFn: postPlan,
        onSuccess: (res) => {
            query.refetch();
            // setShowAdd(false);
            addForm.resetForm();
            swal('Plan Added !', 'Continue with the e-comm panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updatePlan,
        onSuccess: (res) => {
            query.refetch();
            // setShowEdit(false);
            swal('Plan Updated !', 'Continue with the e-comm panel', 'success');
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