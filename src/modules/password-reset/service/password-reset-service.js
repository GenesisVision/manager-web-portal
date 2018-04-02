import history from "../../../utils/history";
import passwordResetActions from "../actions/password-reset-actions";

import { FORGOT_PASSWORD_PENDING_ROUTE } from "../password-reset.constants";

const forgotPassword = data => dispatch => {
  return dispatch(passwordResetActions.forgotPassword(data)).then(() => {
    history.push(FORGOT_PASSWORD_PENDING_ROUTE);
  });
};

const passwordResetService = { forgotPassword };
export default passwordResetService;
