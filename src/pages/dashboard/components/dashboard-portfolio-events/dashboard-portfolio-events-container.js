import Surface from "components/surface/surface";
import React, { Component } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";

import { DASHBOARD_EVENTS_ROUTE } from "../../dashboard.routes";
import { getPortfolioEvents } from "../../services/dashboard.service";
import DashboardPortfolioEvents from "./dashboard-portfolio-events";
import { EvenLogoIcon } from "./dashboard-portfolio-event-logo/dashboard-portfolio-event-logo";
import { EventLogoType } from "./dashboard-portfolio-event-logo/dashboard-portfolio-event-logo.helper";

class DashboardPortfolioEventsContainer extends Component {
  componentDidMount() {
    const { service } = this.props;
    service.getPortfolioEvents();
  }

  emptyEvents = () => {
    const { t } = this.props;
    return (
      <div className="dashboard__empty-events">
        <div className="dashboard__empty-events-text">
          {t("dashboard.portfolio-events.empty-events.text")}
        </div>
        <div className="dashboard__empty-events-item dashboard__empty-events-item--secondary">
          <EvenLogoIcon type={EventLogoType.ended} />
          <div className="dashboard__empty-events-item-label">
            {t("dashboard.portfolio-events.empty-events.finished")}
          </div>
        </div>
        <div className="dashboard__empty-events-item">
          <EvenLogoIcon type={EventLogoType.ended} />
          <div className="dashboard__empty-events-item-label">
            {t("dashboard.portfolio-events.empty-events.started")}
          </div>
        </div>
        <div className="dashboard__empty-events-item">
          <EvenLogoIcon type={EventLogoType.loss} />
          <div className="dashboard__empty-events-item-label">
            {t("dashboard.portfolio-events.empty-events.investor-left")}
          </div>
        </div>
        <div className="dashboard__empty-events-item">
          <EvenLogoIcon type={EventLogoType.profit} />
          <div className="dashboard__empty-events-item-label">
            {t("dashboard.portfolio-events.empty-events.new-investor")}
          </div>
        </div>
        <div className="dashboard__empty-events-item">
          <EvenLogoIcon type={EventLogoType.cancelled} />
          <div className="dashboard__empty-events-item-label">
            {t("dashboard.portfolio-events.empty-events.interrupted")}
          </div>
        </div>
      </div>
    );
  };

  renderEvents = () => {
    const { isPending, data } = this.props;
    if (isPending || data === undefined) return null;
    return (
      (data.events && (
        <DashboardPortfolioEvents
          events={data.events}
          fullEventsUrl={DASHBOARD_EVENTS_ROUTE}
        />
      )) ||
      this.emptyEvents()
    );
  };
  render() {
    const { t } = this.props;

    return (
      <Surface className="dashboard-portfolio-events">
        <div className="dashboard-portfolio-events__title">
          {t("dashboard.portfolio-events.title")}
        </div>
        {this.renderEvents()}
      </Surface>
    );
  }
}

const mapStateToProps = state => {
  const { isPending, data } = state.dashboard.eventsData;
  return { isPending, data };
};

const mapDispatchToProps = dispatch => ({
  service: bindActionCreators({ getPortfolioEvents }, dispatch)
});

export default compose(
  translate(),
  connect(mapStateToProps, mapDispatchToProps)
)(DashboardPortfolioEventsContainer);
