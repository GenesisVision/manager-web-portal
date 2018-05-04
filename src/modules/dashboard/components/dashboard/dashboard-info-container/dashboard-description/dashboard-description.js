import { Link } from "react-router-dom";
import { translate } from "react-i18next";
import React from "react";

import "./dashboard-description.css";
import { PROGRAM_SETTINGS_CREATE_ROUTE } from "../../../../../program-settings/program-settings.constants";
import { PROGRAM_SETTINGS_CREATE_TOURNAMENT_ROUTE } from "../../../../../program-tournament/program-tournament.constants";
const DashboardDescription = ({ t, isTournamentActive }) => {
  return (
    <div className="dashboard-description">
      <div className="dashboard-description__name dashboard-subheader">
        {t("dashboard.title")}
      </div>
      <div className="dashboard-description__buttons">
        {!isTournamentActive && (
          <Link
            className="gv-btn gv-btn-primary"
            to={PROGRAM_SETTINGS_CREATE_TOURNAMENT_ROUTE}
          >
            {t("program-actions.create-tournament-account")}
          </Link>
        )}
        <Link
          className="gv-btn gv-btn-primary"
          to={PROGRAM_SETTINGS_CREATE_ROUTE}
        >
          {t("program-actions.create-program")}
        </Link>
      </div>
    </div>
  );
};

export default translate()(DashboardDescription);
