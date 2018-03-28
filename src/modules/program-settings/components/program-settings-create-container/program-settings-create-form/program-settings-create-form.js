import { withFormik, Field } from "formik";
import React from "react";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import InputFile from "../../../../../shared/components/form/input-file/input-file";
import InputText from "../../../../../shared/components/form/input-text/input-text";

import "./program-settings-create-form.css";
import programCreateFormValidationSchema from "./program-settings-create-form.validators";

const ProgramCreateForm = ({
  programForm,
  isSubmitting,
  handleSubmit,
  setFieldValue,
  error,
  values,
  touched,
  errors,
  uploadAvatar
}) => {
  const brokerList = () => {
    const list = programForm.brokers.map(x => (
      <option key={x.id} value={x.id}>
        {x.name} ({x.host})
      </option>
    ));

    list.unshift(
      <option key="" value="" disabled hidden>
        Choose sever
      </option>
    );

    return list;
  };
  return (
    <form onSubmit={handleSubmit} className="create-program-form" noValidate>
      <div className="create-program-form__header">Create Program</div>
      <div className="create-program-form__program-detail">
        <div className="create-program-form__program-description">
          <InputFile
            id="logo"
            name="logo"
            label="Program image"
            className="create-program-form__program-image"
            setFieldValue={setFieldValue}
            uploadAvatar={uploadAvatar}
          />
          <Field name="title" placeholder="Title" component={InputText} />
          <Field
            component="textarea"
            rows="4"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="create-program-form__program-settings">
          <Field
            type="password"
            name="tradePlatformPassword"
            placeholder="Trading Account Password"
            addon="fas fa-lock"
            component={InputText}
          />
          <Field
            type="password"
            name="confirmTradePlatformPassword"
            placeholder="Confirm Trading Account Password"
            addon="fas fa-lock"
            component={InputText}
          />
          <Field name="brokerTradeServerId" component="select">
            {brokerList()}
          </Field>
          {errors["brokerTradeServerId"] && (
            <div className="">{errors["brokerTradeServerId"]}</div>
          )}
          <Field
            type="number"
            name="period"
            placeholder="Reporting Period Length"
            addon="fas fa-calendar"
            component={InputText}
          />
          <Field
            type="date"
            name="dateFrom"
            placeholder="Date Start"
            addon="fas fa-calendar-alt"
            component={InputText}
          />
          <Field
            type="date"
            name="dateTo"
            placeholder="Date End"
            addon="fas fa-calendar-alt"
            component={InputText}
          />
          <Field
            type="number"
            name="feeSuccess"
            placeholder="Success Fee"
            addon="fas fa-money-bill-alt"
            component={InputText}
          />
          <Field
            type="number"
            name="feeManagement"
            placeholder="Management Fee"
            addon="fas fa-money-bill-alt"
            component={InputText}
          />
          <Field
            type="number"
            name="depositAmount"
            placeholder="Deposit Amount"
            addon="fas fa-question"
            component={InputText}
          />
          <Field
            name="tokenName"
            placeholder="Token Name"
            addon="fas fa-question"
            component={InputText}
          />
          <Field
            name="tokenSymbol"
            placeholder="Token Symbol"
            addon="fas fa-question"
            component={InputText}
          />
        </div>
      </div>
      <FormError error={error} />
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        Create Program
      </button>
    </form>
  );
};

export default withFormik({
  displayName: "programCreateForm",
  mapPropsToValues: () => ({
    logo: "",
    tradePlatformPassword: "",
    confirmTradePlatformPassword: "",
    brokerTradeServerId: "",
    title: "",
    description: "",
    depositAmount: "",
    tokenName: "",
    tokenSymbol: "",
    period: "",
    dateFrom: "",
    dateTo: "",
    feeSuccess: "",
    feeManagement: ""
  }),
  validationSchema: programCreateFormValidationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(ProgramCreateForm);
