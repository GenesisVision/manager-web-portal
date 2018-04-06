import React from "react";

import "./dp-buttons.css";

const DPButtons = ({
  traderId,
  isInvestEnable,
  isWithdrawEnable,
  canCloseProgram,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage
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
      <button
        className="dp-button gv-btn gv-btn-secondary"
        onClick={openEditProgramPage(traderId)}
        disabled={!canCloseProgram}
      >
        Edit Program
      </button>
      <button
        className="dp-button gv-btn gv-btn-secondary"
        onClick={openCloseProgramPopup(traderId)}
        disabled={!canCloseProgram}
      >
        Close Program
      </button>
    </div>
  );
};

export default DPButtons;
