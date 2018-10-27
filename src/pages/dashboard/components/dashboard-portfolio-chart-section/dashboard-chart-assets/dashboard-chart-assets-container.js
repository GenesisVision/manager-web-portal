import "./dashboard-chart-assets.scss";

import { ActionsCircleIcon } from "components/icon/actions-circle-icon";
import Popover from "components/popover/popover";
import React, { PureComponent } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "redux";

import DashboardChartAsset from "./dashboard-chart-asset";

class DashboardChartAssetsContainer extends PureComponent {
  state = {
    anchor: null
  };

  componentDidUpdate() {
    const { chartData } = this.props;
    if (!chartData || !chartData.isPending) {
    }
  }

  handleOpenDropdown = event => this.setState({ anchor: event.currentTarget });
  handleCloseDropdown = () => this.setState({ anchor: null });

  renderActionsIcon = () => {
    if (this.props.programsData.programs.length === 0) return null;
    return (
      <ActionsCircleIcon
        className="dashboard-chart-assets__icon"
        primary={this.state.anchor !== null}
        onClick={this.handleOpenDropdown}
      />
    );
  };

  render() {
    const { programsData, fundsData, chartData } = this.props;
    if (!programsData) return null;
    const programs = programsData.programs;
    const funds = []; //fundsData.funds;

    return (
      <div className="dashboard-chart-assets">
        <div className="dashboard-chart-assets__title">
          My Assets {this.renderActionsIcon()}
        </div>
        <Popover
          horizontal="right"
          vertical="bottom"
          anchorEl={this.state.anchor}
          noPadding
          onClose={this.handleCloseDropdown}
        >
          <div className="dashboard-chart-assets-popover">
            {programs.map(x => (
              <DashboardChartAsset key={x.id} chartAsset={x} />
            ))}
          </div>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { programs, funds } = state.dashboard;
  return { programsData: programs.itemsData.data, funds: funds.itemsData.data };
};

export default compose(translate(), connect(mapStateToProps))(
  DashboardChartAssetsContainer
);
