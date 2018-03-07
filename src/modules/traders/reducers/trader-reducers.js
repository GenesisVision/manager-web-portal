import { combineReducers } from "redux";

import apiReducerFactory from "../../../shared/reducers/api-reducer/api-reducer";
import traderCloseProgramReducer from "./trader-close-program-reducer";

import { TRADER } from "../actions/traders-actions.constants";

const traderReducer = combineReducers({
  trader: apiReducerFactory({ apiType: TRADER }),
  closeProgram: traderCloseProgramReducer
});

export default traderReducer;
