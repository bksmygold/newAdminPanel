import * as yup from 'yup';

export const planValidation = yup.object({
    name: yup.string('Enter Unit Name').required('Unit is required'),
    mode: yup.string('Enter mode').required('modeis required'),
    type: yup.string('Enter type').required('type is required'),
    cyclePeriod: yup
        .string('Enter cycle period')
        .required('Cycle Period is required'),
    duration: yup.number('Enter duration').required('duration is required'),
    min: yup.number('Enter minimum').required('minimum is required'),
})