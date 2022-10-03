import * as yup from 'yup';

export const cutValidation = yup.object({
    name: yup.string('Enter Cut Name').required('Cut is required'),
})