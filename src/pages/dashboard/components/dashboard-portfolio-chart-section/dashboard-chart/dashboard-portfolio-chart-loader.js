import "../dashboard-portfolio-chart-section.scss";

import React, { Component, Fragment } from "react";
import ContentLoader from "react-content-loader";

export const ChartLoader = () => (
  <div className="chart-loader__container">
    <div className="chart-loader__title">
      <ContentLoader
        height={25}
        width={270}
        speed={2}
        primaryColor="#8d9397"
        secondaryColor="#5c636a"
      >
        <rect x="3" y="10" rx="4" ry="4" width="20" height="10" />
        <rect x="33" y="10" rx="4" ry="4" width="20" height="10" />
        <rect x="63" y="10" rx="4" ry="4" width="20" height="10" />
        <rect x="93" y="10" rx="4" ry="4" width="20" height="10" />
      </ContentLoader>
    </div>
    <div className="chart-loader__actions">
      <ContentLoader
        height={25}
        width={270}
        speed={2}
        primaryColor="#8d9397"
        secondaryColor="#5c636a"
      >
        <rect x="3" y="10" rx="4" ry="4" width="140" height="10" />
        <rect x="155" y="10" rx="4" ry="4" width="100" height="10" />
      </ContentLoader>
    </div>
    <div className="chart-loader__chart">
      <ContentLoader
        width="1013"
        height="350"
        speed={2}
        primaryColor="#8d9397"
        primaryOpacity={0}
        secondaryColor="white"
        secondaryOpacity={0.1}
      >
        <path d="M-139,351.429319 C-46.352657,351.429319 -46.352657,351.429319 46.294686,351.429319 C138.942029,351.429319 138.942029,351.429319 231.589372,351.429319 C324.236715,351.429319 324.236715,351.429319 416.884058,351.429319 C509.531401,351.429319 509.531401,351.429319 602.178744,351.429319 C694.826087,351.429319 694.826087,351.429319 787.47343,351.429319 C880.120773,351.429319 880.120773,351.429319 972.768116,351.429319 C1065.41546,351.429319 1065.41546,351.429319 1158.0628,351.429319 L1158.0628,309.257801 C1065.41546,309.257801 1065.41546,178.057522 972.768116,178.057522 C880.120773,178.057522 880.120773,0 787.47343,0 C694.826087,0 694.826087,131.200279 602.178744,131.200279 C509.531401,131.200279 509.531401,135.886003 416.884058,135.886003 C324.236715,135.886003 324.236715,98.4002094 231.589372,98.4002094 C138.942029,98.4002094 138.942029,281.143455 46.294686,281.143455 C-46.352657,281.143455 -46.352657,342.057871 -139,342.057871 L-139,351.429319 Z" />
      </ContentLoader>
    </div>
  </div>
);

class DashboardPortfolioChartLoader extends Component {
  render() {
    return (
      <div className="chart-loader">
        <div className="chart-loader__title">
          <ContentLoader
            height={25}
            width={270}
            speed={2}
            primaryColor="#8d9397"
            secondaryColor="#5c636a"
          >
            <rect x="3" y="10" rx="4" ry="4" width="140" height="10" />
            <rect x="155" y="10" rx="4" ry="4" width="100" height="10" />
          </ContentLoader>
        </div>
        <div className="chart-loader__actions">
          <ContentLoader
            height={60}
            width={180}
            speed={2}
            primaryColor="#8d9397"
            secondaryColor="#5c636a"
          >
            <rect x="43" y="10" rx="4" ry="4" width="100" height="10" />
            <circle cx="165" cy="15" r="10" />
            <rect x="3" y="40" rx="4" ry="4" width="140" height="10" />
            <circle cx="165" cy="45" r="10" />
          </ContentLoader>
        </div>
        <ChartLoader />
      </div>
    );
  }
}
export default DashboardPortfolioChartLoader;
