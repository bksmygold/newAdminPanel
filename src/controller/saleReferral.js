import { useFormik } from "formik";

import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { getOrnament, postOrnament, updateOrnament } from "src/apis/ornament";
import { ornamentValidation } from "src/validation/ornament";
import { unitValidation } from "src/validation/unit";
import { postUnit, updateUnit, getUnit } from "src/apis/unit";
import { getCut, postCut, updateCut } from "src/apis/cut";
import { cutValidation } from "src/validation/cut";
import { getColor, postColor, updateColor } from "src/apis/color";
import { colorValidation } from "src/validation/color";
import { getVariety, postVariety, updateVariety } from "src/apis/variety";
import { varietyValidation } from "src/validation/variety";
import { getVipReferral, postVipReferral, updateVipReferral } from "src/apis/referralUser";
import { vipReferralValidation } from "src/validation/vipReferral";
import { getReferralType } from "src/apis/referraltype";
import { saleReferralValidation } from "src/validation/saleReferral";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "saleReferralUser",
        queryFn: getVipReferral
    })



    //------------------ ADD_FORM -------------------------------------
    const referralTypeQuery = useQuery({
        queryKey: "Vip Referral Type",
        queryFn: () => getReferralType({ filter: { userType: "vip" } })
    })


    const addForm = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobile: '',
            accountType: 'individual',
            isWhatsapp: false,
            userType: 1,
            password: "0000000000",
            referral: {
                type: "",
                code: "",
            },

        },
        validationSchema: saleReferralValidation,
        onSubmit: (values) => {
            add.mutate(values);
        }
    })
    //------------------- EDIT_FORM -------------------------------------
    const editForm = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobile: '',
            accountType: 'individual',
            isWhatsapp: false,
            userType: 1,
            password: "0000000000",
            referral: {
                type: "",
                code: "",
            },
        },
        validationSchema: saleReferralValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postVipReferral,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('Sale referral user Added !', 'Continue with the user management panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateVipReferral,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('Sale referral user Updated !', 'Continue with the user management panel', 'success');
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