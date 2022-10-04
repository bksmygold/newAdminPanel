import * as yup from 'yup';

export const metalGroupValidation = yup.object({
    shortName: yup
        .string("Enter Metal Group Name")
        .required("Metal Group is required"),
    metal: yup
        .string("Choose Metal ")
        .required("Metal is required"),
    purity: yup
        .number("Enter Purity")
        .required("Purity is required"),
    roundingDigits: yup
        .number("Enter Rounding digits")
        .required("Rounding digits is required"),
    unit: yup
        .string("Enter  Unit")
        .required("Unit is required"),
    ornament: yup
        .string("Enter Ornament")
        .required("Ornament is required"),
})