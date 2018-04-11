import React from "react";

import TraderAvatar from "../../../../../../../components/trader-avatar/trader-avatar";
import ProgramButtons from "./program-buttons/program-buttons";

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
        <TraderAvatar imgUrl={program.logo} level={program.level} />
      </div>
      <div className="program-info__name">
        <div className="program-info__title">{program.title}</div>
        <div className="program-info__description">{program.description}</div>
      </div>
      {isAuthenticated &&
        program.isOwnProgram && (
          <div className="program-info__buttons">
            <ProgramButtons
              programId={program.id}
              isInvestEnable={program.isInvestEnable}
              isWithdrawEnable={program.isWithdrawEnable}
              canCloseProgram={program.canCloseProgram}
              openInvestPopup={openInvestPopup}
              openWithdrawPopup={openWithdrawPopup}
              openCloseProgramPopup={openCloseProgramPopup}
              openEditProgramPage={openEditProgramPage}
            />
          </div>
        )}
    </div>
  );
};

export default ProgramInfo;
