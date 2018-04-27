import React from "react";
import { translate } from "react-i18next";

import "./program-buttons.css";

const TraderButtons = ({
  t,
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
        {t("program-actions.invest")}
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openWithdrawPopup}
        disabled={!isWithdrawEnable}
      >
        {t("program-actions.withdraw")}
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openEditProgramPage(programId)}
        disabled={!canCloseProgram}
      >
        {t("program-actions.edit-program")}
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openClosePeriodPopup(programId)}
        disabled={!canClosePeriod}
      >
        {t("program-actions.close-period")}
      </button>
      <button
        className="program-button gv-btn gv-btn-secondary"
        onClick={openCloseProgramPopup(programId)}
        disabled={!canCloseProgram}
      >
        {t("program-actions.close-program")}
      </button>
    </div>
  );
};

export default translate()(TraderButtons);
