import * as yup from 'yup';

export const loanInterestValidation = yup.object({
    minMonth: yup.number("Enter minimum month").required("minimum month is required"),
    maxMonth: yup.number("Enter maximum month").required("maximum monthis required"),
    interest: yup.number("Enter Interest").required("Interest is required"),
  })