import React from "react";

import "./program-buttons.css";

const TraderButtons = ({
  programId,
  isInvestEnable,
  isWithdrawEnable,
  canCloseProgram,
  canClosePeriod,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage,
  openClosePeriodPopup
}) => {
  return (
    <div className="program-buttons">
      <button
        className="program-button gv-btn gv-btn-primary"
        onClick={openInvestPopup(programId)}
        disabled={!isInvestEnable}
      >
        Invest
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openWithdrawPopup}
        disabled={!isWithdrawEnable}
      >
        Withdraw
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openEditProgramPage(programId)}
        disabled={!canCloseProgram}
      >
        Edit Program
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openClosePeriodPopup(programId)}
        disabled={!canClosePeriod}
      >
        Close Period
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openCloseProgramPopup(programId)}
        disabled={!canCloseProgram}
      >
        Close Program
      </button>
    </div>
  );
};

export default TraderButtons;
