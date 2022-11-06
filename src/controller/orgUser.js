import { useFormik } from "formik";

import { useQuery, useMutation } from '@tanstack/react-query';
import React from "react";
import swal from 'sweetalert';
import { loanInterestValidation } from "src/validation/loanInterest";
import { getLoanInterest, postLoanInterest, updateLoanInterest } from "src/apis/loanInterest";
import { getOrganisationUser, postUser, updateUser } from "src/apis/user";
import { orgUserValidation } from "src/validation/orgUser";
import { getRole } from "src/apis/role";
//============================================================
export const useController = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    //------------------ QUERY -------------------------------------
    const query = useQuery({
        queryKey: "Organisation User",
        queryFn: getOrganisationUser
    })

    const roleQuery = useQuery({
        queryKey: "Role",
        queryFn: getRole
    })


    //------------------ ADD_FORM -------------------------------------
    const addForm = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobile: '',
            userType: 2,
            accountType: 'individual',
            dob: '',
            password: '',
            eInvoiceApplicable: false,
            isWhatsapp: true,
            mfaEnabled: true,
            isPrivacyAccepted: true,
            role: '',
          },
        validationSchema: orgUserValidation,
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
            userType: 2,
            accountType: 'individual',
            dob: '',
            password: '',
            eInvoiceApplicable: false,
            isWhatsapp: true,
            mfaEnabled: true,
            isPrivacyAccepted: true,
            role: '',
          },
        validationSchema: orgUserValidation,
        onSubmit: (values) => {
            edit.mutate({ data: values, id: values.id });
        }
    })
    //------------------- ADD -------------------------------------
    const add = useMutation({
        mutationFn: postUser,
        onSuccess: (res) => {
            query.refetch();
            setShowAdd(false);
            addForm.resetForm();
            swal('User Added !', 'Continue with the user management panel', 'success');
        },
        onError: (err) => swal('Error !', err.message, 'error'),
    })
    //------------------- EDIT -------------------------------------
    const edit = useMutation({
        mutationFn: updateUser,
        onSuccess: (res) => {
            query.refetch();
            setShowEdit(false);
            swal('User Updated!', 'Continue with the user management panel', 'success');
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
        roleQuery,
        setShowAdd,
        showAdd,
        setShowEdit,
        showEdit
    }
}
//--------------------------------------------------------