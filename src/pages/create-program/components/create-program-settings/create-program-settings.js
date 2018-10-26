import "./create-program-settings.scss";

import Hint from "components/hint/hint";
import { RefreshIcon } from "components/icon/refresh-icon";
import Select from "components/select/select";
import { Field, withFormik } from "formik";
import {
  GVButton,
  GVFormikField,
  GVProgramPeriod,
  GVTextField
} from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import InputImage from "shared/components/form/input-image/input-image";
import { formatValue } from "utils/formatter";

import {
  getAccountTypes,
  getCurrencies,
  getLeverages,
  percentNumberFormat
} from "../../helpers/create-program.helpers";
import AccountTypeField from "../account-type-field/account-type-field";
import { PROGRAM_SETTINGS_PERIOD_VALUES } from "./create-program-settings.constants";
import createProgramSettingsValidationSchema from "./create-program-settings.validators";
import ProgramDefaultImage from "./program-default-image";

class CreateProgramSettings extends React.Component {
  render() {
    const {
      t,
      navigateBack,
      broker,
      balance,
      author,
      updateBalance,
      isSubmitting,
      handleSubmit,
      values,
      setFieldValue,
      setLeverageChooseAvailable,
      isLeverageChooseAvailable,
      programsInfo
    } = this.props;

    return (
      <div className="create-program-settings">
        <form className="create-program-settings__form">
          <div className="create-program-settings__subheading">
            <span className="create-program-settings__block-number">01</span>
            {t("create-program-page.settings.main-settings")}
          </div>
          <div className="create-program-settings__fill-block create-program-settings__fill-block--with-border">
            <div className="create-program-settings__row">
              <div className="create-program-settings__name">
                <GVFormikField
                  type="text"
                  name="title"
                  label={t("create-program-page.settings.fields.name")}
                  autoComplete="off"
                  component={GVTextField}
                />
                <div className="create-program-settings__name-requirements">
                  {t("create-program-page.settings.fields.name-requirements")}
                </div>
              </div>
              <AccountTypeField
                accountTypes={getAccountTypes(broker)}
                label={t("create-program-page.settings.fields.account-type")}
                setLeverageChooseAvailable={setLeverageChooseAvailable}
                setFieldValue={setFieldValue}
                broker={broker}
              />
              {/* <GVFormikField
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
              </GVFormikField> */}
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
            <div className="create-program-settings__row create-program-settings__row--description">
              <GVFormikField
                type="textarea"
                name="description"
                label={t("create-program-page.settings.fields.description")}
                component={GVTextField}
              />
              <div className="create-program-settings__description-info">
                <span className="create-program-settings__description-requirements">
                  {t(
                    "create-program-page.settings.fields.description-requirements"
                  )}
                </span>
                {values.description.length > 0 && (
                  <span className="create-program-settings__description-chars">
                    {values.description.length}
                    <GVProgramPeriod
                      start={0}
                      end={500}
                      value={values.description.length}
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="create-program-settings__row create-program-settings__row--couple-field">
              <GVFormikField
                name="leverage"
                component={GVTextField}
                label={t(
                  "create-program-page.settings.fields.brokers-leverage"
                )}
                InputComponent={Select}
                disabled={!values["accountType"] || !isLeverageChooseAvailable}
                className="create-program-settings__leverage"
              >
                {getLeverages(broker, values["accountType"]).map(leverage => {
                  return (
                    <option value={leverage.toString()} key={leverage}>
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
                {programsInfo.periods.map(period => {
                  return (
                    <option value={period.toString()} key={period}>
                      {period +
                        " " +
                        t(
                          "create-program-page.settings.fields.period-option-notation.day",
                          { count: period }
                        )}
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
              <div className="create-program-settings__file-field-container">
                <Field
                  name="logo"
                  render={({ field, form }) => (
                    <InputImage
                      {...field}
                      defaultImage={ProgramDefaultImage}
                      onChange={setFieldValue}
                      alt="Program logo"
                    />
                  )}
                />
              </div>
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
            <div className="create-program-settings__row">
              <div className="create-program-settings__fee">
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
                <Hint
                  content={t("create-program-page.settings.hints.entry-fee")}
                  className="create-program-settings__fee-hint"
                  vertical={"bottom"}
                  tooltipContent={t(
                    "create-program-page.settings.hints.entry-fee-description"
                  )}
                />
              </div>
              <div className="create-program-settings__fee">
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
                <Hint
                  content={t("create-program-page.settings.hints.success-fee")}
                  className="create-program-settings__fee-hint"
                  vertical={"bottom"}
                  tooltipContent={t(
                    "create-program-page.settings.hints.success-fee-description"
                  )}
                />
              </div>
            </div>
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
              {programsInfo.managerProgramInvestment + " GVT"}
            </div>
            <div className="create-program-settings__available-amount">
              {t("create-program-page.settings.fields.available-in-wallet")}
              <span className="create-program-settings__available-amount-value">
                <NumberFormat
                  value={formatValue(balance)}
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
            disabled={isSubmitting}
          >
            {t("buttons.create-program")}
          </GVButton>
          <GVButton
            variant="text"
            onClick={() => navigateBack(values)}
            className="create-program-settings__navigation-back"
          >
            &larr; {t("buttons.back")}
          </GVButton>
        </div>
      </div>
    );
  }
}

export default translate()(
  withFormik({
    displayName: "CreateProgramSettingsForm",
    mapPropsToValues: () => ({
      periodLength: "",
      successFee: "",
      leverage: "",
      title: "",
      description: "",
      logo: {
        cropped: null,
        src: "",
        isNew: false,
        isDefault: true
      },
      brokerAccountTypeId: "",
      entryFee: "",
      currency: "",
      accountType: ""
    }),
    validationSchema: createProgramSettingsValidationSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })(CreateProgramSettings)
);
