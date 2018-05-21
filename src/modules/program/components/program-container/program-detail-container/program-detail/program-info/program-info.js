import React from "react";

import TraderAvatar from "../../../../../../../components/program-avatar/program-avatar";

import "./program-info.css";

const ProgramInfo = ({
  program,
  isAuthenticated,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage
}) => {
  return (
    <div className="program-info">
      <div className="program-info__avatar">
        <TraderAvatar url={program.logo} />
      </div>
      <div className="program-info__name">
        <div className="program-info__title">{program.title}</div>
        <div className="program-info__description">{program.description}</div>
      </div>
    </div>
  );
};

export default ProgramInfo;
