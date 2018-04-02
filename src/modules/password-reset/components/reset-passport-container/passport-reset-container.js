import { connect } from "react-redux";
import React, { PureComponent } from "react";
import passwordResetActions from "../../actions/password-reset-actions";

class PassportResetContainer extends PureComponent {
  render() {
    const { isPending, errorMessage } = this.props;
    if (isPending) return null;
    return <div>{errorMessage}</div>;
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage } = state.emailConfirmData;

  return { isPending, errorMessage };
};

const mapDispatchToProps = dispatch => ({
  passwordResetRequest: email => {
    dispatch(passwordResetActions.passwordResetRequest(email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PassportResetContainer
);
