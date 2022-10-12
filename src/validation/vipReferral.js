import * as yup from 'yup';

export const vipReferralValidation = yup.object({
    fullName: yup.string('Enter  Name').required('Name is required'),
    email: yup.string('Enter  email').required('email is required'),
    mobile: yup.string('Enter  mobile').required('mobile is required'),
    referral: yup.object({
        type: yup.string('Enter  type').required('type is required'),
        code: yup.string('Enter  code').required('code is required'),
        downloads: yup.number('Enter  downloads').required('downloads is required'),
        subscriptions: yup.number('Enter  subscriptions').required('subscriptions is required'),
    })
})