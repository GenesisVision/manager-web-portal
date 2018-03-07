import apiReducerFactory from "../../../shared/reducers/api-reducer/api-reducer";

import { TRADER_CLOSE_PROGRAM } from "../actions/traders-actions.constants";

const traderCloseProgramReducer = apiReducerFactory({
  apiType: TRADER_CLOSE_PROGRAM
});

export default traderCloseProgramReducer;
