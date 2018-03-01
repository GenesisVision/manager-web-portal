import { combineReducers } from "redux";

import {
  programFormRequestReducer,
  programFormSubmitReducer
} from "./program-form-reducer";

const programReducer = combineReducers({
  formData: programFormRequestReducer,
  formSubmit: programFormSubmitReducer
});

export default programReducer;
