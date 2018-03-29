import NumberFormat from "react-number-format";
import React from "react";

import DSFundChart from "./ds-fund-chart";

import "./ds-fund.css";

const COLORS = [
  "#1b4f64",
  "#03bdaf",
  "#7d9399",
  "#6a00ff",
  "#1ba1e2",
  "#647687",
  "#76608a"
];
const DSFund = ({ funds }) => {
  return (
    <div className="dashboard-card__body card-body">
      <div className="dashboard-card__header">Funds</div>
      <div className="dashboard-card__image ds-fund__chart">
        <DSFundChart data={funds} colors={COLORS} />
      </div>
      <div className="dashboard-card__value">
        <div className="ds-fund__values">
          {funds.map((x, idx) => (
            <div key={idx} className="metric ds-fund__value">
              <div className="metric__value">
                <NumberFormat
                  value={x.balance}
                  decimalScale={2}
                  displayType="text"
                />
                <div className="metric__bubble">{x.currency}</div>
              </div>
              <div className="metric__description">
                <div
                  className="ds-fund__color"
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                />
                {x.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSFund;
