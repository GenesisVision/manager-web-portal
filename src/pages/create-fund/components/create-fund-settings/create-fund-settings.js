import "./create-fund-settings.scss";

import classNames from "classnames";
import { RefreshIcon } from "components/icon/refresh-icon";
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

import AddButton from "../../../../components/add-button/add-button";
import { percentNumberFormat } from "../../helpers/create-fund.helpers";
import CreateFundSettingsAddAsset from "./create-fund-settings-add-asset/create-fund-settings-add-asset";
import CreateFundSettingsAssetsComponent from "./create-fund-settings-assets-block/create-fund-settings-assets-block";
import createFundSettingsValidationSchema from "./create-fund-settings.validators";
import ErrorNotifier from "./error-notifier/error-notifier";
import FundDefaultImage from "./fund-default-image";

class CreateFundSettings extends React.Component {
  state = {
    anchor: null,
    assets: this.props.assets.map(asset => {
      return {
        ...asset,
        percent: 0
      };
    }),
    remainder: 100
  };
  handlePercentChange = asset => e => {
    let value = +e.target.value;
    if (isNaN(value)) return;
    if (value > this.getRemainderWithoutChoised(asset))
      value = this.getRemainderWithoutChoised(asset);
    asset.percent = value;
    this.updateAssets();
  };

