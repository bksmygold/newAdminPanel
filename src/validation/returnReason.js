import * as yup from 'yup';

export const returnReasonValidation = yup.object({
    title: yup.string('Enter Return Reason Title').required('Return Reason Title is required'),
})