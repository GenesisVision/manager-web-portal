import { Link } from "react-router-dom";
import React from "react";

import DaysLeftWidget from "../../days-left-widget/days-left-widget";
import replaceParams from "../../../utils/replace-params";
import TokensWidget from "../../tokens-widget/tokens-widget";
import TraderAvatar from "../../program-avatar/program-avatar";

import "./pi-info.css";
import { PROGRAM_ROUTE } from "../../../modules/program/program.constants";

const PIInfo = ({ idx, trader }) => {
  const renderDaysLeft = () => {
    if (trader.isEnabled) {
      return (
        <DaysLeftWidget
          start={trader.startOfPeriod}
          duration={trader.periodDuration}
        />
      );
    }

    return <div>The program is not enabled</div>;
  };

  const renderTokens = () => {
    if (trader.isEnabled) {
      return (
        <TokensWidget
          invested={trader.freeTokens.investorsTokens}
          requested={trader.freeTokens.requestsTokens}
          total={trader.freeTokens.total}
        />
      );
    }

    return null;
  };

  const traderRoute = replaceParams(PROGRAM_ROUTE, {
    ":programId": trader.id
  });
  return (
    <div className="pi-info">
      <div className="pi-info__order">{idx}</div>
      <Link className="pi-info__image" to={traderRoute}>
        <TraderAvatar imgUrl={trader.logo} level={trader.level} />
      </Link>
      <div className="pi-info__name pi-name">
        <Link className="pi-name__title" to={traderRoute}>
          {trader.title}
        </Link>
        <div className="pi-name__description">{trader.description}</div>
        <div className="pi-name__eop">{renderDaysLeft()}</div>
        <div className="pi-name__eop">{renderTokens()}</div>
      </div>
    </div>
  );
};

export default PIInfo;
