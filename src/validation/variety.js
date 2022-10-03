import * as yup from 'yup';

export const varietyValidation = yup.object({
    name: yup.string('Enter variety Name').required('variety name is required'),
})