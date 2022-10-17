import * as yup from 'yup';

export const merchantBannerValidation = yup.object({
    name: yup.string('Enter plan name').required('Plan Name is required'),
    image: yup.string('Enter image').required('Image is required'),
    amount: yup.string('Enter amount').required('Amount is required'),
    fromDate: yup.string('Enter from date').required('From Date is required'),
    toDate: yup.string('Enter to date').required('To date is required'),
})