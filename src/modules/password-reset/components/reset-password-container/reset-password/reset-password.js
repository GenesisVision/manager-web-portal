import { withFormik, Field } from "formik";
import React from "react";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import InputText from "../../../../../shared/components/form/input-text/input-text";
import Button from "../../../../../components/button/button";

import "./reset-password.css";
import validationSchema from "./reset-password.validators";

const ResetPassword = ({ isSubmitting, handleSubmit, error }) => {
  return (
    <form id="resetPasswordForm" onSubmit={handleSubmit} noValidate>
      <div className="reset-password">
        <div className="reset-password__header">Reset Password</div>
        <Field
          type="password"
          name="password"
          placeholder="New Password"
          addon="fas fa-lock"
          component={InputText}
        />
        <Field
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          addon="fas fa-lock"
          component={InputText}
        />
        <FormError error={error} />
        <Button type="submit" label="Submit" id="resetPasswordSubmit" primary />
      </div>
    </form>
  );
};

export default withFormik({
  displayName: "resetPassword",
  mapPropsToValues: () => ({
    password: "",
    confirmPassword: ""
  }),
  validationSchema: validationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(ResetPassword);
