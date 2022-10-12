import * as yup from 'yup';

export const orgUserValidation = yup.object({
    fullName: yup.string('Enter  Name').required('Name is required'),
    email: yup.string('Enter  email').required('email is required'),
    mobile: yup.string('Enter  mobile').required('mobile is required'),

    dob: yup.string('Enter  dob').required('dob is required'),

    password: yup.string('Enter password').required('password is required'),
    role: yup.string('Choose role').required('role is required'),
})