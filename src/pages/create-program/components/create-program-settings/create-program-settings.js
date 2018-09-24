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
  navigateToBroker,
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
        {/* <Field
          type="text"
          name="title"
          label={t("create-program-page.settings.fields.name")}
          component={({ field, form }) => (
            <GVTextField
              {...field}
              label={t("create-program-page.settings.fields.deposit-amount")}
              autoComplete="off"
            />
          )}
        /> */}
        <GVFormikField
          type="text"
          name="title"
          label={t("create-program-page.settings.fields.name")}
          autoComplete="off"
          component={GVTextField}
        />
        <Field
          name="currency"
          label={t("create-program-page.settings.fields.account-type")}
        >
          {({ field, form }) => (
            <Select className={"account-type-select"} {...field}>
              {PROGRAM_SETTINGS_CURRENCY_OPTIONS.map(currency => {
                return (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                );
              })}
            </Select>
          )}
        </Field>
        <GVFormikField
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
              Cypress Semiconductor
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
        {/* <Field name="entryFee">
          {({ field, form }) => (
            <GVTextField
              {...field}
              label={t("create-program-page.settings.fields.entry-fee")}
              suffix=" %"
              isAllowed={percentNumberFormat}
              InputComponent={NumberFormat}
              autoComplete="off"
              decimalScale={4}
            />
          )}
        </Field> */}
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
        <Field name="successFee">
          {({ field, form }) => (
            <GVTextField
              {...field}
              label={t("create-program-page.settings.fields.success-fee")}
              suffix=" %"
              isAllowed={percentNumberFormat}
              InputComponent={NumberFormat}
              autoComplete="off"
              decimalScale={4}
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
              thousandSeparator=" "
            />
          )}
        </Field>
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
      title: "My first company",
      currency: "BTC",
      description: "string",
      periodLength: 5,
      leverage: 4,
      logo: {
        src: managerAvatar,
        filename: "image.png",
        filetype: "image/png",
        cropped: null
      },
      entryFee: "25 %",
      successFee: "35 %",
      tradingServerId: "string",
      depositAmount: "",
      stopOutLevel: 0
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
