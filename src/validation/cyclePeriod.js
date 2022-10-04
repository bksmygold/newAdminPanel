import * as yup from 'yup';

export const cyclePeriodValidation = yup.object({
    name: yup
        .string("Enter cycle period name")
        .required("Name is required"),
    shortName: yup
        .string("Enter cycle period short name")
        .required("Short Name is required"),
    gracePeriod: yup
        .number("Enter grace period")
        .required("grace period is required"),
    cycle: yup
        .number("Enter cycle ")
        .required("cycle is required"),
    lockinPeriod: yup
        .number("Enter locking period")
        .required("locking period is required"),
    maxSkip: yup
        .number("Enter Max Skip Count")
        .required("Max Skip Count is required"),
    maxUnpaidSkip: yup
        .number("Enter Max Unpaid Skip Count")
        .required("Max Unpaid Skip Count is required"),
    maxUnpaidInvestment: yup
        .number("Enter Max Unpaid Investment")
        .required("Max Unpaid Investment is required"),
})