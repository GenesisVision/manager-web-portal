import "./register-form.css";

import { Field, withFormik } from "formik";
import React from "react";

import Button from "../../../../components/button/button";
import FormError from "../../../../shared/components/form/form-error/form-error";
import InputText from "../../../../shared/components/form/input-text/input-text";
import { LOGIN_ROUTE } from "../../../login/login.constants";
import validationSchema from "./register-form.validators";

const RegisterForm = ({ isSubmitting, handleSubmit, error }) => {
  return (
    <form id="registerForm" onSubmit={handleSubmit} noValidate>
      <div className="register">
        <div className="register__header">Sign Up</div>
        <Field
          name="userName"
          placeholder="User Name"
          addon="fas fa-user"
          component={InputText}
        />
        <Field
          type="email"
          name="email"
          placeholder="Email"
          addon="fas fa-envelope"
          component={InputText}
        />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          addon="fas fa-lock"
          component={InputText}
        />
        <Field
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          addon="fas fa-lock"
          component={InputText}
        />
        <FormError error={error} />
        <Button label="Sign Up" type="submit" id="registerSubmit" primary />
        <div className="register__separator" />
        <Button
          href={LOGIN_ROUTE}
          className="login__btn"
          secondary
          label="Already have an account? Sign In!"
        />
      </div>
    </form>
  );
};

export default withFormik({
  displayName: "register",
  mapPropsToValues: () => ({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }),
  validationSchema: validationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(RegisterForm);
