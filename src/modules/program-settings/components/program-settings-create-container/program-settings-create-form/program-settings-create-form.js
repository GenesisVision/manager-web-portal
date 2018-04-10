import { withFormik, Field } from "formik";
import moment from "moment";
import React from "react";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import GVDatePicker from "../../../../../shared/components/form/gv-datepicker/gv-datepicker";
import GVSelect from "../../../../../shared/components/form/gv-select/gv-select";
import GVTextarea from "../../../../../shared/components/form/gv-textarea/gv-textarea";
import InputFile from "../../../../../shared/components/form/input-file/input-file";
import InputText from "../../../../../shared/components/form/input-text/input-text";

import "./program-settings-create-form.css";
import managerAvatar from "../../../../../shared/media/manager-avatar.png";
import programSettingsCreateFormValidationSchema from "./program-settings-create-form.validators";

const ProgramCreateForm = ({
  programForm,
  isSubmitting,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  error,
  values,
  touched,
  errors
}) => {
  const brokerOptions = programForm.brokers.map(x => ({
    value: x.id,
    label: `${x.name} (${x.host})`
  }));
  const periodOptions = [1, 2, 3, 5, 7, 10, 14].map(x => ({
    value: x,
    label: `${x} days`
  }));
  const getLeverages = brokerServerId => {
    const broker = programForm.brokers.find(x => x.id === brokerServerId);
    if (!broker) return [];
    return broker.leverages.map(x => ({
      value: x,
      label: x
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="create-program-form" noValidate>
      <div className="create-program-form__header">Create Program</div>
      <div className="create-program-form__program-detail">
        <div className="create-program-form__program-description">
          <Field
            name="logo"
            label="Program Title"
            className="create-program-form__program-image"
            component={InputFile}
            defaultImage={managerAvatar}
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
            disabled={!values.brokerTradeServerId}
            name="leverage"
            value={values.leverage}
            onBlur={setFieldTouched}
            component={GVSelect}
            options={getLeverages(values.brokerTradeServerId)}
            clearable={false}
            label="Leverage"
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
            selected={values.dateFrom}
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
    logo: {
      src: managerAvatar,
      filename: "image.png",
      filetype: "image/png",
      cropped: null
    },
    tradePlatformPassword: "",
    confirmTradePlatformPassword: "",
    brokerTradeServerId: "",
    leverage: "",
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
  validationSchema: programSettingsCreateFormValidationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(ProgramCreateForm);
