import React from "react";

import "./dp-buttons.css";

const DPButtons = ({
  traderId,
  isInvestEnable,
  isWithdrawEnable,
  openInvestPopup,
  openWithdrawPopup
}) => {
  return (
    <div className="trader-buttons">
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

export default DPButtons;
