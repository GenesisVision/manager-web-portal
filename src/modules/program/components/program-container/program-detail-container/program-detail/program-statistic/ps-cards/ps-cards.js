import React from "react";
import NumberFormat from "react-number-format";

import "./ps-cards.css";
import walletIcon from "../../../../../../media/wallet-icon.svg";
import investorAvatar from "../../../../../../../../shared/media/investor-avatar.png";
import PSProfitChart from "./ps-profit-chart";

const profitChartData = (chartData, programStartDate) => {
  return [
    {
      totalProfit: 0,
      date: programStartDate
    },
    ...chartData
  ];
};

const PSCards = ({ program }) => {
  return (
    <div className="program-cards">
      <div className="program-card card">
        <div className="program-card__body  card-body">
          <div className="program-card__image">
            <PSProfitChart
              data={profitChartData(program.chart, program.programStartDate)}
            />
          </div>
          <div className="program-card__value">
            <NumberFormat
              value={program.profitTotal}
              // decimalScale={4}
              displayType="text"
            />
            <div className="program-card__bubble metric__bubble">GVT</div>
          </div>
          <div className="program-card__description">Profit</div>
        </div>
      </div>
      <div className="program-card card">
        <div className="program-card__body card-body">
          <div className="program-card__image">
            <img src={walletIcon} height="100" alt="Avg Profit" />
          </div>
          <div className="program-card__value">{program.profitAvgPercent}%</div>
          <div className="program-card__description">Avg Profit</div>
        </div>
      </div>
      <div className="program-card card">
        <div className="program-card__body card-body">
          <div className="program-card__image">
            <img src={investorAvatar} height="130" alt="Investor" />
          </div>
          <div className="program-card__value">{program.investorsCount}</div>
          <div className="program-card__description">Investors</div>
        </div>
      </div>
    </div>
  );
};

export default PSCards;
