import * as yup from 'yup';

export const styleValidation = yup.object({
    name: yup.string('Enter Style Name').required('Style name is required'),
})