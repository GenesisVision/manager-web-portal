import { translate } from "react-i18next";
import classnames from "classnames";
import moment from "moment";
import React from "react";

import Progress from "../../shared/components/progress/progress";

import "./days-left-widget.css";

const DaysLeftWidget = ({ t, start, end, duration, className }) => {
  const dateNow = moment();
  const startDate = moment(start);

  const periodDuration = duration
    ? duration
    : startDate.diff(moment(end), "days");

  const daysPassed = dateNow.diff(startDate, "days");

  const daysLeft = periodDuration - daysPassed;

  return (
    <div
      className={classnames("days-left-widget", { [className]: !!className })}
    >
      <div className="days-left-widget__text">
        {daysLeft} {t("days-left-widget.text", { count: daysLeft })}
      </div>
      <div className="days-left-widget__progress">
        <Progress value={daysPassed} max={periodDuration} />
      </div>
    </div>
  );
};

export default translate()(DaysLeftWidget);
