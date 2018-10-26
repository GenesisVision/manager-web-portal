import Yup from "yup";

const createProgramSettingsValidationSchema = ({ t }) =>
  Yup.object().shape({
    title: Yup.string()
      .required(t("create-program-page.settings.validation.title-required"))
      .min(4, t("create-program-page.settings.validation.title-is-short"))
      .max(20, t("create-program-page.settings.validation.title-is-long"))
      .matches(
        /^[-a-zA-Z0-9\s]{1,99}$/,
        t("create-program-page.settings.validation.title-is-latin-and-numbers")
      ),
    description: Yup.string()
      .required(
        t("create-program-page.settings.validation.description-required")
      )
      .min(
        20,
        t("create-program-page.settings.validation.description-is-short")
      )
      .max(
        500,
        t("create-program-page.settings.validation.description-is-long")
      ),
    currency: Yup.string().required(
      t("create-program-page.settings.validation.currency-required")
    ),
    periodLength: Yup.string()
      // .oneOf(PROGRAM_SETTINGS_PERIOD_VALUES)
      .required(t("create-program-page.settings.validation.period-required")),
    leverage: Yup.string().required(
      t("create-program-page.settings.validation.leverage-required")
    ),
    entryFee: Yup.string().required(
      t("create-program-page.settings.validation.entry-fee-required")
    ),
    successFee: Yup.string().required(
      t("create-program-page.settings.validation.success-fee-required")
    ),
    accountType: Yup.string().required(
      t("create-program-page.settings.validation.account-type-required")
    )
  });

export default createProgramSettingsValidationSchema;
