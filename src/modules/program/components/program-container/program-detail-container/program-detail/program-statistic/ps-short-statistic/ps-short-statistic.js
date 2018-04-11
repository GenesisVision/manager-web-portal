import NumberFormat from "react-number-format";
import React from "react";

import TokensWidget from "../../../../../../../../components/tokens-widget/tokens-widget";

import "./ps-short-statistic.css";

const PSShortStatistic = ({ program }) => {
  return (
    <div className="program-statistic">
      <div className="program-statistic__cell">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={program.balance}
              // decimalScale={2}
              displayType="text"
            />
            <div className="metric__bubble">{program.currency}</div>
          </div>
          <div className="metric__description">Balance</div>
        </div>
      </div>
      <div className="program-statistic__cell">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={program.ownBalance}
              // decimalScale={2}
              displayType="text"
            />
            <div className="metric__bubble">{program.currency}</div>
          </div>
          <div className="metric__description">Own Balance</div>
        </div>
      </div>
      <div className="program-statistic__cell">
        <div className="metric">
          <div className="metric__value">{program.tradesCount}</div>
          <div className="metric__description">Trades</div>
        </div>
      </div>
      <div className="program-statistic__cell">
        <div className="metric">
          <div className="metric__value">
            {program.periodDuration} <div className="metric__bubble">days</div>
          </div>
          <div className="metric__description">Period Duration</div>
        </div>
      </div>
      <div className="program-statistic__cell">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={program.feeManagement}
              suffix="%"
              decimalScale={2}
              displayType="text"
            />
          </div>
          <div className="metric__description">Management Fee</div>
        </div>
      </div>
      <div className="program-statistic__cell">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={program.feeSuccess}
              suffix="%"
              decimalScale={2}
              displayType="text"
            />
          </div>
          <div className="metric__description">Success Fee</div>
        </div>
      </div>
      <div className="program-statistic__cell">
        <div className="metric">
          <div className="metric__value">
            <TokensWidget
              invested={program.freeTokens.investorsTokens}
              requested={program.freeTokens.requestsTokens}
              total={program.freeTokens.total}
              showHeader={false}
            />
          </div>
          <div className="metric__description">Tokens</div>
        </div>
      </div>
    </div>
  );
};

export default PSShortStatistic;
