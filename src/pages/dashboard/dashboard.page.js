import "./dashboard.scss";

import React from "react";
import { translate } from "react-i18next";

import Page from "../../components/page/page";
import DashboardAssets from "./components/dashboard-assets/dashboard-assets";
import DashboardChartSection from "./components/dashboard-portfolio-chart-section/dashboard-portfolio-chart-section";
import DashboardPortfolioEventsContainer from "./components/dashboard-portfolio-events/dashboard-portfolio-events-container";

const DashboardPage = ({ t }) => {
  return (
    <Page title={t("dashboard-page.title")}>
      <div className="dashboard">
        <div className="dashboard__row">
          <div className="dashboard__chart">
            <DashboardChartSection />
          </div>
          <div className="dashboard__portfolio-events-aside">
            <DashboardPortfolioEventsContainer />
          </div>
        </div>
        <div className="dashboard__assets">
          <DashboardAssets />
        </div>
      </div>
    </Page>
  );
};

export default translate()(DashboardPage);
