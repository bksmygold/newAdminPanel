import * as yup from 'yup';

export const unitValidation = yup.object({
    name: yup.string('Enter Unit Name').required('Unit is required'),
    conversionFactor: yup
        .number('Enter Conversion Factor')
        .required('Conversion Factor is required'),
})