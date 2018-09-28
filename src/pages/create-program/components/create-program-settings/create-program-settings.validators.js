import Yup from "yup";

import { PROGRAM_SETTINGS_PERIOD_VALUES } from "./create-program-settings.constants";

const createProgramSettingsValidationSchema = ({ t }) =>
  Yup.object().shape({
    title: Yup.string()
      .required(t("crete-program-page.settings.validation.title-required"))
      .max(20, t("crete-program-page.settings.validation.title-is-long")),
    description: Yup.string().max(
      500,
      t("crete-program-page.settings.validation.description-is-long")
    ),
    currency: Yup.string().required(
      t("crete-program-page.settings.validation.currency-required")
    ),
    periodLength: Yup.string()
      .oneOf(PROGRAM_SETTINGS_PERIOD_VALUES)
      .required(t("crete-program-page.settings.validation.period-required")),
    leverage: Yup.string().required(
      t("crete-program-page.settings.validation.leverage-required")
    ),
    entryFee: Yup.string().required(
      t("crete-program-page.settings.validation.entry-fee-required")
    ),
    successFee: Yup.string().required(
      t("crete-program-page.settings.validation.success-fee-required")
    ),
    accountType: Yup.string().required(
      t("crete-program-page.settings.validation.account-type-required")
    )
  });

export default createProgramSettingsValidationSchema;
