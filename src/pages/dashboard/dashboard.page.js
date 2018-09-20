import "./dashboard.scss";

import { GVButton } from "gv-react-components";
import { CREATE_PROGRAM_PAGE_ROUTE } from "pages/create-program/create-program.constants";
import React from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

import Page from "../../components/page/page";

const DashboardPage = ({ t }) => {
  return (
    <Page title={t("dashboard-page.title")}>
      <div className="dashboard">
        <Link
          to={CREATE_PROGRAM_PAGE_ROUTE}
          className="dashboard-page__create-program-btn"
        >
          <GVButton variant="text" color="primary" type="contained">
            Create Program
          </GVButton>
        </Link>
      </div>
    </Page>
  );
};

export default translate()(DashboardPage);
