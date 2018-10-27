import "./dashboard-programs.scss";

import AssetAvatar from "components/avatar/asset-avatar/asset-avatar";
import ProgramPeriodEnd from "components/program-period/program-period-end/program-period-end";
import ProgramSimpleChart from "components/program-simple-chart/program-simple-chart";
import { GVButton } from "gv-react-components";
import { TableCell, TableRow } from "modules/table/components";
import DateRangeFilter from "modules/table/components/filtering/date-range-filter/date-range-filter";
import { DEFAULT_DATE_RANGE_FILTER_VALUE } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import { DATE_RANGE_FILTER_NAME } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import TableModule from "modules/table/components/table-module";
import { DEFAULT_PAGING } from "modules/table/reducers/table-paging.reducer";
// import { composeProgramDetailsUrl } from "pages/programs/programs.routes";
import React, { Component, Fragment } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { formatValue } from "utils/formatter";
import {
  DASHBOARD_PROGRAMS_COLUMNS,
  DASHBOARD_PROGRAMS_FILTERS,
  DASHBOARD_PROGRAMS_SORTING
} from "../../../dashboard.constants";
import { getDashboardPrograms } from "../../../services/dashboard-programs.service";
import replaceParams from "utils/replace-params";

const PROGRAM_SLUG_URL_PARAM_NAME = "programSlugUrl";
const PROGRAMS_ROUTE = "/programs";
const PROGRAM_DETAILS_ROUTE = `${PROGRAMS_ROUTE}/:${PROGRAM_SLUG_URL_PARAM_NAME}`;

export const composeProgramDetailsUrl = slugUrl =>
  replaceParams(PROGRAM_DETAILS_ROUTE, {
    [`:${PROGRAM_SLUG_URL_PARAM_NAME}`]: slugUrl
  });

class DashboardPrograms extends Component {
  fetchPrograms = filters => {
    return getDashboardPrograms(filters).then(({ data }) => {
      return { items: data.programs, total: data.total };
    });
  };

  render() {
    const { t, createButtonToolbar, createButtonBody, createText } = this.props;
    return (
      <TableModule
        createButtonToolbar={createButtonToolbar}
        createButtonBody={createButtonBody}
        createText={createText}
        paging={DEFAULT_PAGING}
        sorting={DASHBOARD_PROGRAMS_SORTING}
        filtering={{
          dateRange: DEFAULT_DATE_RANGE_FILTER_VALUE
        }}
        defaultFilters={DASHBOARD_PROGRAMS_FILTERS}
        getItems={this.fetchPrograms}
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
