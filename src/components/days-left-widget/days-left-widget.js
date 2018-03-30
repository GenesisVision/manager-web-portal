import moment from "moment";
import React from "react";
import classnames from "classnames";
import Progress from "../../shared/components/progress/progress";

import "./days-left-widget.css";

const DaysLeftWidget = ({ start, end, duration, className }) => {
  const dateNow = moment();
  const startDate = moment(start);

  const periodDuration = duration
    ? duration
    : startDate.diff(moment(end), "days");

  const daysPassed = () => {
    return dateNow.diff(startDate, "days");
  };
  const daysLeft = () => {
    return periodDuration - daysPassed();
  };

  return (
    <div
      className={classnames("days-left-widget", { [className]: !!className })}
    >
      <div className="days-left-widget__text">{daysLeft()} Days left</div>
      <div className="days-left-widget__progress">
        <Progress value={daysPassed()} max={periodDuration} />
      </div>
    </div>
  );
};

export default DaysLeftWidget;
