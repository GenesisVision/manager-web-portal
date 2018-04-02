import { connect } from "react-redux";
import React from "react";

import ForgotPassword from "./forgot-password/forgot-password";
import passwordResetService from "../../service/password-reset-service";

const ForgotPasswordContainer = ({
  isPending,
  errorMessage,
  forgotPassword
}) => {
  const handleSubmit = (formData, setSubmitting) => {
    forgotPassword(formData, setSubmitting);
  };
  if (isPending) return null;

  return <ForgotPassword error={errorMessage} onSubmit={handleSubmit} />;
};

const mapStateToProps = state => {
  const { isPending, errorMessage } = state.passwordResetData.forgot;
  return { isPending, errorMessage };
};

const mapDispatchToProps = dispatch => ({
  forgotPassword: formData => {
    dispatch(passwordResetService.forgotPassword(formData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ForgotPasswordContainer
);
