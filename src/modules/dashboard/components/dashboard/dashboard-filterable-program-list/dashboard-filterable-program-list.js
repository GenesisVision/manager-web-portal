import React from "react";
import DashboardProgramListContainer from "./dashboard-program-list-container/dashboard-program-list-container";

const DashboardFilterableProgramList = () => {
  return (
    <div>
      <div className="dashboard-subheader">Programs</div>
      <DashboardProgramListContainer />
    </div>
  );
};

export default DashboardFilterableProgramList;
