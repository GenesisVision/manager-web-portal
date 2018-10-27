import AssetAvatar from "components/avatar/asset-avatar/asset-avatar";
import ConfirmPopup from "components/confirm-popup/confirm-popup";
import Profitability from "components/profitability/profitability";
import { GVButton } from "gv-react-components";
import moment from "moment";
import React, { Component } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";

import PortfolioEventLogo from "../../dashboard-portfolio-events/dashboard-portfolio-event-logo/dashboard-portfolio-event-logo";
import { composeEventLogoType } from "../../dashboard-portfolio-events/dashboard-portfolio-event-logo/dashboard-portfolio-event-logo.helper";

class DashboardChartAsset extends Component {
  render() {
    const { t, chartAsset } = this.props;
    return (
      <div className="dashboard-chart-assets-popover__chart-asset">
        <div className="dashboard-chart-assets-popover__logo">
          <AssetAvatar
            url={chartAsset.logo}
            alt={chartAsset.title}
            color={chartAsset.color}
            level={chartAsset.level}
          />
        </div>
        <div className="dashboard-chart-assets-popover__info">
          <div className="dashboard-chart-assets-popover__title">
            {chartAsset.title}
          </div>
        </div>
      </div>
    );
  }
}

export default translate()(DashboardChartAsset);
