import { withFormik, Field } from "formik";
import React from "react";
import moment from "moment";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import GVSelect from "../../../../../shared/components/form/gv-select/gv-select";
import GVDatePicker from "../../../../../shared/components/form/gv-datepicker/gv-datepicker";
import InputFile from "../../../../../shared/components/form/input-file/input-file";
import InputText from "../../../../../shared/components/form/input-text/input-text";

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
          <Field
            name="brokerTradeServerId"
            value={values.brokerTradeServerId}
            onBlur={setFieldTouched}
            component={GVSelect}
            options={brokerOptions}
            clearable={false}
            label="Broker Server"
          />
          <Field
            name="period"
            value={values.period}
            onBlur={setFieldTouched}
            component={GVSelect}
            options={periodOptions}
            clearable={false}
            label="Reporting Period Length"
          />
          <Field
            name="dateFrom"
            selected={values.dateFrom}
            selectsStart
            startDate={values.dateFrom}
            endDate={values.dateTo}
            minDate={moment()}
            maxDate={values.dateTo || moment().add(100, "years")}
            showTimeSelect
            dateFormat="LLL"
            component={GVDatePicker}
            label="Program Start Date"
          />
          <Field
            name="dateTo"
            selected={values.dateTo}
            selectsEnd
            startDate={values.dateFrom}
            endDate={values.dateTo}
            minDate={values.dateFrom || moment()}
            showTimeSelect
            dateFormat="LLL"
            component={GVDatePicker}
            label="Program End Date"
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
    dateFrom: null,
    dateTo: null,
    feeSuccess: "",
    feeManagement: ""
  }),
  validationSchema: programCreateFormValidationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(ProgramCreateForm);
