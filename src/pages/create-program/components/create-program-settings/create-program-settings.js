import "./create-program-settings.scss";

import { RefreshIcon } from "components/icon/refresh-icon";
import Select from "components/select/select";
import { Field, withFormik } from "formik";
import { GVButton, GVFormikField, GVTextField } from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import InputFile from "shared/components/form/input-file/input-file";
import managerAvatar from "shared/media/manager-avatar.png";
import { allowValuesNumberFormat } from "utils/helpers";

import {
  PROGRAM_SETTINGS_CURRENCY_OPTIONS,
  PROGRAM_SETTINGS_PERIOD_VALUES
} from "./create-program-settings.constants";
import createProgramSettingsValidationSchema from "./create-program-settings.validators";

const percentNumberFormat = allowValuesNumberFormat({ from: 0, to: 100 });

const CreateProgramSettings = ({
  t,
  navigateBack,
  broker,
  balance,
  author,
  updateBalance,
  isSubmitting,
  handleSubmit,
  error,
  touched,
  errors,
  values
}) => (
  <div className="create-program-settings">
    <form className="create-program-settings__form">
      <div className="create-program-settings__subheading">
        <span className="create-program-settings__block-number">01</span>
        {t("create-program-page.settings.main-settings")}
      </div>
      <div className="create-program-settings__fill-block create-program-settings__fill-block--with-border">
        <GVFormikField
          type="text"
          name="title"
          label={t("create-program-page.settings.fields.name")}
          autoComplete="off"
          component={GVTextField}
        />
        <GVFormikField
          name="currency"
          component={GVTextField}
          label={t("create-program-page.settings.fields.currency")}
          InputComponent={Select}
        >
          {PROGRAM_SETTINGS_CURRENCY_OPTIONS.map(currency => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </GVFormikField>
        <GVFormikField
          name="accountType"
          component={GVTextField}
          label={t("create-program-page.settings.fields.account-type")}
          InputComponent={Select}
        >
          {PROGRAM_SETTINGS_CURRENCY_OPTIONS.map(currency => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </GVFormikField>
        <GVFormikField
          type="textarea"
          name="description"
          label={t("create-program-page.settings.fields.description")}
          component={GVTextField}
        />
        <GVFormikField
          name="leverage"
          component={GVTextField}
          label={t("create-program-page.settings.fields.brokers-leverage")}
          InputComponent={Select}
        >
          {broker &&
            broker.servers[0].leverages.map(leverage => {
              return (
                <option value={leverage} key={leverage}>
                  {leverage}
                </option>
              );
            })}
        </GVFormikField>
        <GVFormikField
          name="periodLength"
          component={GVTextField}
          label={t("create-program-page.settings.fields.period")}
          InputComponent={Select}
        >
          {PROGRAM_SETTINGS_PERIOD_VALUES.map(period => {
            return (
              <option value={period} key={period}>
                {period + (period === 1 ? " day" : " days")}
              </option>
            );
          })}
        </GVFormikField>
        <div className="create-program-settings__logo-title">
          {t("create-program-page.settings.fields.upload-logo")}
        </div>
        <div className="create-program-settings__logo-notice">
          {t("create-program-page.settings.fields.upload-logo-rules")}
        </div>
        <div className="create-program-settings__logo-section">
          <Field
            name="logo"
            className="create-program-settings__image"
            component={InputFile}
            defaultImage={managerAvatar}
          />
          <div className="create-program-settings__image-info">
            <div className="create-program-settings__image-title">
              {values.title}
            </div>
            <div className="create-program-settings__image-author">
              {author}
            </div>
          </div>
        </div>
      </div>
      <div className="create-program-settings__subheading">
        <span className="create-program-settings__block-number">02</span>
        {t("create-program-page.settings.fees-settings")}
      </div>
      <div className="create-program-settings__fill-block create-program-settings__fill-block--with-border">
        <GVFormikField
          name="entryFee"
          label={t("create-program-page.settings.fields.entry-fee")}
          suffix=" %"
          isAllowed={percentNumberFormat}
          component={GVTextField}
          InputComponent={NumberFormat}
          autoComplete="off"
          decimalScale={4}
        />
        <GVFormikField
          name="successFee"
          label={t("create-program-page.settings.fields.success-fee")}
          suffix=" %"
          isAllowed={percentNumberFormat}
          component={GVTextField}
          InputComponent={NumberFormat}
          autoComplete="off"
          decimalScale={4}
        />
      </div>
      <div className="create-program-settings__subheading">
        <span className="create-program-settings__block-number">03</span>
        {t("create-program-page.settings.deposit-details")}
      </div>
      <div className="create-program-settings__fill-block">
        <div className="create-program-settings__deposit-amount-title">
          {t("create-program-page.settings.fields.deposit-amount")}
        </div>
        <div className="create-program-settings__deposit-amount-value">
          {100 + " mockGVT"}
        </div>
        <div className="create-program-settings__available-amount">
          {t("create-program-page.settings.fields.available-in-wallet")}
          <span className="create-program-settings__available-amount-value">
            <NumberFormat
              value={balance}
              thousandSeparator=" "
              displayType="text"
              suffix=" GVT"
            />
          </span>
          <span onClick={updateBalance}>
            <RefreshIcon />
          </span>
        </div>
      </div>
    </form>
    <div className="create-program-settings__navigation">
      <GVButton
        title={t("buttons.create-program")}
        color="secondary"
        type="submit"
        onClick={handleSubmit}
      >
        {t("buttons.create-program")}
      </GVButton>
      <GVButton variant="text" onClick={navigateBack}>
        &larr; {t("buttons.back")}
      </GVButton>
    </div>
  </div>
);

export default translate()(
  withFormik({
    displayName: "CreateProgramSettingsForm",
    mapPropsToValues: () => ({
      title: "My first company2",
      currency: "BTC",
      description: "string",
      accountType: "BTC",
      periodLength: "5 days",
      leverage: "10",
      logo: {
        src: managerAvatar,
        filename: "image.png",
        filetype: "image/png",
        cropped: null
      },
      entryFee: "",
      successFee: "",
      tradingServerId: "1952cc62-38cd-47ab-85e4-8020cc498618",
      stopOutLevel: 30
    }),
    // mapPropsToValues: () => ({
    //   title: "",
    //   currency: "",
    //   description: "",
    //   periodLength: 0,
    //   leverage: 0,
    //   logo: "",
    //   entryFee: "",
    //   successFee: "",
    //   tradingServerId: "",
    //   depositAmount: "",
    //   stopOutLevel: 0
    // }),
    validationSchema: createProgramSettingsValidationSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })(CreateProgramSettings)
);
