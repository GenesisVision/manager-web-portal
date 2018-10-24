import "./fund-details-description.scss";

import AssetAvatar from "components/avatar/asset-avatar/asset-avatar";
import FundAssetContainer from "components/fund-asset/fund-asset-container";
import { GVButton } from "gv-react-components";
import FundDepositContainer from "modules/fund-deposit/fund-deposit-container";
import ProgramReinvestingWidget from "modules/program-reinvesting/components/program-reinvesting-widget";
import { FUND_NOTIFICATIONS_ROUTE } from "pages/notifications/notifications.routes";
import React, { PureComponent } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import replaceParams from "utils/replace-params";

import FundDetailsFavorite from "./fund-details-favorite";
import FundDetailsNotification from "./fund-details-notificaton";
import FundDetailsInvestment from "../fund-details-investment/fund-details-investment";

export const composeFundNotificationsUrl = url => {
  return replaceParams(FUND_NOTIFICATIONS_ROUTE, {
    ":id": url
  });
};

class FundDetailsDescription extends PureComponent {
  state = {
    isOpenInvestmentPopup: false,
    isOpenAboutLevels: false,
    anchor: null
  };

  handleOpenInvestmentPopup = () => {
    const { isAuthenticated, redirectToLogin } = this.props;
    if (isAuthenticated) {
      this.setState({ isOpenInvestmentPopup: true });
    } else {
      redirectToLogin();
    }
  };

  handleCloseInvestmentPopup = () => {
    this.setState({ isOpenInvestmentPopup: false });
  };

  render() {
    const { isOpenInvestmentPopup } = this.state;
    const {
      t,
      isInvested,
      fundDescription,
      onReinvestingClick,
      onFavoriteClick,
      isReinvestPending,
      isFavoritePending,
      composeInvestmentData,
      onChangeInvestmentStatus,
      isOwnProgram
    } = this.props;
    const isFavorite =
      fundDescription.personalFundDetails &&
      fundDescription.personalFundDetails.isFavorite;
    return (
      <div className="fund-details-description">
        <div className="fund-details-description__left">
          <div
            className="fund-details-description__avatar"
            onClick={this.handleOpenDropdown}
          >
            <AssetAvatar
              url={fundDescription.logo}
              level={fundDescription.level}
              alt={fundDescription.title}
              size="big"
              color={fundDescription.color}
            />
          </div>
        </div>
        <div className="fund-details-description__main">
          <div className="fund-details-description__heading">
            {fundDescription.title}
          </div>
          <div className="fund-details-description__info-block">
            <div className="fund-details-description__subheading">
              {t("fund-details-page.description.assets")}
            </div>
            <div className="fund-details-description__text">
              <FundAssetContainer
                type={"large"}
                assets={fundDescription.currentAssets}
                size={7}
              />
            </div>
          </div>
          <div className="fund-details-description__info">
            <div className="fund-details-description__info-block">
              <div className="fund-details-description__subheading">
                {t("fund-details-page.description.strategy")}
              </div>
              <div className="fund-details-description__text">
                {fundDescription.description}
              </div>
            </div>
            <div className="fund-details-description__short-statistic">
              <div className="fund-details-description__short-statistic-item">
                <span className="fund-details-description__short-statistic-subheading">
                  {t("fund-details-page.description.entryFee")}
                </span>
                <NumberFormat
                  value={fundDescription.entryFee}
                  displayType="text"
                  suffix=" %"
                />
              </div>
              <div className="fund-details-description__short-statistic-item">
                <span className="fund-details-description__short-statistic-subheading">
                  Exit fee
                </span>
                <NumberFormat
                  value={fundDescription.exitFee}
                  displayType="text"
                  suffix=" %"
                />
              </div>
            </div>
            {isOwnProgram && (
              <div className="fund-details-description__invest-button-container">
                <GVButton
                  className="fund-details-description__invest-btn"
                  onClick={this.handleOpenInvestmentPopup}
                >
                  {t("fund-details-page.description.invest")}
                </GVButton>
                <FundDepositContainer
                  open={isOpenInvestmentPopup}
                  id={fundDescription.id}
                  type={"fund"}
                  onClose={this.handleCloseInvestmentPopup}
                />
                {isInvested && (
                  <ProgramReinvestingWidget
                    className="fund-details-description__reinvest"
                    toggleReinvesting={onReinvestingClick}
                    isReinvesting={
                      fundDescription.personalFundDetails.isReinvest
                    }
                    disabled={isReinvestPending}
                  />
                )}
              </div>
            )}
            {isInvested && (
              <FundDetailsInvestment
                className={"fund-details-description__your-investment"}
                {...composeInvestmentData(fundDescription)}
                onChangeInvestmentStatus={onChangeInvestmentStatus}
              />
            )}
          </div>
        </div>
        <div className="fund-details-description__right">
          <FundDetailsFavorite
            fundId={fundDescription.id}
            isFavorite={isFavorite}
            toggleFavorite={onFavoriteClick}
            disabled={isFavoritePending}
          />
          <FundDetailsNotification
            url={composeFundNotificationsUrl(fundDescription.url)}
            disabled={isFavoritePending}
          />
        </div>
      </div>
    );
  }
}

export default translate()(FundDetailsDescription);
