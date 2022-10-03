import * as yup from 'yup';

export const productTypeValidation = yup.object({
    name: yup.string('Enter product type').required('product type is required'),
})