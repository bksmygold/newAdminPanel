import * as yup from 'yup';

export const departmentValidation = yup.object({
    name: yup.string('Enter Name').required('Name is required'),
})