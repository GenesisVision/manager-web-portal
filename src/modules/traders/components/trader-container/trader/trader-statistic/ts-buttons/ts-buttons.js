import { Link } from "react-router-dom";
import React from "react";

import replaceParams from "../../../../../../../utils/replace-params";
import {
  TRADER_DEPOSIT_ROUTE,
  TRADER_WITHDRAW_ROUTE,
  TRADER_ROUTE
} from "../../../../../traders.constants";

const TSButtons = ({
  traderId,
  isOwnProgram,
  isInvestEnable,
  isWithdrawEnable,
  closeTraderProgram
}) => {
  const traderDepositUrl = replaceParams(TRADER_DEPOSIT_ROUTE, {
    ":traderId": traderId
  });
  const traderWithdrawUrl = replaceParams(TRADER_WITHDRAW_ROUTE, {
    ":traderId": traderId
  });
  const traderUrl = replaceParams(TRADER_ROUTE, {
    ":traderId": traderId
  });
  const renderInvestButton = () => {
    return isInvestEnable ? (
      <Link
        to={{
          pathname: traderDepositUrl,
          state: { from: traderUrl }
        }}
        className="btn btn-outline-primary"
      >
        Buy tokens
      </Link>
    ) : (
      <div>Can not invest</div>
    );
  };
  const renderWithdrawButton = () => {
    return isWithdrawEnable ? (
      <Link
        to={{
          pathname: traderWithdrawUrl,
          state: { from: traderUrl }
        }}
        className="btn btn-outline-secondary mt-4"
      >
        Sell tokens
      </Link>
    ) : (
      <div>Can not withdraw</div>
    );
  };
  const renderCloseProgramButton = () => {
    return (
      <button className="btn btn-outline-warning" onClick={closeTraderProgram}>
        Close Program
      </button>
    );
  };

  if (isOwnProgram) {
    return null;
  }
  return (
    <div>
      {renderInvestButton()}
      {renderWithdrawButton()}
      {renderCloseProgramButton()}
    </div>
  );
};

export default TSButtons;
