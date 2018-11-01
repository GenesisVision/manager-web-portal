import "./dashboard-portfolio-events.scss";

import { GVButton } from "gv-react-components";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

import DashboardPortfolioEvent, {
  DashboardPortfolioEventShape
} from "./dashboard-portfolio-event/dashboard-portfolio-event";

const DashboardPortfolioEvents = ({ t, events, fullEventsUrl }) => (
  <Fragment>
    <div className="dashboard-portfolio-events__scroll-container">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHeight
        autoHeightMax="541px"
      >
        <div className="dashboard-portfolio-events__list">
          {events.map((event, idx) => (
            <DashboardPortfolioEvent event={event} key={idx} />
          ))}
        </div>
      </Scrollbars>
    </div>

    <Link to={fullEventsUrl} className="dashboard-portfolio-events__see-all">
      <GVButton variant="text" color="secondary">
        {t("dashboard.portfolio-events.see-all-button")} &#8250;
      </GVButton>
    </Link>
  </Fragment>
);

DashboardPortfolioEvents.propTypes = {
  events: PropTypes.arrayOf(DashboardPortfolioEventShape).isRequired,
  fullEventsUrl: PropTypes.string.isRequired
};

export default translate()(DashboardPortfolioEvents);
