import {
  calculateSkipAndTake,
  calculateTotalPages,
  composePaingActionType
} from "../../paging/helpers/paging-helpers";
import history from "../../../utils/history";
import pagingActionsFactory from "../../paging/actions/paging-actions";
import programActions from "../actions/program-actions";
import replaceParams from "../../../utils/replace-params";

import { PROGRAM_SETTINGS_EDIT_ROUTE } from "../../program-settings/program-settings.constants";
import * as actionTypes from "../actions/program-actions.constants";
import clearDataActionFactory from "../../../shared/actions/clear-data.factory";

const updateAfterInvestment = programId => dispatch => {
  return Promise.all([
    dispatch(programActions.fetchTrader(programId)),
    dispatch(programActions.fetchTraderRequests(programId))
  ]);
};

const getProgramRequests = programId => (dispatch, getState) => {
  const { paging } = getState().programData.requests;
  const { skip, take } = calculateSkipAndTake(paging);

  const filter = { investmentProgramId: programId, skip, take };

  return dispatch(programActions.fetchProgramRequests(filter)).then(
    response => {
      const totalPages = calculateTotalPages(response.value.total);
      dispatch(updateProgramRequestListPaging({ totalPages }));
    }
  );
};

const getTraderDeals = programId => (dispatch, getState) => {
  const { paging } = getState().programData.deals;
  const { skip, take } = calculateSkipAndTake(paging);

  const filter = {
    investmentProgramId: programId,
    sorting: "ByDateDesc",
    skip,
    take
  };
  return dispatch(programActions.fetchProgramDeals(filter)).then(response => {
    const totalPages = calculateTotalPages(response.value.total);
    return dispatch(updateProgramDealListPaging({ totalPages }));
  });
};

const updateProgramRequestListPaging = paging => {
  const pagingActionsRequestList = pagingActionsFactory(
    actionTypes.PROGRAM_REQUESTS
  );
  return pagingActionsRequestList.updatePaging(paging);
};

const changeProgramRequestsPage = (programId, paging) => dispatch => {
  const pagingActionsRequestList = pagingActionsFactory(
    actionTypes.PROGRAM_REQUESTS
  );
  dispatch(pagingActionsRequestList.updatePaging(paging));
  dispatch(getProgramRequests(programId));
};

const updateProgramDealListPaging = paging => {
  const pagingActionsDealList = pagingActionsFactory(actionTypes.PROGRAM_DEALS);
  return pagingActionsDealList.updatePaging(paging);
};

const changeProgramDealsPage = (programId, paging) => dispatch => {
  dispatch(updateProgramDealListPaging(paging));
  dispatch(getTraderDeals(programId));
};

const cancelTraderRequest = (programId, requestId) => dispatch => {
  return dispatch(programActions.cancelProgramRequest(requestId))
    .then(() => dispatch(getProgramRequests(programId)))
    .then(() => dispatch(programActions.fetchProgram(programId)));
};

const openEditProgramPage = programId => {
  history.push(
    replaceParams(PROGRAM_SETTINGS_EDIT_ROUTE, {
      ":programId": programId
    })
  );
};

const clearProgram = () => dispatch => {
  const clearDataActions = [
    clearDataActionFactory(actionTypes.PROGRAM_DETAIL),
    clearDataActionFactory(actionTypes.PROGRAM_DEALS),
    clearDataActionFactory(actionTypes.PROGRAM_HISTORY),
    clearDataActionFactory(actionTypes.PROGRAM_REQUESTS),
    clearDataActionFactory(composePaingActionType(actionTypes.PROGRAM_DEALS)),
    clearDataActionFactory(composePaingActionType(actionTypes.PROGRAM_REQUESTS))
  ];

  clearDataActions.forEach(x => dispatch(x.clearData()));
};

const programService = {
  updateAfterInvestment,
  getProgramRequests,
  getTraderDeals,
  changeProgramRequestsPage,
  changeProgramDealsPage,
  cancelTraderRequest,
  openEditProgramPage,
  clearProgram
};
export default programService;
