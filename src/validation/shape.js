import * as yup from 'yup';

export const shapeValidation = yup.object({
    name: yup.string('Enter Shape Name').required('Shape name is required'),
})