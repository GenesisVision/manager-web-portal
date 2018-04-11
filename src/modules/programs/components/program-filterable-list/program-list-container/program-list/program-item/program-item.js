import classnames from "classnames";
import React from "react";

import TIButtons from "../../../../../../../components/program-item/pi-buttons/pi-buttons";
import TIChart from "../../../../../../../components/program-item/pi-chart/pi-chart";
import TIInfo from "../../../../../../../components/program-item/pi-info/pi-info";
import PIStatistic from "./pi-statistic/pi-statistic";

import "./program-item.css";

const ProgramItem = ({ idx, trader, isAuthenticated, openInvestPopup }) => {
  const traderChartData = trader.chart.map(x => ({
    fund: +(x.investorFund + x.managerFund).toFixed(8),
    profit: x.profit,
    loss: x.loss,
    totalProfit: x.totalProfit
  }));
  return (
    <div
      className={classnames("program-item", {
        "trader-item--inactive": !trader.isEnabled
      })}
    >
      <TIInfo idx={idx} trader={trader} />
      <TIChart data={traderChartData} />
      <PIStatistic trader={trader} />
      <TIButtons
        programId={trader.id}
        isInvestEnable={trader.isInvestEnable}
        isAuthenticated={isAuthenticated}
        openInvestPopup={openInvestPopup}
      />
    </div>
  );
};

export default ProgramItem;
