import * as yup from 'yup';

export const ornamentValidation = yup.object({
    name: yup.string('Enter name').required('Name is required'),
})