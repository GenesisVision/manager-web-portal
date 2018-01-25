import React, { Component } from "react";

import type { IGvtWalletFullProps } from "./GvtWallet.type";

class GvtWallet extends Component<IGvtWalletFullProps> {
  componentDidMount() {
    this.props.fetchGvtWallet();
  }

  render() {
    const { isFetching, gvtWallet, buyGvt } = this.props;
    if (!gvtWallet || isFetching) return null;
    return (
      <div>
        <div>
          balance: {gvtWallet.balance} GVT
          <button
            className="btn btn-sm btn-outline-primary ml-4"
            onClick={buyGvt}
          >
            Buy GVT
          </button>
        </div>
        <div>Transactions: {gvtWallet.transactions}</div>
      </div>
    );
  }
}

export default GvtWallet;
