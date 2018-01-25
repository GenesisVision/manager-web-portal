import {
  TRADERS_REQUEST,
  TRADERS_REQUEST_SUCCESS,
  TRADERS_REQUEST_FAILURE
} from "../actions/tradersActions";

const initialState = {
  isFetching: true,
  traders: []
};

const tradersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRADERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case TRADERS_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        traders: action.traders,
        lastUpdated: action.lastUpdated
      };
    case TRADERS_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        traders: [],
        error: action.message,
        lastUpdated: action.lastUpdated
      };
    default:
      return state;
  }
};

export default tradersReducer;
