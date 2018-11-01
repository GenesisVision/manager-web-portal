import "../fund-structure/fund-structure.scss";

import { TableCell, TableRow } from "modules/table/components";
import { DATE_RANGE_FILTER_NAME } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import TableModule from "modules/table/components/table-module";
import { DEFAULT_PAGING } from "modules/table/reducers/table-paging.reducer";
import React, { Component } from "react";
import { translate } from "react-i18next";

import { FUND_STRUCTURE_COLUMNS } from "../../../fund-details.constants";
import * as service from "../../../services/fund-details.service";
import NumberFormat from "react-number-format";
import { formatValue } from "utils/formatter";
import FundAssetImage from "components/avatar/fund-asset-image/fund-asset-image";

class FundStructure extends Component {
  fetchFundStructure = () => {
    const { fundId } = this.props;
    return service.getFundStructure(fundId).then(({ data }) => {
      return { items: data.trades, total: data.total };
    });
  };

  render() {
    const { t, structure } = this.props;
    let data = { structure: null, total: 0 };
    if (structure) {
      data.items = structure;
      data.total = structure.length;
    }

    return (
      <TableModule
        fetchOnMount={false}
        data={data}
        getItems={this.fetchFundStructure}
        paging={DEFAULT_PAGING}
        columns={FUND_STRUCTURE_COLUMNS}
        renderHeader={column => (
          <span
            className={`fund-details-structure__head-cell fund-details-structure__cell--${
              column.name
            }`}
          >
            {t(`fund-details-page.history.structure.${column.name}`)}
          </span>
        )}
        renderBodyRow={item => (
          <TableRow className="fund-details-structure__row">
            <TableCell className="fund-details-structure__cell fund-details-structure__cell">
              {item.asset}
            </TableCell>
            <TableCell className="fund-details-structure__cell">
              <div className="fund-details-structure__symbol">
                <FundAssetImage url={item.icon} alt={item.symbol} />
                <div className="fund-details-structure__symbol-name">
                  {item.symbol}
                </div>
              </div>
            </TableCell>
            <TableCell className="fund-details-structure__cell fund-details-structure__cell">
              <NumberFormat
                value={formatValue(item.target)}
                suffix={"%"}
                displayType="text"
              />
            </TableCell>
            <TableCell className="fund-details-structure__cell fund-details-structure__cell">
              <NumberFormat
                value={formatValue(item.current)}
                suffix={"%"}
                displayType="text"
              />
            </TableCell>
          </TableRow>
        )}
      />
    );
  }
}

export default translate()(FundStructure);