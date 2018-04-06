import React from "react";

import TraderCharts from "./trader-charts/trader-charts";
import TraderInfo from "./trader-info/trader-info";
import TraderStatistic from "./trader-statistic/trader-statistic";

const TraderDetail = ({
  trader,
  isAuthenticated,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage
}) => {
  return (
    <div>
      <TraderInfo
        trader={trader}
        isAuthenticated={isAuthenticated}
        openInvestPopup={openInvestPopup}
        openWithdrawPopup={openWithdrawPopup}
        openCloseProgramPopup={openCloseProgramPopup}
        openEditProgramPage={openEditProgramPage}
      />
      <TraderStatistic trader={trader} />
      <TraderCharts chart={trader.chart} profitDiagram={trader.profitDiagram} />
    </div>
  );
};

export default TraderDetail;
