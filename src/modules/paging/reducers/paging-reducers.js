import { composePaingActionType } from "../helpers/paging-helpers";

import { composeClearDataActionType } from "../../../shared/actions/clear-data.factory";

const initialState = {
  currentPage: 0,
  itemsOnPage: 10,
  totalPages: 0
};

const pagingReducerFactory = actionType => {
  const pagingActionType = composePaingActionType(actionType);
  const clearDataActionType = composeClearDataActionType(pagingActionType);
  return (state = initialState, action) => {
    switch (action.type) {
      case pagingActionType:
        return {
          ...state,
          ...action.paging
        };
      case clearDataActionType:
        return initialState;
      default:
        return state;
    }
  };
};
export default pagingReducerFactory;
