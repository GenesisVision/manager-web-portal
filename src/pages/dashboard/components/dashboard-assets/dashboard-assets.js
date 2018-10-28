import "./dashboard-assets.scss";

import Surface from "components/surface/surface";
import { GVTab, GVTabs } from "gv-react-components";
import { GVButton } from "gv-react-components";
import { CREATE_FUND_PAGE_ROUTE } from "pages/create-fund/create-fund.constants";
import { CREATE_PROGRAM_PAGE_ROUTE } from "pages/create-program/create-program.constants";
import React, { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import DashboardFunds from "./dashboard-funds/dashboard-funds";
import DashboardPrograms from "./dashboard-programs/dashboard-programs";

class DashboardAssets extends Component {
  state = {
    tab: "programs"
  };

  handleTabChange = (e, tab) => {
    this.setState({ tab });
  };

  render() {
    const { tab } = this.state;
    const { t } = this.props;
    return (
      <Surface className="dashboard-assets">
        <div className="dashboard-assets__head">
          <div className="dashboard-assets__title">Assets</div>
          <div className="dashboard-assets__tabs">
            <GVTabs value={tab} onChange={this.handleTabChange}>
              <GVTab value={"programs"} label="Programs" />
              <GVTab value={"funds"} label="Funds" />
            </GVTabs>
          </div>
        </div>
        <div className="dashboard-assets">
          {tab === "programs" && (
            <DashboardPrograms
              createButtonToolbar={createButtonToolbar(
                t("buttons.create-program"),
                CREATE_PROGRAM_PAGE_ROUTE
              )}
              createButtonBody={createButtonBody(
                t("buttons.create-program"),
                CREATE_PROGRAM_PAGE_ROUTE
              )}
              createText={t("dashboard.create-program-text")}
            />
          )}
          {tab === "funds" && (
            <DashboardFunds
              createButtonToolbar={createButtonToolbar(
                t("buttons.create-fund"),
                CREATE_FUND_PAGE_ROUTE
              )}
              createButtonBody={createButtonBody(
                t("buttons.create-fund"),
                CREATE_FUND_PAGE_ROUTE
              )}
              createText={t("dashboard.create-fund-text")}
            />
          )}
        </div>
      </Surface>
    );
  }
}

const createButtonToolbar = (text, route) => (
  <div className="dashboard__button-container">
    <Link to={route} className="dashboard__button">
      <GVButton color="primary" variant="text">
        {text}
      </GVButton>
    </Link>
  </div>
);

const createButtonBody = (text, route) => (
  <Link to={route} className="dashboard__body-button">
    <GVButton color="primary">{text}</GVButton>
  </Link>
);

export default translate()(DashboardAssets);
