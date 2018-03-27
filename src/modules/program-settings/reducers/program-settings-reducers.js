import { combineReducers } from "redux";

import {
  programFormRequestReducer,
  programFormSubmitReducer
} from "./program-settings-form-reducer";

const programSettingsReducer = combineReducers({
  formData: programFormRequestReducer,
  formSubmit: programFormSubmitReducer
});

export default programSettingsReducer;
