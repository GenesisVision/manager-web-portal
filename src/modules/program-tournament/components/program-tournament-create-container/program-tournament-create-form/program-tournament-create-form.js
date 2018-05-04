import { translate } from "react-i18next";
import { withFormik, Field } from "formik";
import React from "react";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import GVTextarea from "../../../../../shared/components/form/gv-textarea/gv-textarea";
import InputFile from "../../../../../shared/components/form/input-file/input-file";
import InputText from "../../../../../shared/components/form/input-text/input-text";
import managerAvatar from "../../../../../shared/media/manager-avatar.png";
import validateSchema from "./program-tournament-create-form.validators";
import "./program-tournament-create-form.css";

const ProgramTournamentCreateForm = ({
  t,
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
  return (
    <form
      id="createProgramForm"
      onSubmit={handleSubmit}
      className="create-program-form tournament-form"
      noValidate
    >
      <div className="create-program-form__header">Create Program</div>
      <div className="create-program-form__program-detail">
        <div className="create-program-form__program-description">
          <Field
            name="logo"
            label="Program Logo"
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
          about tournament
        </div>
      </div>
      <FormError error={error} />
      <button
        type="submit"
        id="createProgramSubmit"
        disabled={isSubmitting}
        className="btn btn-primary create-program-form__submit tournament-form__submit"
      >
        Create Tournament Account
      </button>
    </form>
  );
};

export default translate()(
  withFormik({
    mapPropsToValues: () => ({
      logo: {
        src: managerAvatar,
        filename: "image.png",
        filetype: "image/png",
        cropped: null
      },
      title: "",
      description: ""
    }),
    validationSchema: validateSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })(ProgramTournamentCreateForm)
);
