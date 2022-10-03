import * as yup from 'yup';

export const labelValidation = yup.object({
    name: yup.string('Enter name').required('Name is required'),
    style: yup.string('Enter style').required('style is required'),
    mode: yup.string('Enter mode').required('mode is required'),
    weight: yup.number('Enter weight').required('weight is required'),
    piece: yup.number('Enter piece').required('piece is required')
})