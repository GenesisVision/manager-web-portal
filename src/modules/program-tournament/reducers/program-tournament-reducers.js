import { combineReducers } from "redux";
import apiReducerFactory from "../../../shared/reducers/api-reducer/api-reducer";
import { TOURNAMENT_PROGRAM_CREATE } from "../actions/program-tournament.constants";

const formData = apiReducerFactory({
  apiType: TOURNAMENT_PROGRAM_CREATE
});

export default combineReducers({
  formData
});
