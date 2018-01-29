import { Field, reduxForm } from "redux-form";
import React from "react";

import FieldInput from "../../../../../shared/components/FieldInput/FieldInput";

const ProfileForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  handleSave,
  handleCancel
}) => {
  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>Edit Profile</h1>

      <Field
        type="text"
        name="username"
        placeholder="Username"
        addon="fa fa-pencil"
        component={FieldInput}
      />

      <Field
        type="text"
        name="birthday"
        placeholder="Birthday"
        addon="fa fa-pencil"
        component={FieldInput}
      />

      <Field
        type="text"
        name="passportNo"
        placeholder="Passport Number"
        addon="fa fa-pencil"
        component={FieldInput}
      />

      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary">
          Submit
        </button>

        <button
          type="button"
          className="btn btn-default ml-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "profileForm"
  //validate
})(ProfileForm);
