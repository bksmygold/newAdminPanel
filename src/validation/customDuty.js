import * as yup from 'yup';

export const customDutyValidation = yup.object({
    name: yup.string('Enter  Name').required(' name is required'),
    value: yup.string('Enter  Value').required('value is required'),
    surcharge: yup.string('Enter surcharge').required('surcharge is required'),

})