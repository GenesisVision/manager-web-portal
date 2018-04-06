import history from '../../../utils/history';
import replaceParams from '../../../utils/replace-params';
import traderActions from "../actions/trader-actions";

import {PROGRAM_SETTINGS_EDIT_ROUTE} from '../../program-settings/program-settings.constants';

const updateAfterInvestment = traderId => dispatch => {
  return Promise.all([
    dispatch(traderActions.fetchTrader(traderId)),
    dispatch(traderActions.fetchTraderRequests(traderId))
  ]);
};

const openEditProgramPage = traderId => {
  history.push(replaceParams(PROGRAM_SETTINGS_EDIT_ROUTE, {
    ":traderId": traderId
  }));
}

const traderService = { updateAfterInvestment, openEditProgramPage };
export default traderService;
