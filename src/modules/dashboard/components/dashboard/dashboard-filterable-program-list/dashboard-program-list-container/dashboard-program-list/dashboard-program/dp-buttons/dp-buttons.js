import { translate } from "react-i18next";
import React from "react";

import "./dp-buttons.css";

const DPButtons = ({
  t,
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
        {t("program-actions.invest")}
      </button>
      <button
        className="dp-button gv-btn gv-btn-secondary"
        onClick={openWithdrawPopup}
        disabled={!isWithdrawEnable}
      >
        {t("program-actions.withdraw")}
      </button>
      <button
        className="dp-button gv-btn gv-btn-secondary"
        onClick={openEditProgramPage(programId)}
        disabled={!canEditProgram}
      >
        {t("program-actions.edit-program")}
      </button>
    </div>
  );
};

export default translate()(DPButtons);
