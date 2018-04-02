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

  return <ForgotPassword error={errorMessage} onSubmit={handleSubmit} />;
};

const mapStateToProps = state => {
  const { isPending, errorMessage } = state.passwordResetData.forgot;
  return { isPending, errorMessage };
};

const mapDispatchToProps = dispatch => ({
  forgotPassword: (formData, setSubmitting) => {
    dispatch(passwordResetService.forgotPassword(formData)).catch(() => {
      setSubmitting(false);
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ForgotPasswordContainer
);
