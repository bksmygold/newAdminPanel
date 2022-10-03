import * as yup from 'yup';

export const rejectReasonValidation = yup.object({
    title: yup.string('Enter Reject Reason Title').required('Reject Reason Title is required'),
})