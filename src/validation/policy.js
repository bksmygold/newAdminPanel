import * as yup from 'yup';

export const policyValidation = yup.object({
    title: yup
        .string('Enter Title')
        .required('Title is required'),
    description: yup
        .string('Enter description')
        .required('description is required'),
})