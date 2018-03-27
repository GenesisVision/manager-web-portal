import { Link } from "react-router-dom";
import React from "react";

import replaceParams from "../../../../../../../../utils/replace-params";

import "./trader-buttons.css";
import { PROGRAM_SETTINGS_EDIT_ROUTE } from "../../../../../../../program-settings/program-settings.constants";

const TraderButtons = ({
  traderId,
  isInvestEnable,
  isWithdrawEnable,
  openInvestPopup,
  openWithdrawPopup
}) => {
  const programRoute = replaceParams(PROGRAM_SETTINGS_EDIT_ROUTE, {
    ":traderId": traderId
  });
  return (
    <div className="trader-buttons">
      <Link className="trader-button gv-btn gv-btn-secondary" to={programRoute}>
        Edit
      </Link>
      <button
        className="trader-button gv-btn gv-btn-secondary"
        onClick={openWithdrawPopup}
        disabled={!isWithdrawEnable}
      >
        Withdraw
      </button>
      <button
        className="trader-button gv-btn gv-btn-primary"
        onClick={openInvestPopup(traderId)}
        disabled={!isInvestEnable}
      >
        Invest
      </button>
    </div>
  );
};

export default TraderButtons;
