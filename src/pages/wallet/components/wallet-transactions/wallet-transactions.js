import "./wallet-transactions.scss";

import Surface from "components/surface/surface";
import { TableCell, TableRow } from "modules/table/components";
import { ASSET_TYPE_FILTER_VALUES } from "modules/table/components/filtering/asset-type-filter/asset-type-filter.constants";
import DateRangeFilter from "modules/table/components/filtering/date-range-filter/date-range-filter";
import { DATE_RANGE_FILTER_NAME } from "modules/table/components/filtering/date-range-filter/date-range-filter.constants";
import SelectFilter from "modules/table/components/filtering/select-filter/select-filter";
import TableContainer from "modules/table/components/table-container";
import moment from "moment";
import React, { Fragment } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import { formatValue, roundTypeEnum } from "utils/formatter";

import {
  fetchWalletTransactions,
  updateWalletTransactionsFilters
} from "../../services/wallet.services";
import WalletTransactionActions from "./wallet-transaction-action-cell";
import {
  WALLET_TRANSACTIONS_COLUMNS,
  WALLET_TRANSACTION_ACTIONS_VALUES
} from "./wallet-transactions.constants";

const getStatus = transaction => {
  const { destinationWithdrawalInfo } = transaction;

  let status = destinationWithdrawalInfo && destinationWithdrawalInfo.status;

  return status ? status : "";
};

const getWalletTransactionsPlace = state => {
  const itemsData = {
    ...state.wallet.transactions.itemsData,
    data: {
      ...state.wallet.transactions.itemsData.data,
      items:
        state.wallet.transactions.itemsData.data &&
        state.wallet.transactions.itemsData.data.transactions
    }
  };

  return {
    ...state.wallet.transactions,
    itemsData: itemsData
  };
};

const WalletTransactions = ({ t }) => (
  <Surface className="wallet-transactions">
    <TableContainer
      title="Transactions"
      getItems={fetchWalletTransactions}
      updateFilters={updateWalletTransactionsFilters}
      getStorePlace={getWalletTransactionsPlace}
      isResetToDefaultOnUnmount={true}
      isFetchOnMount={true}
      renderFilters={(updateFilter, filtering) => {
        return (
          <Fragment>
            <SelectFilter
              name="txAction"
              label="Type"
              value={filtering["txAction"]}
              values={WALLET_TRANSACTION_ACTIONS_VALUES}
              onChange={updateFilter}
            />
            <SelectFilter
              name="assetType"
              label="Assets type"
              value={filtering["assetType"]}
              values={ASSET_TYPE_FILTER_VALUES}
              onChange={updateFilter}
            />
            <DateRangeFilter
              name={DATE_RANGE_FILTER_NAME}
              value={filtering["dateRange"]}
              onChange={updateFilter}
              startLabel={t("filters.date-range.account-creation")}
            />
          </Fragment>
        );
      }}
      columns={WALLET_TRANSACTIONS_COLUMNS}
      renderHeader={column => (
        <span
          className={`wallet-transactions__cell wallet-transactions__cell--${
            column.name
          }`}
        >
          {t(`wallet.transactions.${column.name}`)}
        </span>
      )}
      renderBodyRow={transaction => {
        const status = getStatus(transaction);
        return (
          <TableRow className="wallet-transactions__row">
            <TableCell className="wallet-transactions__cell wallet-transactions__cell--date">
              {moment(transaction.date).format("DD-MM-YYYY, hh:mm a")}
            </TableCell>
            <TableCell className="wallet-transactions__cell wallet-transactions__cell--information">
              {transaction.information}
            </TableCell>
            <TableCell className="wallet-transactions__cell wallet-transactions__cell--amount">
              <NumberFormat
                value={formatValue(
                  transaction.amount,
                  roundTypeEnum.FLOOR,
                  false
                )}
                thousandSeparator=" "
                displayType="text"
                suffix={" " + transaction.sourceCurrency}
              />
            </TableCell>
            <TableCell className="wallet-transactions__cell wallet-transactions__cell--status">
              {status && t(`wallet.transaction-statuses.${status}`)}
            </TableCell>
            <TableCell className="wallet-transactions__cell wallet-transactions__cell--actions">
              {status !== "InProcess" &&
                status !== "Cancelled" && (
                  <WalletTransactionActions transaction={transaction} />
                )}
            </TableCell>
          </TableRow>
        );
      }}
    />
  </Surface>
);

export default translate()(WalletTransactions);
