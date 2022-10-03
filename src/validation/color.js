import * as yup from 'yup';

export const colorValidation = yup.object({
    name: yup.string('Enter Color Name').required('Color name is required'),
})