  handleDown = asset => () => {
    if (asset.percent === 0) return;
    asset.percent--;
    this.updateAssets();
  };
  handleUp = asset => () => {
    if (this.state.remainder - 1 < 0) return;
    asset.percent++;
    this.updateAssets();
  };
  getRemainder = () => {
    return 100 - this.state.assets.reduce((sum, item) => sum + item.percent, 0);
  };
  getRemainderWithoutChoised = asset => {
    return (
      100 -
      this.state.assets
        .filter(item => item.asset !== asset.asset)
        .reduce((sum, item) => sum + item.percent, 0)
    );
  };
  updateAssets = () => {
    const newRemainder = this.getRemainder();
    this.setState({
      assets: [...this.state.assets],
      remainder: newRemainder
    });
    this.props.setFieldValue("balance", this.props.balance);
    this.props.setFieldValue("remainder", newRemainder);
    this.props.setFieldValue(
      "assets",
      this.state.assets.filter(item => item.percent > 0)
    );
  };
  removeHandle = currency => () => {
    this.state.assets.find(item => item.asset === currency).percent = 0;
    this.updateAssets();
  };
  handleOpenDropdown = event => {
    this.setState({ anchor: event.currentTarget });
  };
  handleCloseDropdown = () => this.setState({ anchor: null });
  render() {
    const { anchor, assets, remainder } = this.state;
    const {
      t,
      navigateBack,
      balance,
      author,
      updateBalance,
      isSubmitting,
      handleSubmit,
      values,
      setFieldValue,
      deposit
    } = this.props;
    return (
      <div className="create-fund-settings">
        <form className="create-fund-settings__form">
          <div className="create-fund-settings__subheading">
            <span className="create-fund-settings__block-number">01</span>
            {t("create-fund-page.settings.main-settings")}
          </div>
          <div className="create-fund-settings__fill-block create-fund-settings__fill-block--with-border">
            <div className="create-fund-settings__row">
              <GVFormikField
                type="text"
                name="title"
                label={t("create-fund-page.settings.fields.name")}
                autoComplete="off"
                component={GVTextField}
              />
            </div>
            <div className="create-fund-settings__row create-fund-settings__row--description">
              <GVFormikField
                type="textarea"
                name="description"
                label={t("create-fund-page.settings.fields.description")}
                component={GVTextField}
              />
              <div className="create-fund-settings__description-info">
                <span className="create-fund-settings__description create-fund-settings__description-requirements">
                  {t(
                    "create-fund-page.settings.fields.description-requirements"
                  )}
                </span>
                {values.description.length > 0 && (
                  <div className="create-fund-settings__description-chars">
                    <div className="create-fund-settings__description-chars-value">
                      {values.description.length}
                    </div>
                    <GVProgramPeriod
                      start={0}
                      end={500}
                      value={values.description.length}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="create-fund-settings__logo-title">
              {t("create-fund-page.settings.fields.upload-logo")}
            </div>
            <div className="create-fund-settings__logo-notice">
              {t("create-fund-page.settings.fields.upload-logo-rules")}
            </div>
            <div className="create-fund-settings__logo-section">
              <div className="create-fund-settings__file-field-container">
                <Field
                  name="logo"
                  render={({ field, form }) => (
                    <InputImage
                      {...field}
                      defaultImage={FundDefaultImage}
                      onChange={setFieldValue}
                      alt="Fund logo"
                    />
                  )}
                />
              </div>
              <div className="create-fund-settings__image-info">
                <div className="create-fund-settings__image-title">
                  {values.title}
                </div>
                <div className="create-fund-settings__image-author">
                  {author}
                </div>
              </div>
            </div>
          </div>
          <div className="create-fund-settings__subheading">
            <span className="create-fund-settings__block-number">02</span>
            {t("create-fund-page.settings.asset-selection")}
          </div>
          <div className="create-fund-settings__fill-block create-fund-settings__fill-block--with-border">
            <div className="create-fund-settings__description">
              <Field
                name="remainder"
                render={({ field, form }) => (
                  <ErrorNotifier
                    placeholder={t(
                      "create-fund-page.settings.fields.asset-description"
                    )}
                    {...field}
                    {...form}
                  />
                )}
              />
            </div>
            <div className="create-fund-settings__error">
              <Field
                name="assets"
                render={({ field, form }) => (
                  <ErrorNotifier {...field} {...form} />
                )}
              />
            </div>
            <CreateFundSettingsAssetsComponent
              assets={assets.filter(item => item.percent > 0)}
              remainder={remainder}
              removeHandle={this.removeHandle}
            />
            <div className="create-fund-settings__add-assets">
              <div
                className="create-fund-settings__add-assets-button"
                onClick={this.handleOpenDropdown}
              >
                <div>
                  <AddButton />
                </div>
                <div>{t("buttons.add-assets")}</div>
              </div>
            </div>
          </div>
          <div className="create-fund-settings__subheading">
            <span className="create-fund-settings__block-number">03</span>
            {t("create-fund-page.settings.fees-settings")}
          </div>
          <div className="create-fund-settings__fill-block create-fund-settings__fill-block--with-border">
            <div className="create-fund-settings__row">
              <GVFormikField
                name="entryFee"
                label={t("create-fund-page.settings.fields.entry-fee")}
                suffix=" %"
                isAllowed={percentNumberFormat}
                component={GVTextField}
                InputComponent={NumberFormat}
                autoComplete="off"
                decimalScale={4}
              />
              <GVFormikField
                name="successFee"
                label={t("create-fund-page.settings.fields.exit-fee")}
                suffix=" %"
                isAllowed={percentNumberFormat}
                component={GVTextField}
                InputComponent={NumberFormat}
                autoComplete="off"
                decimalScale={4}
              />
            </div>
          </div>
          <div className="create-fund-settings__subheading">
            <span className="create-fund-settings__block-number">04</span>
            {t("create-fund-page.settings.deposit-details")}
          </div>
          <div className="create-fund-settings__fill-block create-fund-settings__fill-block--without-border">
            <div className="create-fund-settings__deposit-amount-title create-fund-settings__description">
              {t("create-fund-page.settings.fields.deposit-amount")}
            </div>
            <div className="create-fund-settings__deposit-amount-value">
              {deposit}
            </div>
            <div className="create-fund-settings__available-amount">
              {t("create-fund-page.settings.fields.available-in-wallet")}
              <span
                className={classNames(
                  "create-fund-settings__available-amount-value",
                  {
                    "create-fund-settings__available-amount-value--error":
                      balance < deposit
                  }
                )}
              >
                <NumberFormat
                  value={balance}
                  thousandSeparator=" "
                  displayType="text"
                  suffix=" GVT"
                />
              </span>
              <span onClick={updateBalance}>{<RefreshIcon />}</span>
            </div>
          </div>
        </form>
        <div className="create-fund-settings__navigation">
          <GVButton
            title={t("buttons.create-fund")}
            color="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {t("buttons.create-fund")}
          </GVButton>
          <GVButton
            variant="text"
            onClick={() => navigateBack(values)}
            className="create-fund-settings__navigation-back"
          >
            &larr; {t("buttons.back")}
          </GVButton>
        </div>
        <CreateFundSettingsAddAsset
          anchor={anchor}
          handleCloseDropdown={this.handleCloseDropdown}
          assets={assets}
          handleDown={this.handleDown}
          handleUp={this.handleUp}
          handlePercentChange={this.handlePercentChange}
        />
      </div>
    );
  }
}

export default translate()(
  withFormik({
    displayName: "CreateFundSettingsForm",
    enableReinitialize: true,
    mapPropsToValues: props => {
      return {
        assets: [],
        balance: props.balance,
        remainder: 100,
        successFee: "",
        title: "",
        description: "",
        logo: {
          cropped: null,
          src: "",
          isNew: false,
          isDefault: true
        },
        entryFee: ""
      };
    },
    validationSchema: createFundSettingsValidationSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })(CreateFundSettings)
);
