import React from "react";

import "./dp-buttons.css";

const DPButtons = ({
  programId,
  isInvestEnable,
  isWithdrawEnable,
  canEditProgram,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage
}) => {
  return (
    <div className="dp-buttons">
      <button
        className="dp-button gv-btn gv-btn-primary"
        onClick={openInvestPopup(programId)}
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
        onClick={openEditProgramPage(programId)}
        disabled={!canEditProgram}
      >
        Edit Program
      </button>
    </div>
  );
};

export default DPButtons;
