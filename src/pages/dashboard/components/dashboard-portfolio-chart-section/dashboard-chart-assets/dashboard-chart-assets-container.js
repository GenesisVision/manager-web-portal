import "./dashboard-chart-assets.scss";

import { ActionsCircleIcon } from "components/icon/actions-circle-icon";
import Popover from "components/popover/popover";
import React, { PureComponent } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import { getAssetChart } from "../../../services/dashboard.service";
import DashboardChartAsset from "./dashboard-chart-asset";

class DashboardChartAssetsContainer extends PureComponent {
  state = {
    anchor: null
  };

  handleOpenDropdown = event => this.setState({ anchor: event.currentTarget });
  handleCloseDropdown = () => this.setState({ anchor: null });
  handleSelectAsset = (id, title, type) => {
    this.props.service.getAssetChart(id, title, type);
    this.handleCloseDropdown();
  };
  renderActionsIcon = () => {
    return (
      <ActionsCircleIcon
        className="dashboard-chart-assets__icon"
        primary={this.state.anchor !== null}
        onClick={this.handleOpenDropdown}
      />
    );
  };

  render() {
    const { programsData, fundsData } = this.props;
    if (!programsData || !fundsData) return null;
    const programs = programsData.programs;
    const funds = fundsData.funds;
    const hasPrograms = programs.length > 0;
    const hasFunds = funds.length > 0;
    if (!hasPrograms && !hasFunds) return null;
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
            {hasPrograms && (
              <div className="dashboard-chart-assets-popover__header">
                Programs
              </div>
            )}
            {programs.map(x => (
              <DashboardChartAsset
                key={x.id}
                chartAsset={x}
                type="Program"
                selectAsset={this.handleSelectAsset}
              />
            ))}
            {hasFunds && (
              <div className="dashboard-chart-assets-popover__header">
                Funds
              </div>
            )}
            {funds.map(x => (
              <DashboardChartAsset
                key={x.id}
                chartAsset={x}
                type="Fund"
                selectAsset={this.handleSelectAsset}
              />
            ))}
          </div>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { programs, funds } = state.dashboard;
  return {
    programsData: programs.itemsData.data,
    fundsData: funds.itemsData.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    service: bindActionCreators({ getAssetChart }, dispatch)
  };
};

export default compose(
  translate(),
  connect(mapStateToProps, mapDispatchToProps)
)(DashboardChartAssetsContainer);
