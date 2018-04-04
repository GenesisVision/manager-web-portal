import { combineReducers } from "redux";

import apiReducerFactory from "../../../shared/reducers/api-reducer/api-reducer";

import {
  PROGRAM_SETTINGS_FETCH_FORM,
  PROGRAM_SETTINGS_CREATE_FORM,
  PROGRAM_SETTINGS_EDIT_FORM
} from "../actions/program-settings-actions.constants";

const programSettingsEditFormReducer = apiReducerFactory({
  apiType: PROGRAM_SETTINGS_EDIT_FORM
});

const programSettingsFetchFormReducer = apiReducerFactory({
  apiType: PROGRAM_SETTINGS_FETCH_FORM
});

const programSettingsCreateFormReducer = apiReducerFactory({
  apiType: PROGRAM_SETTINGS_CREATE_FORM
});

const programSettingsReducer = combineReducers({
  formData: programSettingsFetchFormReducer,
  editSettingsData: programSettingsEditFormReducer,
  createSettingsData: programSettingsCreateFormReducer
});

export default programSettingsReducer;
