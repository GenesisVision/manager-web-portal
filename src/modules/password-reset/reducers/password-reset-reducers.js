import { combineReducers } from "redux";
import forgotPasswordReducer from "./forgot-password-reducer";

const passwordResetReducer = combineReducers({
  forgot: forgotPasswordReducer
});

export default passwordResetReducer;
