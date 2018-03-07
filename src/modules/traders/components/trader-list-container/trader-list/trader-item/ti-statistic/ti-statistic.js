import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import React from "react";

import replaceParams from "../../../../../../../utils/replace-params";

import {
  TRADERS_ROUTE,
  TRADER_DEPOSIT_ROUTE,
  TRADER_WITHDRAW_ROUTE
} from "../../../../../traders.constants";

const TIStatistic = ({ trader }) => {
  const traderDepositUrl = replaceParams(TRADER_DEPOSIT_ROUTE, {
    ":traderId": trader.id
  });
  const traderWithdrawUrl = replaceParams(TRADER_WITHDRAW_ROUTE, {
    ":traderId": trader.id
  });
  return (
    <div className="row">
      <div className="col-6">
        <p>Balance: {trader.balance} GVT</p>
        <p>Trades: {trader.tradesCount}</p>
        <p>Investors: {trader.investorsCount}</p>
        <p>Total Profit: {trader.profitTotal} GVT</p>
        <p>Avg Profit: {trader.profitAvg} %</p>
      </div>
      <div className="col-6">
        <p>Period Duration: {trader.periodDuration}</p>
        <p>EOP: {/*trader.endOfPeriod*/}</p>
        <p>Fee Success: {trader.feeSuccess}</p>
        <p>Fee Management: {trader.feeManagement}</p>
      </div>
    </div>
  );
};

export default TIStatistic;
