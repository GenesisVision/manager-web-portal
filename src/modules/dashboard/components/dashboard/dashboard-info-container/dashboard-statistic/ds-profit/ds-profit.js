import NumberFormat from "react-number-format";
import React from "react";

import ProfitImage from "./profit-icon.svg";

const DSProfit = ({ profit }) => {
  return (
    <div className="dashboard-card__body card-body">
      <div className="dashboard-card__header">Profit</div>
      <div className="dashboard-card__image">
        <img src={ProfitImage} alt="Profit" />
      </div>
      <div className="dashboard-card__value">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat value={profit} decimalScale={2} displayType="text" />
            <div className="metric__bubble">GVT</div>
          </div>
          <div className="metric__description">My Profit</div>
        </div>
      </div>
    </div>
  );
};

export default DSProfit;
