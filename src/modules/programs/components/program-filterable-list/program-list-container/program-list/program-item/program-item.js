import classnames from "classnames";
import React from "react";

import TIButtons from "../../../../../../../components/trader-item/ti-buttons/ti-buttons";
import TIChart from "../../../../../../../components/trader-item/ti-chart/ti-chart";
import TIInfo from "../../../../../../../components/trader-item/ti-info/ti-info";
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
