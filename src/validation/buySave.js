import * as yup from 'yup';

export const buySaveValidation = yup.object({
    value: yup.string('Enter value').required('value is required'),
})