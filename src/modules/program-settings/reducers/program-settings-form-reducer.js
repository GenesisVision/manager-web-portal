import apiReducerFactory from "../../../shared/reducers/api-reducer/api-reducer";

import { PROGRAM_FORM_SUBMIT } from "../actions/program-settings-actions.constants";
import { PROGRAM_FORM } from "../actions/program-settings-actions.constants";

export const programFormRequestReducer = apiReducerFactory({
  apiType: PROGRAM_FORM
});
export const programFormSubmitReducer = apiReducerFactory({
  apiType: PROGRAM_FORM_SUBMIT
});