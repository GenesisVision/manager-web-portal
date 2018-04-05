import { withFormik, Field } from "formik";
import React from "react";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import GVTextarea from "../../../../../shared/components/form/gv-textarea/gv-textarea";
import InputFile from "../../../../../shared/components/form/input-file/input-file";
import InputText from "../../../../../shared/components/form/input-text/input-text";

import programSettingsEditFormValidationSchema from "./program-settings-edit-form.validators";

const ProgramSettingsEditForm = ({
  programSettings,
  isSubmitting,
  handleSubmit,
  setFieldValue,
  error,
  values
}) => {
  return (
    <form onSubmit={handleSubmit} className="create-program-form" noValidate>
      <div className="create-program-form__header">Program Settings</div>
      <div className="create-program-form__program-detail">
        <div className="create-program-form__program-description">
          <InputFile
            id="logo"
            name="logo"
            label="Program image"
            className="create-program-form__program-image"
            setFieldValue={setFieldValue}
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
            name="broker"
            label="Broker"
            readOnly
            field={{value:programSettings.broker}}
            component={InputText}
          />
        </div>
      </div>
      <FormError error={error} />
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary create-program-form__submit"
      >
        Edit Program
      </button>
    </form>
  );
};

export default withFormik({
  displayName: "programSettingsEditForm",
  mapPropsToValues: ({programSettings}) => ({
       logo: programSettings.logo,
      title: programSettings.title,
      description: programSettings.description
  }  ),
  validationSchema: programSettingsEditFormValidationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(ProgramSettingsEditForm);
