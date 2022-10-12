import * as yup from 'yup';

export const subAdsValidation = yup.object({
    position: yup.string('Enter position').required('position is required'),
    validity: yup.string('Enter validity').required('validity    is required'),
    price: yup.string('Enter Price').required('price is required'),
})