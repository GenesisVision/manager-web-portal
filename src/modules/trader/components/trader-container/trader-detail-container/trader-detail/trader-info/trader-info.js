import React from "react";

import TraderAvatar from "../../../../../../../components/trader-avatar/trader-avatar";
import TraderButtons from "./trader-buttons/trader-buttons";

import "./trader-info.css";

const TraderInfo = ({
  trader,
  isAuthenticated,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage
}) => {
  return (
    <div className="trader-info">
      <div className="trader-info__avatar">
        <TraderAvatar imgUrl={trader.logo} level={trader.level} />
      </div>
      <div className="trader-info__name">
        <div className="trader-info__title">{trader.title}</div>
        <div className="trader-info__description">{trader.description}</div>
      </div>
      {isAuthenticated &&
        trader.isOwnProgram && (
          <div className="trader-info__buttons">
            <TraderButtons
              traderId={trader.id}
              isInvestEnable={trader.isInvestEnable}
              isWithdrawEnable={trader.isWithdrawEnable}
              canCloseProgram={trader.canCloseProgram}
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

export default TraderInfo;
