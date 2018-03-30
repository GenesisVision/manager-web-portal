import { connect } from "react-redux";
import React, { PureComponent } from "react";
import dashboardActions from "../../../../actions/dashboard-actions";
import DashboardProgramListTabs from "./dashboard-program-list-tabs/dashboard-program-list-tabs";

class DashboardProgramListTabsContainer extends PureComponent {
  render() {
    const { type, handleFilterChange } = this.props;

    const onFilterChange = type => () => {
      handleFilterChange({ type });
    };
    return (
      <DashboardProgramListTabs type={type} onFilterChange={onFilterChange} />
    );
  }
}
const mapStateToProps = state => {
  const { type } = state.dashboardData.programs.filtering;
  return { type };
};

const mapDispatchToProps = dispatch => ({
  handleFilterChange: filter => {
    dispatch(dashboardActions.updateFiltering(filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DashboardProgramListTabsContainer
);
