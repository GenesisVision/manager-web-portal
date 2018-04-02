import { connect } from "react-redux";
import React, { PureComponent } from "react";
import passwordResetActions from "../../actions/password-reset-actions";
import ForgotPassword from "./forgot-password/forgot-password";

class ForgotPassportContainer extends PureComponent {
  render() {
    const { isPending, errorMessage } = this.props;
    if (isPending) return null;
    return <ForgotPassword error={errorMessage} />;
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage } = state.passwordResetData.forgot;
  return { isPending, errorMessage };
};

const mapDispatchToProps = dispatch => ({
  passwordResetRequest: email => {
    dispatch(passwordResetActions.passwordResetRequest(email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ForgotPassportContainer
);
