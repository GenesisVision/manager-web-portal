import { Link } from "react-router-dom";
import React from "react";

import "./dashboard-description.css";
import { PROGRAM_SETTINGS_CREATE_ROUTE } from "../../../../../program-settings/program-settings.constants";

const DashboardDescription = () => {
  return (
    <div className="dashboard-description">
      <div className="dashboard-description__name dashboard-subheader">
        Dashboard
      </div>
      <div className="dashboard-description__buttons">
        <Link
          className="gv-btn gv-btn-primary"
          to={PROGRAM_SETTINGS_CREATE_ROUTE}
        >
          Create Program
        </Link>
      </div>
    </div>
  );
};

export default DashboardDescription;
