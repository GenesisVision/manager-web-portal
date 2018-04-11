import React from "react";

import ProgramCharts from "./program-charts/program-charts";
import ProgramInfo from "./program-info/program-info";
import ProgramStatistic from "./program-statistic/program-statistic";

const ProgramDetail = ({
  program,
  isAuthenticated,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage
}) => {
  return (
    <div>
      <ProgramInfo
        program={program}
        isAuthenticated={isAuthenticated}
        openInvestPopup={openInvestPopup}
        openWithdrawPopup={openWithdrawPopup}
        openCloseProgramPopup={openCloseProgramPopup}
        openEditProgramPage={openEditProgramPage}
      />
      <ProgramStatistic program={program} />
      <ProgramCharts
        chart={program.chart}
        profitDiagram={program.profitDiagram}
      />
    </div>
  );
};

export default ProgramDetail;
