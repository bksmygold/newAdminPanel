import * as yup from 'yup';

export const itemValidation = yup.object().shape({
    name: yup.string('Enter Item Name').required('Item is required'),
})