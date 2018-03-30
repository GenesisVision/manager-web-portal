import React from "react";

import DPButtons from "./dp-buttons/dp-buttons";
import DPStatistic from "./dp-statistic/dp-statistic";
import TraderAvatar from "../../../../../../../../components/trader-avatar/trader-avatar";

import "./dashboard-program.css";

const DashboardProgram = ({ program, openInvestPopup, openWithdrawPopup }) => {
  const handleOpenWithdrawPopup = () => {
    return openWithdrawPopup(program);
  };
  return (
    <div className="dashboard-program-card card">
      <TraderAvatar imgUrl={program.logo} level={program.level} />
      <div className="dashboard-program-card__title">{program.title}</div>
      <div className="dashboard-program-card__description">
        {program.description}
      </div>
      <DPButtons
        traderId={program.id}
        isInvestEnable={program.isInvestEnable}
        isWithdrawEnable={program.isWithdrawEnable}
        openInvestPopup={openInvestPopup}
        openWithdrawPopup={handleOpenWithdrawPopup}
      />
      <DPStatistic program={program} />
    </div>
  );
};

export default DashboardProgram;
