import React from "react";

import TSButtons from "./ts-buttons/ts-buttons";
import TSCards from "./ts-cards/ts-cards";

const TraderStatistic = ({ trader, closeTraderProgram }) => {
  return (
    <div>
      <TSCards
        totalProfit={trader.profitTotal}
        avgProfit={trader.profitAvg}
        investors={trader.investorsCount}
      />
      <div className="row mt-4">
        <div className="col-md-4">
          <p>Base Currency: {trader.currency}</p>
          <p>Balance: {trader.balance}</p>
          <p>Own Funds: {trader.ownFunds}</p>
          <p>Trades: {trader.tradesCount}</p>
        </div>
        <div className="col-md-4">
          <p>Period Duration: {trader.periodDuration}</p>
          <p>Management Fee: {trader.feeManagement} %</p>
          <p>Success Fee: {trader.feeSuccess} %</p>
        </div>
        <div className="col-1">
          <TSButtons
            traderId={trader.id}
            isOwnProgram={trader.isOwnProgram}
            isEnable={trader.isEnable}
            isInvestEnable={trader.isInvestEnable}
            isWithdrawEnable={trader.isWithdrawEnable}
            closeTraderProgram={closeTraderProgram(trader.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TraderStatistic;
