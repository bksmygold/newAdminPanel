import * as yup from 'yup';

export const categoryValidation = yup.object({
    name: yup.string('Enter category Name').required('category name is required'),
})