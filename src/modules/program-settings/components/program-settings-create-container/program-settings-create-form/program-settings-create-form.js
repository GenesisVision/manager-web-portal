import { withFormik, Field } from "formik";
import React from "react";
import moment from "moment";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import GVSelect from "../../../../../shared/components/form/gv-select/gv-select";
import GVDatePicker from "../../../../../shared/components/form/gv-datepicker/gv-datepicker";
import InputFile from "../../../../../shared/components/form/input-file/input-file";
import InputText from "../../../../../shared/components/form/input-text/input-text";
import GVTextarea from "../../../../../shared/components/form/gv-textarea/gv-textarea";

import "./program-settings-create-form.css";
import programCreateFormValidationSchema from "./program-settings-create-form.validators";

const ProgramCreateForm = ({
  programForm,
  isSubmitting,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  error,
  values,
  touched,
  errors,
  uploadAvatar
}) => {
  const brokerOptions = programForm.brokers.map(x => ({
    value: x.id,
    label: `${x.name} (${x.host})`
  }));
  const periodOptions = [1, 2, 3, 5, 7, 10, 14].map(x => ({
    value: x,
    label: `${x} days`
  }));

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
          <Field
            material
            name="title"
            label="Program Title"
            component={InputText}
          />
          <Field
            name="description"
            label="Description"
            component={GVTextarea}
          />
        </div>
        <div className="create-program-form__program-settings">
          <Field
            material
            type="password"
            name="tradePlatformPassword"
            label="Trading Account Password"
            component={InputText}
          />
          <Field
            material
            type="password"
            name="confirmTradePlatformPassword"
            label="Confirm Trading Account Password"
            component={InputText}
          />
          <Field
            material
            name="brokerTradeServerId"
            value={values.brokerTradeServerId}
            onBlur={setFieldTouched}
            component={GVSelect}
            options={brokerOptions}
            clearable={false}
            label="Broker Server"
            placeholder=" "
          />
          <Field
            material
            name="period"
            value={values.period}
            onBlur={setFieldTouched}
            component={GVSelect}
            options={periodOptions}
            clearable={false}
            label="Period Length"
            placeholder=" "
          />
          <Field
            material
            name="dateFrom"
            minDate={moment()}
            showTimeSelect
            dateFormat="LLL"
            component={GVDatePicker}
            label="Start Date"
          />
          <Field
            material
            name="depositAmount"
            label="Deposit Amount (GVT)"
            component={InputText}
          />
          <div className="create-program-form__couple-field">
            <Field
              material
              name="feeSuccess"
              label="Success Fee (%)"
              component={InputText}
            />
            <Field
              material
              name="feeManagement"
              label="Management Fee (%)"
              component={InputText}
            />
          </div>
          <div className="create-program-form__couple-field">
            <Field
              material
              name="tokenName"
              label="Token Name"
              component={InputText}
            />
            <Field
              material
              name="tokenSymbol"
              label="Token Symbol"
              component={InputText}
            />
          </div>
        </div>
      </div>
      <FormError error={error} />
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary create-program-form__submit"
      >
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
    dateFrom: null,
    feeSuccess: "",
    feeManagement: ""
  }),
  validationSchema: programCreateFormValidationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(ProgramCreateForm);
