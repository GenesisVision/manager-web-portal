import "./dashboard.scss";

import { GVButton } from "gv-react-components";
import { CREATE_PROGRAM_PAGE_ROUTE } from "pages/create-program/create-program.constants";
import { CREATE_FUND_PAGE_ROUTE } from "pages/create-fund/create-fund.constants";
import React from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

import Page from "../../components/page/page";

const DashboardPage = ({ t }) => {
  return (
    <Page title={t("dashboard.title")}>
      <div className="dashboard">
        <div className="dashboard__buttons">
          <div className="dashboard__button">
            <Link
              to={CREATE_PROGRAM_PAGE_ROUTE}
              className="dashboard-page__create-program-btn"
            >
              <GVButton color="primary" type="contained">
                {t("buttons.create-program")}
              </GVButton>
            </Link>
          </div>
          <div className="dashboard__button">
            <Link
              to={CREATE_FUND_PAGE_ROUTE}
              className="dashboard-page__create-program-btn"
            >
              <GVButton color="primary" type="contained">
                {t("buttons.create-fund")}
              </GVButton>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default translate()(DashboardPage);
