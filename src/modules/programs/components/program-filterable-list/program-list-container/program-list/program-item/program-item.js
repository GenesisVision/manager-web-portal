import classnames from "classnames";
import React from "react";

import PIChart from "../../../../../../../components/program-item/pi-chart/pi-chart";
import PIInfo from "../../../../../../../components/program-item/pi-info/pi-info";
import PIStatistic from "./pi-statistic/pi-statistic";
import PTIButtons from "../../../../../../../components/program-item/pi-buttons/pi-buttons";

import ProgramItem from "../../../../../../../components/program-item/program-item";

import "./program-item.css";

const Program = props => {
  return <ProgramItem statistic={PIStatistic} {...props} />;
};

export default Program;
