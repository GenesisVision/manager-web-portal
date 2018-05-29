import React from "react";
import PIStatistic from "./pi-statistic/pi-statistic";
import ProgramItem from "../../../../../../../components/program-item/program-item";

import "./program-item.css";

const Program = props => {
  return <ProgramItem statistic={PIStatistic} {...props} />;
};

export default Program;
