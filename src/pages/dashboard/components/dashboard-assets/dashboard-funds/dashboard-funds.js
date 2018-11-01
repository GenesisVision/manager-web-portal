import "./dashboard-funds.scss";

import AssetAvatar from "components/avatar/asset-avatar/asset-avatar";
import FundAssetContainer from "components/fund-asset/fund-asset-container";
import Profitability from "components/profitability/profitability";
import ProgramSimpleChart from "components/program-simple-chart/program-simple-chart";
import { GVButton } from "gv-react-components";
import { TableCell, TableRow } from "modules/table/components";
import DateRangeFilter from "modules/table/components/filtering/date-range-filter/date-range-filter";
import { DATE_RANGE_FILTER_NAME } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import TableContainer from "modules/table/components/table-container";
import React, { Component, Fragment } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import replaceParams from "../../../../../utils/replace-params";
import { DASHBOARD_FUNDS_COLUMNS } from "../../../dashboard.constants";
import {
  getDashboardFunds,
  updateDashboardFundsFilters
} from "../../../services/dashboard-funds.service";

const FUNDS_SLUG_URL_PARAM_NAME = "fundsSlugUrl";
const FUNDS_ROUTE = "/funds";
const FUND_DETAILS_ROUTE = `${FUNDS_ROUTE}/:${FUNDS_SLUG_URL_PARAM_NAME}`;

class DashboardFunds extends Component {
  getDashboardFundsPlace = state => {
    const itemsData = {
      ...state.dashboard.funds.itemsData,
      data: {
        ...state.dashboard.funds.itemsData.data,
        items:
          state.dashboard.funds.itemsData.data &&
          state.dashboard.funds.itemsData.data.funds
      }
    };

    return {
      ...state.dashboard.funds,
      itemsData: itemsData
    };
  };

  render() {
    const fundDetailsUrl = fundUrl =>
      replaceParams(FUND_DETAILS_ROUTE, {
        [`:${FUNDS_SLUG_URL_PARAM_NAME}`]: fundUrl
      });
    const { t, createButtonToolbar, createButtonBody, createText } = this.props;
    return (
      <TableContainer
        createButtonToolbar={createButtonToolbar}
        createButtonBody={createButtonBody}
        createText={createText}
        getItems={getDashboardFunds}
        getStorePlace={this.getDashboardFundsPlace}
        updateFilters={updateDashboardFundsFilters}
        isResetToDefaultOnUnmount={true}
        isFetchOnMount={false}
        columns={DASHBOARD_FUNDS_COLUMNS}
        renderFilters={(updateFilter, filtering) => (
          <Fragment>
            <DateRangeFilter
              name={DATE_RANGE_FILTER_NAME}
              value={filtering[DATE_RANGE_FILTER_NAME]}
              onChange={updateFilter}
              startLabel={t("filters.date-range.fund-start")}
            />
          </Fragment>
        )}
        renderHeader={column => (
          <span
            className={`dashboard-funds__cell dashboard-funds__cell--${
              column.name
            }`}
          >
            {t(`dashboard-page.funds-header.${column.name}`)}
          </span>
        )}
        renderBodyRow={fund => (
          <TableRow>
            <TableCell className="funds-table__cell funds-table__cell--name">
              <div className="funds-table__cell--avatar-title">
                <AssetAvatar
                  url={fund.logo}
                  alt={fund.title}
                  color={fund.color}
                />
                <div className="funds-table__cell--title">
                  <Link to={fundDetailsUrl(fund.url)}>
                    <GVButton variant="text" color="secondary">
                      {fund.title}
                    </GVButton>
                  </Link>
                </div>
              </div>
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell">
              {fund.statistic.balanceGVT.amount} GVT
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell">
              <FundAssetContainer
                assets={fund.topFundAssets}
                type={"short"}
                size={3}
                length={fund.totalAssetsCount}
              />
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--investors">
              {fund.statistic.investorsCount}
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--drawdown">
              <NumberFormat
                value={fund.statistic.drawdownPercent}
                suffix="%"
                decimalScale={2}
                displayType="text"
              />
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--profit">
              <Profitability value={fund.statistic.profitPercent} prefix="sign">
                <NumberFormat
                  value={fund.statistic.profitPercent}
                  suffix="%"
                  allowNegative={false}
                  decimalScale={2}
                  displayType="text"
                />
              </Profitability>
            </TableCell>
            <TableCell className="funds-table__cell funds-table__cell--chart">
              <ProgramSimpleChart data={fund.chart} programId={fund.id} />
            </TableCell>
          </TableRow>
        )}
      />
    );
  }
}

export default translate()(DashboardFunds);
