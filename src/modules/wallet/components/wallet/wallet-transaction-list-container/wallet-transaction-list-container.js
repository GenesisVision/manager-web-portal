import { connect } from "react-redux";
import React, { Component } from "react";

import walletService from "../../../service/wallet-service";
import WalletTransactionList from "./wallet-transaction-list/wallet-transaction-list";

class WalletTransactionListContainer extends Component {
  getFilter = props => (props.queryParams ? props.queryParams.filter : "All");

  componentDidMount() {
    this.props.fetchTransactions(this.getFilter(this.props), this.props.paging);
  }

  render() {
    const { isPending, transactions } = this.props;

    if (isPending || transactions === undefined) {
      return null;
    }

    return <WalletTransactionList transactions={transactions} />;
  }
}
const mapStateToProps = state => {
  const paging = state.walletData.transactions.paging;
  const { isPending, data } = state.walletData.transactions.items;

  let transactions;
  if (data) {
    transactions = data.transactions;
  }
  return { isPending, transactions, paging };
};

const mapDispatchToProps = dispatch => ({
  fetchTransactions: (filter, paging) => {
    dispatch(walletService.getWalletTransactions());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  WalletTransactionListContainer
);
