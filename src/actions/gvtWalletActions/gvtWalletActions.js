import { setTimeout } from "timers";

import { alertMessageActions } from "../alertMessageActions/alertMessageActions";

const gvtWalletActionTypes = {
  request: "GVT_WALLET_REQUEST",
  success: "GVT_WALLET_SUCCESS",
  failure: "GVT_WALLET_FAILURE"
};

export const gvtWalletRequest = () => ({
  type: gvtWalletActionTypes.request
});

export const gvtWalletSuccess = gvtWallet => ({
  type: gvtWalletActionTypes.success,
  gvtWallet
});

export const gvtWalletError = message => ({
  type: gvtWalletActionTypes.failure,
  message
});

const fetchGvtWallet = () => async dispatch => {
  dispatch(gvtWalletRequest());
  //call api from swagger
  setTimeout(() => {
    const gvtWallet = {
      balance: "0",
      transactionHistory: [] //move to separate action/reducer
    };
    dispatch(gvtWalletSuccess(gvtWallet));
  }, 1000);
};

const buyGvt = () => dispatch => {
  dispatch(alertMessageActions.warning("Not Implemented Yet"));
};

const gvtWalletActions = { fetchGvtWallet, buyGvt };

export { gvtWalletActionTypes, gvtWalletActions };
