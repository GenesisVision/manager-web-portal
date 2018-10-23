import "./dashboard-portfolio-events-all.scss";

import Page from "components/page/page";
import Surface from "components/surface/surface";
import React from "react";
import { translate } from "react-i18next";
import connect from "react-redux/es/connect/connect";
import { goBack } from "react-router-redux";
import { bindActionCreators, compose } from "redux";

import PortfolioEventsAllNavigation from "./dashboard-portfolio-events-all-navigation";
import PortfolioEventsTableComponent from "./dashboard-portfolio-events-table/dashboard-portfolio-events-all-table";

export const PORTFOLIO_EVENTS_ALL_PAGE_ROUTE = "portfolio-events";
const PortfolioEventsAllComponent = ({ service, t }) => {
  return (
    <Page title={t("dashboard.portfolio-events.title")}>
      <div className="dashboard-portfolio-events-all">
        <PortfolioEventsAllNavigation
          className="dashboard-portfolio-events-all__navigation"
          goBack={service.goBack}
        />
        <h1 className="dashboard-portfolio-events-all__heading">
          {t("dashboard.portfolio-events.title")}
        </h1>
        <Surface>
          <PortfolioEventsTableComponent
            title={t("dashboard.portfolio-events.table-title")}
            className="portfolio-events-all-table"
            dateRangeStartLabel={t("filters.date-range.account-creation")}
          />
        </Surface>
      </div>
    </Page>
  );
};

const mapDispatchToProps = dispatch => ({
  service: bindActionCreators({ goBack }, dispatch)
});

export default compose(connect(null, mapDispatchToProps))(
  translate()(PortfolioEventsAllComponent)
);
