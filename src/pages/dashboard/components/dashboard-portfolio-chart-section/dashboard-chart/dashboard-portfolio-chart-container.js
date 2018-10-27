import ChartPeriod from "components/chart/chart-period/chart-period";
import { DEFAULT_PERIOD } from "components/chart/chart-period/chart-period.helpers";
import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProgramProfitChart from "../../../../programs/program-details/components/program-details-statistic-section/program-details-chart-section/program-profit-chart-section/program-profit-chart";
import { getAssetChart } from "../../../services/dashboard.service";

class DashboardPortfolioChartContainer extends PureComponent {
  state = {
    period: DEFAULT_PERIOD
  };

  getAssets = () => {
    const { programsData, fundsData } = this.props;

    if (programsData && fundsData) {
      return { programs: programsData.programs, funds: fundsData.funds };
    }
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    const assets = this.getAssets();

    if (!this.props.assetChart && assets !== null) {
      this.props.service.getAssetChart(
        assets.programs[0].id,
        assets.programs[0].title,
        "Program",
        this.state.period
      );
    }
  }

  handleChangePeriod = period => {
    this.props.service.getAssetChart(
      this.props.assetChart.id,
      this.props.assetChart.title,
      this.props.assetChart.type,
      period
    );
    this.setState({ period });
  };

  render() {
    const { assetChart, currency } = this.props;
    const { period } = this.state;
    if (!assetChart || assetChart.isPending) return null;
    return (
      <Fragment>
        <h2>{assetChart.title}</h2>
        <ChartPeriod period={period} onChange={this.handleChangePeriod} />
        <div className="dashboard-portfolio-chart-section__chart">
          <ProgramProfitChart
            equityChart={assetChart.equityChart}
            pnlChart={assetChart.pnLChart}
            currency={currency}
            period={period}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { assetChart } = state.dashboard;
  const { currency } = state.accountSettings;
  const { programs, funds } = state.dashboard;
  return {
    assetChart,
    currency,
    programsData: programs.itemsData.data,
    fundsData: funds.itemsData.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    service: bindActionCreators({ getAssetChart }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  DashboardPortfolioChartContainer
);
