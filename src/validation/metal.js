import * as yup from 'yup';

export const metalValidation = yup.object({
    name: yup.string('Enter name').required('Name is required'),
})