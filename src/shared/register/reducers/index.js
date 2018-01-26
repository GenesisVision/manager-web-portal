import * as actionTypes from "../actions/constants"

const initialState = {
  isPending: false,
  errorMessage: ''
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        isPending: true,
      }
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isPending: false,
        errorMessage: ''
      }
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default registerReducer
