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

import { PROGRAM_SETTINGS_PERIOD_VALUES } from "./create-program-settings.constants";
import createProgramSettingsValidationSchema from "./create-program-settings.validators";

const percentNumberFormat = allowValuesNumberFormat({ from: 0, to: 100 });

const getAccountTypes = broker =>
  broker.accountTypes.map(accountType => accountType.type);

const getAccountType = (broker, type) =>
  broker.accountTypes.find(accountType => accountType.type === type);

const getLeverages = (broker, type) => {
  let result;
  let accountType = getAccountType(broker, type);

  if (accountType) {
    result = accountType.leverages;
  } else {
    result = [];
  }
  return result;
};

const getCurrencies = (broker, type) => {
  let result;
  let accountType = getAccountType(broker, type);

  if (accountType) {
    result = accountType.currencies;
  } else {
    result = [];
  }
  return result;
};

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
        <div className="create-program-settings__row create-program-settings__row--couple-field">
          <GVFormikField
            type="text"
            name="title"
            label={t("create-program-page.settings.fields.name")}
            autoComplete="off"
            component={GVTextField}
          />

          <GVFormikField
            name="accountType"
            component={GVTextField}
            label={t("create-program-page.settings.fields.account-type")}
            InputComponent={Select}
          >
            {getAccountTypes(broker).map(accountType => {
              return (
                <option value={accountType} key={accountType}>
                  {accountType}
                </option>
              );
            })}
          </GVFormikField>
        </div>
        <div className="create-program-settings__row">
          <GVFormikField
            name="currency"
            component={GVTextField}
            label={t("create-program-page.settings.fields.currency")}
            InputComponent={Select}
            disabled={!values["accountType"]}
          >
            {getCurrencies(broker, values["accountType"]).map(currency => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
          </GVFormikField>
        </div>
        <div className="create-program-settings__row">
          <GVFormikField
            type="textarea"
            name="description"
            label={t("create-program-page.settings.fields.description")}
            component={GVTextField}
          />
        </div>
        <div className="create-program-settings__row create-program-settings__row--couple-field">
          <GVFormikField
            name="leverage"
            component={GVTextField}
            label={t("create-program-page.settings.fields.brokers-leverage")}
            InputComponent={Select}
            disabled={!values["accountType"]}
          >
            {getLeverages(broker, values["accountType"]).map(leverage => {
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
        </div>
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
      periodLength: "7 days",
      successFee: "25%",
      stopOutLevel: 30,
      leverage: "1",
      title: "My best company",
      description: "The best description",
      logo: {
        src: managerAvatar,
        filename: "image.png",
        filetype: "image/png",
        cropped: null
      },
      brokerAccountTypeId: "",
      entryFee: "25 %",
      currency: "BTC",
      accountType: "MetaTrader5"
    }),
    // mapPropsToValues: () => ({
    //   title: "My first company2",
    //   currency: "BTC",
    //   description: "string",
    //   accountType: "BTC",
    //   periodLength: "5 days",
    //   leverage: "10",
    //   logo: {
    //     src: managerAvatar,
    //     filename: "image.png",
    //     filetype: "image/png",
    //     cropped: null
    //   },
    //   entryFee: "",
    //   successFee: "",
    //   tradingServerId: "ea03ae46-89eb-481b-a02b-94b9fec548f1",
    //   stopOutLevel: 30
    // }),
    validationSchema: createProgramSettingsValidationSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })(CreateProgramSettings)
);
