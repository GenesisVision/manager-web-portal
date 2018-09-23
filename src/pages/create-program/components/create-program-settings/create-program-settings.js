import "./create-program-settings.scss";

import Select from "components/select/select";
import { Field, withFormik } from "formik";
import { GVButton, GVFormikField, GVTextField } from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import InputFile from "shared/components/form/input-file/input-file";
import managerAvatar from "shared/media/manager-avatar.png";

import {
  PROGRAM_SETTINGS_CURRENCY_OPTIONS,
  PROGRAM_SETTINGS_PERIOD_VALUES
} from "./create-program-settings.constants";
import createProgramSettingsValidationSchema from "./create-program-settings.validators";

const CreateProgramSettings = ({
  t,
  navigateToBroker,
  broker,
  isSubmitting,
  handleSubmit,
  error,
  touched,
  errors,
  values
}) => (
  <div className="create-program-settings">
    <form className="create-program-settings__form" onSubmit={handleSubmit}>
      <div className="create-program-settings__subheading">
        <span className="create-program-settings__block-number">01</span>
        {t("create-program-page.settings.main-settings")}
      </div>
      <div className="create-program-settings__fill-block create-program-settings__fill-block--with-border">
        <Field
          type="text"
          name="title"
          label={t("create-program-page.settings.fields.name")}
          component={GVTextField}
        />
        <Field
          name="currency"
          label={t("create-program-page.settings.fields.account-type")}
        >
          {({ field, form }) => (
            <Select className={"account-type-select"} {...field}>
              {Object.keys(PROGRAM_SETTINGS_CURRENCY_OPTIONS).map(currency => {
                return (
                  <option value={currency} key={currency}>
                    {PROGRAM_SETTINGS_CURRENCY_OPTIONS[currency]}
                  </option>
                );
              })}
            </Select>
          )}
        </Field>
        <Field
          type="text"
          name="description"
          label={t("create-program-page.settings.fields.description")}
          component={"textarea"}
        />
        <Field
          name="leverage"
          label={t("create-program-page.settings.fields.account-type")}
        >
          {({ field, form }) => (
            <Select className="leverage-select" {...field}>
              {broker &&
                broker.servers[0].leverages.map(leverage => {
                  return (
                    <option value={leverage} key={leverage}>
                      {leverage}
                    </option>
                  );
                })}
            </Select>
          )}
        </Field>
        <Field
          name="periodLength"
          label={t("create-program-page.settings.fields.account-type")}
        >
          {({ field, form }) => (
            <Select className="period-select" {...field}>
              {PROGRAM_SETTINGS_PERIOD_VALUES.map(period => {
                return (
                  <option value={period} key={period}>
                    {period + (period === 1 ? " day" : " days")}
                  </option>
                );
              })}
            </Select>
          )}
        </Field>
        <div className="create-program-settings__logo-section">
          <div className="create-program-settings__logo-title">
            {t("create-program-page.settings.fields.upload-logo")}
          </div>
          <div className="create-program-settings__logo-notice">
            {t("create-program-page.settings.fields.upload-logo-rules")}
          </div>
          <Field
            name="logo"
            label="Program Logo"
            className="create-program-form__program-image"
            component={InputFile}
            defaultImage={managerAvatar}
          />
        </div>
      </div>
      <div className="create-program-settings__subheading">
        <span className="create-program-settings__block-number">02</span>
        {t("create-program-page.settings.fees-settings")}
      </div>
      <div className="create-program-settings__fill-block create-program-settings__fill-block--with-border">
        <Field name="entryFee">
          {({ field, form }) => (
            <GVTextField
              {...field}
              label={t("create-program-page.settings.fields.entry-fee")}
              suffix=" %"
              InputComponent={NumberFormat}
              autoComplete="off"
              decimalScale={3}
            />
          )}
        </Field>
        <Field name="successFee">
          {({ field, form }) => (
            <GVTextField
              {...field}
              label={t("create-program-page.settings.fields.success-fee")}
              suffix=" %"
              InputComponent={NumberFormat}
              autoComplete="off"
              decimalScale={3}
            />
          )}
        </Field>
      </div>
      <div className="create-program-settings__subheading">
        <span className="create-program-settings__block-number">03</span>
        {t("create-program-page.settings.deposit-details")}
      </div>
      <div className="create-program-settings__fill-block">
        <Field name="depositAmount">
          {({ field, form }) => (
            <GVTextField
              {...field}
              label={t("create-program-page.settings.fields.deposit-amount")}
              InputComponent={NumberFormat}
              autoComplete="off"
              decimalScale={3}
              suffix=" GVT"
            />
          )}
        </Field>
        <div className="create-program-settings__available-amount">
          {t("create-program-page.settings.fields.available-in-wallet")}
        </div>
      </div>
    </form>
    <div className="create-program-settings__navigation">
      <GVButton
        title={t("buttons.create-program")}
        color="secondary"
        type="submit"
      >
        {t("buttons.create-program")}
      </GVButton>
      <GVButton variant="text" onClick={navigateToBroker}>
        &larr; {t("buttons.back")}
      </GVButton>
    </div>
  </div>
);

export default translate()(
  withFormik({
    displayName: "CreateProgramSettingsForm",
    mapPropsToValues: () => ({
      title: "",
      currency: "BTC",
      description: "string",
      periodLength: 0,
      leverage: 0,
      logo: "string",
      entryFee: "",
      successFee: "",
      tradingServerId: "string",
      depositAmount: "",
      stopOutLevel: 0
    }),
    validationSchema: createProgramSettingsValidationSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })(CreateProgramSettings)
);
