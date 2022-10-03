import * as yup from 'yup';

export const itemValidation = yup.object({
    name: yup.string('Enter Item Name').required('Item is required'),
})