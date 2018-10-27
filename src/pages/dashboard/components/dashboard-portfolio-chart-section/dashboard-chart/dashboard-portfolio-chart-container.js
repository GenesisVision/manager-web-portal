import ChartPeriod from "components/chart/chart-period/chart-period";
import { DEFAULT_PERIOD } from "components/chart/chart-period/chart-period.helpers";
import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAssetChart } from "../../../services/dashboard.service";

class DashboardPortfolioChartContainer extends PureComponent {
  state = {
    period: DEFAULT_PERIOD
  };

  getAssets = () => {
    const { programsData } = this.props;
    if (programsData) {
      const programs = programsData.programs;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const assets = this.getAssets();
    // if (prevProps.currency !== this.props.currency) {
    //   this.props.service.getPortfolioChart(
    //     this.state.period.start,
    //     this.state.period.end
    //   );
    // }
  }

  handleChangePeriod = period => {
    this.props.service.getPortfolioChart(period.start, period.end);
    this.setState({ period });
  };

  render() {
    const { data, currency } = this.props;
    const { period } = this.state;
    if (data === undefined) return null;
    return (
      <Fragment>
        {/* <DashboardPortfolioChartStat
          currency={currency}
          value={data.value}
          valueCurrency={data.valueCurrency}
          changePercent={data.changePercent}
          changeValue={data.changeValue}
          changeValueCurrency={data.changeValueCurrency}
        /> */}
        <ChartPeriod period={period} onChange={this.handleChangePeriod} />
        {/* <div className="dashboard-portfolio-chart-section__chart">
          <DashboardPortfolioChart
            assets={composeAssetsChartData(data.investedProgramsInfo)}
            balance={composeBalanceChartData(data.balanceChart)}
          />
        </div> */}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { data, isPending } = state.dashboard.assetChart;
  const { currency } = state.accountSettings;
  const { programs, funds } = state.dashboard;
  return {
    data,
    isPending,
    currency,
    programsData: programs.itemsData.data,
    funds: funds.itemsData.data
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
