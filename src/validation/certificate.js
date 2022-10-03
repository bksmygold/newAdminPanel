import * as yup from 'yup';

export const certificateValidation = yup.object({
    name: yup.string('Enter certificate Name').required('certificate name is required'),
})