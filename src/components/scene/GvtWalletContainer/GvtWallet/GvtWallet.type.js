//@flow
export type IGvtWallet = {
  ballance: string,
  transactionHistory: Array<any>
};

export type IGvtWalletProps = {
  isFetching: boolean,
  gvtWallet: IGvtWallet
};

export type IGvtWalletActions = {
  fetchGvtWallet: () => {},
  buyGvt: () => {}
};

export type IGvtWalletFullProps = IGvtWalletProps & IGvtWalletActions;
