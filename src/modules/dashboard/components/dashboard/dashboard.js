import React from "react";
import { Link } from "react-router-dom";

import DashboardChartContainer from "./dashboard-chart-container/dashboard-chart-container";
import DashboardContainer from "./dashboard-container/dashboard-container";
import { PROGRAM_SETTINGS_CREATE_ROUTE } from "../../../program-settings/program-settings.constants";

const Dashboard = () => {
  return (
    <div>
      <Link
        className="gv-btn gv-btn-primary"
        to={PROGRAM_SETTINGS_CREATE_ROUTE}
      >
        Create program
      </Link>
      {/* <DashboardChartContainer />
      <DashboardContainer /> */}
    </div>
  );
};

export default Dashboard;
