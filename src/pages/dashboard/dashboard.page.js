import "./dashboard.scss";

import React from "react";
import { translate } from "react-i18next";

import Page from "../../components/page/page";

const DashboardPage = ({ t }) => {
  return (
    <Page title={t("dashboard-page.title")}>
      <div className="dashboard">123</div>
    </Page>
  );
};

export default translate()(DashboardPage);
