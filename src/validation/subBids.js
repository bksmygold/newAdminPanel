import * as yup from 'yup';

export const subBidsValidation = yup.object({
    name: yup.string('Enter Name').required('name is required'),
    validity: yup.string('Enter validity').required('validity    is required'),
    price: yup.string('Enter Price').required('price is required'),
})