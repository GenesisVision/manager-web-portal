import NumberFormat from "react-number-format";
import React from "react";
import "./ds-investors.css";

import InvestorsImage from "./investors-icon.svg";

const DSInvestors = ({ investorsCount, investorsFund }) => {
  return (
    <div className="dashboard-card__body card-body">
      <div className="dashboard-card__header">Investors</div>
      <div className="dashboard-card__image">
        <img src={InvestorsImage} alt="Investors" />
      </div>
      <div className="dashboard-card__value">
        <div className="ds-investors__values">
          <div className="metric">
            <div className="metric__value">
              <NumberFormat value={investorsCount} displayType="text" />
            </div>
            <div className="metric__description">Participate</div>
          </div>
          <div className="metric">
            <div className="metric__value">
              <NumberFormat
                value={investorsFund}
                decimalScale={2}
                displayType="text"
              />
              <div className="metric__bubble">GVT</div>
            </div>
            <div className="metric__description">Investments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSInvestors;
