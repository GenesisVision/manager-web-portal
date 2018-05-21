import { translate } from "react-i18next";
import { UncontrolledTooltip } from "reactstrap";
import NumberFormat from "react-number-format";
import React from "react";

import PIStat from '../../../../../../../../components/program-item/pi-stat/pi-stat';

import "./pi-statisctic.css";

const PIStatistic = ({ t, program }) => {
  return (
    <div className="pi-statistic">
      <div className="pis-item">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={program.availableInvestment}
              displayType="text"
            />
            <div className="metric__bubble">GVT</div>
          </div>
          <div className="metric__description">
            <span id={`availableToInvestment_${program.id}`}>
              {t("program-statistic.available-to-invest.text")}
            </span>
            <UncontrolledTooltip
              placement="bottom"
              target={`availableToInvestment_${program.id}`}
            >
              {t("program-statistic.available-to-invest.tooltip")}
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
      <div className="pis-item">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={program.profitAvgPercent}
              suffix="%"
              decimalScale={2}
              displayType="text"
            />
          </div>
          <div className="metric__description">
            <span id={`avgProfit_${program.id}`}>
              {t("program-statistic.avg-profit.text")}
            </span>
            <UncontrolledTooltip
              placement="bottom"
              target={`avgProfit_${program.id}`}
            >
              {t("program-statistic.avg-profit.tooltip")}
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
      <div className="pis-item">
        <div className="metric">
          <div className="metric__value">{program.tradesCount}</div>
          <div className="metric__description">
            <span id={`trades_${program.id}`}>
              {t("program-statistic.trades.text")}
            </span>
            <UncontrolledTooltip
              placement="bottom"
              target={`trades_${program.id}`}
            >
              {t("program-statistic.trades.tooltip")}
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
      <div className="pis-item">
        <div className="metric">
          <div className="metric__value">{program.investorsCount}</div>
          <div className="metric__description">
            <span id={`investors_${program.id}`}>
              {t("program-statistic.investors.text", {
                count: program.investorsCount
              })}
            </span>
            <UncontrolledTooltip
              placement="bottom"
              target={`investors_${program.id}`}
            >
              {t("program-statistic.investors.tooltip")}
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
      <div className="pis-item">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={program.balance}
              decimalScale={2}
              displayType="text"
            />
            <div className="metric__bubble">{program.currency}</div>
          </div>
          <div className="metric__description">
            <span id={`balance_${program.id}`}>
              {t("program-statistic.program-item-balance.text")}
            </span>
            <UncontrolledTooltip
              placement="bottom"
              target={`balance_${program.id}`}
            >
              {t("program-statistic.program-item-balance.tooltip")}
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
      <div className="pis-item">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat value={program.profitTotal} displayType="text" />
            <div className="metric__bubble">GVT</div>
          </div>
          <div className="metric__description">
            <span id={`totalProfit_${program.id}`}>
              {t("program-statistic.total-profit.text")}
            </span>
            <UncontrolledTooltip
              placement="bottom"
              target={`totalProfit_${program.id}`}
            >
              {t("program-statistic.total-profit.tooltip")}
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default translate()(PIStatistic);
