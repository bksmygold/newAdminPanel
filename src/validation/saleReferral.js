import * as yup from 'yup';

export const saleReferralValidation = yup.object({
    fullName: yup.string('Enter  Name').required('Name is required'),
    email: yup.string('Enter  email').required('email is required'),
    mobile: yup.string('Enter  mobile').required('mobile is required'),
    referral: yup.object({
      type: yup.string('Enter  type').required('type is required'),
      code: yup.string('Enter  code').required('code is required'),
    })
  })