import { gvtWalletActionTypes } from "../../actions/gvtWalletActions/gvtWalletActions";

const initialState = {
  isFetching: false,
  gvtWallet: undefined,
  errorMessage: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case gvtWalletActionTypes.request:
      return {
        ...state,
        isFetching: true
      };
    case gvtWalletActionTypes.success:
      return {
        ...state,
        isFetching: false,
        gvtWallet: action.gvtWallet,
        errorMessage: ""
      };
    case gvtWalletActionTypes.failure:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    default:
      return state;
  }
};

export default profileReducer;
