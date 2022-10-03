import * as yup from 'yup';

export const collectionValidation = yup.object({
    name: yup.string('Enter Collection Name').required('Collection name is required'),
})