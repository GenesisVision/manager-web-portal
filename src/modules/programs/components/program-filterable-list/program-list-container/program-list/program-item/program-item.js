import classnames from "classnames";
import React from "react";

import PIChart from "../../../../../../../components/program-item/pi-chart/pi-chart";
import PIInfo from "../../../../../../../components/program-item/pi-info/pi-info";
import PIStatistic from "./pi-statistic/pi-statistic";
import PTIButtons from "../../../../../../../components/program-item/pi-buttons/pi-buttons";

import ProgramItem from '../../../../../../../components/program-item.1/program-item';

import "./program-item.css";

const Program = (props) => {
  return (
    <ProgramItem statistic={PIStatistic} {...props}/>
    // <div
    //   className={classnames("program-item", {
    //     "program-item--inactive": !program.isEnabled
    //   })}
    // >
    //   <PIInfo order={program.order} program={program} />
    //   <PIChart data={program.equityChart} />
    //   <PIStatistic program={program} />
    //   <PTIButtons
    //     programId={program.id}
    //     isInvestEnable={program.isInvestEnable}
    //     isAuthenticated={isAuthenticated}
    //     openInvestPopup={openInvestPopup}
    //   />
    // </div>
  );
};

export default Program;
