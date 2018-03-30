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
    <div className="dp-buttons">
      <button
        className="dp-button gv-btn gv-btn-primary"
        onClick={openInvestPopup(traderId)}
        disabled={!isInvestEnable}
      >
        Invest
      </button>
      <button
        className="dp-button gv-btn gv-btn-secondary"
        onClick={openWithdrawPopup}
        disabled={!isWithdrawEnable}
      >
        Withdraw
      </button>
    </div>
  );
};

export default DPButtons;
