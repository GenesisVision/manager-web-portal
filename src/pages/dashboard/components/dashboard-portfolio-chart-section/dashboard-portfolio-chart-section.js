import "./dashboard-portfolio-chart-section.scss";

import Surface from "components/surface/surface";
import React, { Component } from "react";

import DashboardChartAssetsContainer from "./dashboard-chart-assets/dashboard-chart-assets-container";
import DashboardPortfolioChartContainer from "./dashboard-chart/dashboard-portfolio-chart-container";

class DashboardPortfolioChartSection extends Component {
  render() {
    return (
      <Surface className="dashboard-portfolio-chart-section">
        <div className="dashboard-portfolio-chart-section__heading">Chart</div>
        <DashboardChartAssetsContainer />
        <DashboardPortfolioChartContainer />
      </Surface>
    );
  }
}

export default DashboardPortfolioChartSection;
