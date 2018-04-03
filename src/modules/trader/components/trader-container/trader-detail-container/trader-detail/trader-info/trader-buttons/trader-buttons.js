import React from "react";

import "./trader-buttons.css";

const TraderButtons = ({
  traderId,
  isInvestEnable,
  isWithdrawEnable,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup
}) => {
  return (
    <div className="trader-buttons">
      <button
        className="trader-button gv-btn gv-btn-primary"
        onClick={openInvestPopup(traderId)}
        disabled={!isInvestEnable}
      >
        Invest
      </button>
      <button
        className="trader-button gv-btn gv-btn-secondary"
        onClick={openWithdrawPopup}
        disabled={!isWithdrawEnable}
      >
        Withdraw
      </button>
      <button
        className="trader-button gv-btn gv-btn-secondary"
        onClick={openCloseProgramPopup(traderId)}
      >
        Close Program
      </button>
    </div>
  );
};

export default TraderButtons;
