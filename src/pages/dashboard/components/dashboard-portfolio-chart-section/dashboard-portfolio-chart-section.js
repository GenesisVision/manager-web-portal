import "./dashboard-portfolio-chart-section.scss";

import Surface from "components/surface/surface";
import React, { Component, Fragment } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "redux";

import Dashboard from "../../../../modules/dashboard/components/dashboard/dashboard";
import DashboardChartAssetsContainer from "./dashboard-chart-assets/dashboard-chart-assets-container";
import DashboardPortfolioChartContainer from "./dashboard-chart/dashboard-portfolio-chart-container";
import DashboardPortfolioChartLoader from "./dashboard-chart/dashboard-portfolio-chart-loader";
import DashboardGetStarted from "./dashboard-get-started";
import DashboardInRequestsContainer from "./dashboard-in-requests/dashboard-in-requests-container";

class DashboardPortfolioChartSection extends Component {
  getAssets = () => {
    const { programsData, fundsData } = this.props;

    if (programsData && fundsData) {
      return { programs: programsData.programs, funds: fundsData.funds };
    }
    return null;
  };

  hasAssets = () => {
    const assets = this.getAssets();
    return assets && (assets.programs.length > 0 || assets.funds.length > 0);
  };
  render() {
    const { t } = this.props;
    const assets = this.getAssets();
    return (
      <Surface className="dashboard-portfolio-chart-section">
        <div className="dashboard-portfolio-chart-section__heading">
          {t("chart.title")}
        </div>
        {this.hasAssets() ? (
          <Fragment>
            <div className="dashboard-portfolio-chart-section__actions">
              <DashboardChartAssetsContainer assets={assets} />
              <DashboardInRequestsContainer />
            </div>
            <DashboardPortfolioChartContainer assets={assets} />
          </Fragment>
        ) : (
          <DashboardGetStarted />
        )}
      </Surface>
    );
  }
}

const mapStateToProps = state => {
  const { programs, funds } = state.dashboard;
  return {
    programsData: programs.itemsData.data,
    fundsData: funds.itemsData.data,
    isPending: funds.itemsData.isPending && programs.itemsData.isPending
  };
};

export default compose(translate(), connect(mapStateToProps))(
  DashboardPortfolioChartSection
);
