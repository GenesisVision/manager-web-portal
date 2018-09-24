import Yup from "yup";

import {
  PROGRAM_SETTINGS_CURRENCY_OPTIONS,
  PROGRAM_SETTINGS_PERIOD_VALUES
} from "./create-program-settings.constants";

const createProgramSettingsValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  currency: Yup.string()
    .oneOf(PROGRAM_SETTINGS_CURRENCY_OPTIONS)
    .required("Currency is required"),
  periodLength: Yup.number()
    .oneOf(PROGRAM_SETTINGS_PERIOD_VALUES)
    .required("Period is required"),
  leverage: Yup.number().required("Leverage is required"),
  entryFee: Yup.string().required("Entry fee is required"),
  successFee: Yup.string().required("Success fee is required"),
  depositAmount: Yup.number()
    .typeError("Deposit Amount must be a number")
    .positive("Deposit Amount must be a positive number")
    .required("Deposit Amount is required")
});

export default createProgramSettingsValidationSchema;
