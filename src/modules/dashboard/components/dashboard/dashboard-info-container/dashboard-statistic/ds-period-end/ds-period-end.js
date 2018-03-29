import React from "react";

import DaysLeftWidget from "../../../../../../../components/days-left-widget/days-left-widget";

import CalendarImage from "./calendar-icon.svg";

const DSPeriodEnd = ({ periodEnd }) => {
  return (
    <div className="dashboard-card__body card-body">
      <div className="dashboard-card__header">End of next period</div>
      <div className="dashboard-card__image">
        <img src={CalendarImage} alt="Calendar" />
      </div>
      <div className="dashboard-card__value">
        <div className="metric">
          <div className="metric__value">
            <DaysLeftWidget
              start={periodEnd.startOfPeriod}
              duration={periodEnd.duration}
            />
          </div>
          <div className="metric__description">{periodEnd.title}</div>
        </div>
      </div>
    </div>
  );
};

export default DSPeriodEnd;
