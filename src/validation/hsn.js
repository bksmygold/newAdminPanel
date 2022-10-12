import * as yup from 'yup';

export const hsnValidation = yup.object({
    code: yup.string('Enter code').required('code is required'),
    description: yup.string('Enter description').required('description is required'),
    gst: yup.string('Enter Gst').required('Gst is required'),

})