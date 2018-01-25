import { connect } from "react-redux";
import React from "react";

import { gvtWalletActions } from "../../../actions/gvtWalletActions/gvtWalletActions";
import GvtWallet from "./GvtWallet/GvtWallet";
import type { IGvtWalletFullProps } from "./GvtWallet/GvtWallet.type";

const GvtWalletContainer = (props: IGvtWalletFullProps) => {
  return <GvtWallet {...props} />;
};

export const mapStateToProps = (state): IGvtWalletProps => {
  const { isFetching, gvtWallet } = state.gvtWalletData;
  return { isFetching, gvtWallet };
};

const mapDispatchToProps = (dispatch): IGvtWalletActions => ({
  fetchGvtWallet: async () => dispatch(gvtWalletActions.fetchGvtWallet()),
  buyGvt: () => dispatch(gvtWalletActions.buyGvt())
});

export default connect(mapStateToProps, mapDispatchToProps)(GvtWalletContainer);
