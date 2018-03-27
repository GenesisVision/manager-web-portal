import authService from "../../../services/auth-service";
import filesService from "../../../shared/services/file-service";
import filteringActionsFactory from "../../filtering/actions/filtering-actions";
import filterPaneActionsFactory from "../../filter-pane/actions/filter-pane-actions";
import SwaggerInvestorApi from "../../../services/api-client/swagger-investor-api";

import * as actionTypes from "./traders-actions.constants";
import {
  LEVEL_MAX,
  LEVEL_MIN,
  PROFIT_PROGRAM_PROCENT_MAX,
  PROFIT_PROGRAM_PROCENT_MIN
} from "../traders.constants";

const fetchTraders = () => (dispatch, getState) => {
  const { filtering } = getState().tradersData.traders;
  let data = {
    filter: {}
  };
  if (authService.getAuthArg()) {
    data.authorization = authService.getAuthArg();
  }
  if (filtering.levelMin && filtering.levelMin !== LEVEL_MIN) {
    data.filter.levelMin = filtering.levelMin;
  }
  if (filtering.levelMax && filtering.levelMax !== LEVEL_MAX) {
    data.filter.levelMax = filtering.levelMax;
  }
  if (
    filtering.profitAvgPercentMin &&
    filtering.profitAvgPercentMin !== PROFIT_PROGRAM_PROCENT_MIN
  ) {
    data.filter.profitAvgPercentMin = filtering.profitAvgPercentMin;
  }
  if (
    filtering.profitAvgPercentMax &&
    filtering.profitAvgPercentMax !== PROFIT_PROGRAM_PROCENT_MAX
  ) {
    data.filter.profitAvgPercentMax = filtering.profitAvgPercentMax;
  }
  if (filtering.sorting) {
    data.filter.sorting = filtering.sorting + filtering.sortingDirection;
  }

  return dispatch({
    type: actionTypes.TRADERS,
    payload: SwaggerInvestorApi.apiInvestorInvestmentProgramsPost(data).then(
      response => {
        response.investmentPrograms.forEach(x => {
          x.logo = filesService.getFileUrl(x.logo);
        });

        return response;
      }
    )
  });
};

const shouldFetchTraders = traders => {
  return true;
};

const fetchTradersIfNeeded = () => (dispatch, getState) => {
  const traders = getState().tradersData.data;
  if (shouldFetchTraders(traders)) {
    return dispatch(fetchTraders());
  }
};

const composeFiltering = filter => {
  const filteringActions = filteringActionsFactory(actionTypes.TRADERS);
  let filtering = {};
  switch (filter.name) {
    case "traderLevel": {
      filtering.levelMin = filter.value.min;
      filtering.levelMax = filter.value.max;
      break;
    }
    case "profitAvgPercent": {
      filtering.profitAvgPercentMin = filter.value.min;
      filtering.profitAvgPercentMax = filter.value.max;
      break;
    }
    default: {
      filtering[filter.name] = filter.value;
    }
  }
  return filteringActions.updateFiltering(filtering);
};

const updateFiltering = filter => dispatch => {
  dispatch(composeFiltering(filter));
  dispatch(fetchTradersIfNeeded());
};

const closeFilterPane = () => {
  const filterPaneActions = filterPaneActionsFactory(actionTypes.TRADERS);
  return filterPaneActions.closeFilter();
};

const tradersActions = {
  fetchTradersIfNeeded,
  updateFiltering,
  closeFilterPane
};
export default tradersActions;
