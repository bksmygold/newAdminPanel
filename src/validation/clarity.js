import * as yup from 'yup';

export const clarityValidation = yup.object({
    name: yup.string('Enter Color Name').required('Color name is required'),
})