import "./wallet-withdraw-form.css";

import { Field, withFormik } from "formik";
import React from "react";

import Button from "../../../../../components/button/button";
import FormError from "../../../../../shared/components/form/form-error/form-error";
import InputText from "../../../../../shared/components/form/input-text/input-text";
import walletWithdrawValidationSchema from "./wallet-withdraw-form.validators";

const WalletWithdrawForm = ({
  isSubmitting,
  handleSubmit,
  error,
  onCancel
}) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <form onSubmit={handleSubmit} className="wallet-withdraw" noValidate>
        <div className="">
          <h1 className="m-4">Withdraw</h1>
        </div>
        <Field
          name="address"
          placeholder="To"
          addon="fas fa-barcode"
          component={InputText}
        />
        <Field
          name="amount"
          placeholder="Amount"
          addon="fas fa-money-bill-alt"
          component={InputText}
        />
        <FormError error={error} />
        <Button
          label="Withdraw"
          type="submit"
          disabled={isSubmitting}
          primary
        />
      </form>
    </div>
  );
};

export default withFormik({
  displayName: "walletWithdrawForm",
  mapPropsToValues: () => ({
    address: "",
    amount: ""
  }),
  validationSchema: walletWithdrawValidationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(WalletWithdrawForm);
