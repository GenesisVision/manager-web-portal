import ChartTooltip from "components/chart/chart-tooltip/chart-tooltip";
import React, { Fragment } from "react";

const TooltipBody = ({ managersFunds, investorsFunds, profit }) => {
  return (
    <Fragment>
      <div className="fund-details-tooltip__statistic">
        <div className="fund-details-tooltip__title">Investors Funds</div>
        <div className="fund-details-tooltip__value">{investorsFunds}</div>
      </div>
      <div className="fund-details-tooltip__statistic">
        <div className="fund-details-tooltip__title">Managers Funds</div>
        <div className="fund-details-tooltip__value">{managersFunds}</div>
      </div>
    </Fragment>
  );
};
const FundBalanceTooltip = ({
  active,
  label,
  payload,
  heading,
  body,
  date
}) => {
  if (!active || !payload[0]) return null;

  const managersFunds = `${payload[0].payload.managerFunds}${payload[0].unit}`;
  const investorsFunds = `${payload[0].payload.investorsFunds}${
    payload[0].unit
  }`;
  const profit = `${payload[0].payload.profit}${payload[0].unit}`;

  return (
    <ChartTooltip
      heading="Balance"
      body={
        <TooltipBody
          managersFunds={managersFunds}
          investorsFunds={investorsFunds}
          profit={profit}
        />
      }
      date={new Date(label)}
      className="fund-details-tooltip"
    />
  );
};
export default FundBalanceTooltip;
