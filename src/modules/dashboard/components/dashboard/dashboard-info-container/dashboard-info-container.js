import { connect } from "react-redux";
import React, { PureComponent } from "react";

import dashboardActions from "../../../actions/dashboard-actions";
import DashboardCharts from "./dashboard-charts/dashboard-charts";
import DashboardDescription from "./dashboard-description/dashboard-description";
import DashboardStatistic from "./dashboard-statistic/dashboard-statistic";
import FormError from "../../../../../shared/components/form/form-error/form-error";

class DashboardContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchDashboardInfo();
  }
  render() {
    const { isPending, dashboard, errorMessage } = this.props;
    if (isPending || dashboard === undefined) {
      return null;
    }

    const hasPrograms = dashboard.programBalances.length > 0;

    return (
      <div>
        <DashboardDescription />
        {hasPrograms && <DashboardStatistic dashboard={dashboard} />}
        {hasPrograms && (
          <DashboardCharts
            fundChart={dashboard.fundChart}
            profitChart={dashboard.profitChart}
          />
        )}
        {hasPrograms && <FormError error={errorMessage} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.dashboardData.info;

  let dashboard;
  if (data) {
    dashboard = data;
  }
  return { isPending, dashboard, errorMessage };
};

const mapDispatchToProps = dispatch => ({
  fetchDashboardInfo: () => {
    dispatch(dashboardActions.fetchDashboardInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
