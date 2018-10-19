import * as Yup from "yup";

const createFundSettingsValidationSchema = ({ t }) =>
  Yup.object().shape({
    title: Yup.string()
      .required(t("create-fund-page.settings.validation.title-required"))
      .max(20, t("create-fund-page.settings.validation.title-is-long")),
    description: Yup.string()
      .required(t("create-fund-page.settings.validation.description-required"))
      .min(20, t("create-fund-page.settings.validation.description-is-short"))
      .max(500, t("create-fund-page.settings.validation.description-is-long")),
    entryFee: Yup.string().required(
      t("create-fund-page.settings.validation.entry-fee-required")
    ),
    successFee: Yup.string().required(
      t("create-fund-page.settings.validation.success-fee-required")
    ),
    remainder: Yup.number()
      .required(t("create-fund-page.settings.validation.assets-share"))
      .max(0, t("create-fund-page.settings.validation.assets-share")),
    assets: Yup.array()
      .required(t("create-fund-page.settings.validation.assets-count"))
      .min(2, t("create-fund-page.settings.validation.assets-count")),
    balance: Yup.number()
      .required()
      .min(100)
  });

export default createFundSettingsValidationSchema;
