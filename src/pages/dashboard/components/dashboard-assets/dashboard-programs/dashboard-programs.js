import "./dashboard-programs.scss";

import AssetAvatar from "components/avatar/asset-avatar/asset-avatar";
import ProgramPeriodEnd from "components/program-period/program-period-end/program-period-end";
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
import { formatValue } from "utils/formatter";
import replaceParams from "utils/replace-params";

import { DASHBOARD_PROGRAMS_COLUMNS } from "../../../dashboard.constants";
import { getDashboardPrograms } from "../../../services/dashboard-programs.service";

const PROGRAM_SLUG_URL_PARAM_NAME = "programSlugUrl";
const PROGRAMS_ROUTE = "/programs";
const PROGRAM_DETAILS_ROUTE = `${PROGRAMS_ROUTE}/:${PROGRAM_SLUG_URL_PARAM_NAME}`;

export const composeProgramDetailsUrl = slugUrl =>
  replaceParams(PROGRAM_DETAILS_ROUTE, {
    [`:${PROGRAM_SLUG_URL_PARAM_NAME}`]: slugUrl
  });

class DashboardPrograms extends Component {
  getDashboardProgramsPlace = state => {
    const itemsData = {
      ...state.dashboard.programs.itemsData,
      data: {
        ...state.dashboard.programs.itemsData.data,
        items:
          state.dashboard.programs.itemsData.data &&
          state.dashboard.programs.itemsData.data.programs
      }
    };

    return {
      ...state.dashboard.programs,
      itemsData: itemsData
    };
  };

  render() {
    const { t, createButtonToolbar, createButtonBody, createText } = this.props;
    return (
      <TableContainer
        createButtonToolbar={createButtonToolbar}
        createButtonBody={createButtonBody}
        createText={createText}
        getItems={getDashboardPrograms}
        getStorePlace={this.getDashboardProgramsPlace}
        isFetchOnMount={false}
        columns={DASHBOARD_PROGRAMS_COLUMNS}
        renderFilters={(updateFilter, filtering) => (
          <Fragment>
            <DateRangeFilter
              name={DATE_RANGE_FILTER_NAME}
              value={filtering[DATE_RANGE_FILTER_NAME]}
              onChange={updateFilter}
              startLabel={t("filters.date-range.program-start")}
            />
          </Fragment>
        )}
        renderHeader={column => (
          <span
            className={`dashboard-programs__cell dashboard-programs__cell--${
              column.name
            }`}
          >
            {t(`dashboard-page.programs-header.${column.name}`)}
          </span>
        )}
        renderBodyRow={program => (
          <TableRow>
            <TableCell className="dashboard-programs__cell--title">
              <div className="dashboard-programs__cell--avatar-title">
                <AssetAvatar
                  url={program.logo}
                  level={program.level}
                  alt={program.title}
                  color={program.color}
                />
                <Link to={composeProgramDetailsUrl(program.url)}>
                  <GVButton variant="text" color="secondary">
                    {program.title}
                  </GVButton>
                </Link>
              </div>
            </TableCell>
            <TableCell className="dashboard-programs__cell--share">
              {formatValue(program.dashboardAssetsDetails.share)}
            </TableCell>
            <TableCell className="dashboard-programs__cell--currency">
              {program.currency}
            </TableCell>
            <TableCell className="dashboard-programs__cell--period">
              <ProgramPeriodEnd periodEnds={program.periodEnds} />
            </TableCell>
            <TableCell className="dashboard-programs__cell--value">
              {formatValue(program.statistic.currentValue)}
            </TableCell>
            <TableCell className="dashboard-programs__cell--profit">
              <NumberFormat
                value={program.statistic.profitPercent}
                suffix="%"
                decimalScale={2}
                displayType="text"
              />
            </TableCell>
            <TableCell className="dashboard-programs__cell--chart">
              <ProgramSimpleChart data={program.chart} programId={program.id} />
            </TableCell>
            <TableCell className="dashboard-programs__cell--status">
              {program.status}
            </TableCell>
          </TableRow>
        )}
      />
    );
  }
}

export default translate()(DashboardPrograms);
