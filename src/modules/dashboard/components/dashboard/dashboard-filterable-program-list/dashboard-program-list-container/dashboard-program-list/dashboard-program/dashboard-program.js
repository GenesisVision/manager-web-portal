import { Link } from "react-router-dom";
import React from "react";

import DPButtons from "./dp-buttons/dp-buttons";
import DPStatistic from "./dp-statistic/dp-statistic";
import replaceParams from "../../../../../../../../utils/replace-params";
import TraderAvatar from "../../../../../../../../components/program-avatar/program-avatar";

import "./dashboard-program.css";
import { PROGRAM_ROUTE } from "../../../../../../../program/program.constants";

const DashboardProgram = ({
  program,
  openInvestPopup,
  openWithdrawPopup,
  openCloseProgramPopup,
  openEditProgramPage
}) => {
  const handleOpenWithdrawPopup = () => {
    return openWithdrawPopup(program);
  };
  const traderRoute = replaceParams(PROGRAM_ROUTE, {
    ":programId": program.id
  });
  return (
    <div className="dashboard-program-card card">
      <Link to={traderRoute}>
        <TraderAvatar imgUrl={program.logo} level={program.level} />
      </Link>
      <Link className="dashboard-program-card__title" to={traderRoute}>
        {program.title}
      </Link>
      <div className="dashboard-program-card__description">
        {program.description}
      </div>
      <DPButtons
        programId={program.id}
        isInvestEnable={program.isInvestEnable}
        isWithdrawEnable={program.isWithdrawEnable}
        canCloseProgram={program.canCloseProgram}
        openInvestPopup={openInvestPopup}
        openWithdrawPopup={handleOpenWithdrawPopup}
        openCloseProgramPopup={openCloseProgramPopup}
        openEditProgramPage={openEditProgramPage}
      />
      <DPStatistic program={program} />
    </div>
  );
};

export default DashboardProgram;
