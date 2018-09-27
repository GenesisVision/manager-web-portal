import Yup from "yup";

import { PROGRAM_SETTINGS_PERIOD_VALUES } from "./create-program-settings.constants";

const createProgramSettingsValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(20, "Title is very long"),
  description: Yup.string().max(500, "Description is very long"),
  currency: Yup.string().required("Currency is required"),
  periodLength: Yup.number()
    .oneOf(PROGRAM_SETTINGS_PERIOD_VALUES)
    .required("Period is required"),
  leverage: Yup.string().required("Leverage is required"),
  entryFee: Yup.string().required("Entry fee is required"),
  successFee: Yup.string().required("Success fee is required"),
  accountType: Yup.string().required("Account type is required")
});

export default createProgramSettingsValidationSchema;
