import { withFormik } from "formik";
import React from "react";

import PopupHeader from "../../../../popup/components/popup-header/popup-header";
import FormError from "../../../../../shared/components/form/form-error/form-error";
import PopupButtons from "../../../../popup/components/popup-buttons/popup-buttons";

const TraderClose = ({
  setFieldValue,
  isSubmitting,
  closePopup,
  handleSubmit,
  error
}) => {
  return (
    <div className="popup">
      <PopupHeader header="Close Program" onClose={closePopup} />
      <form onSubmit={handleSubmit}>
        The Program will be closed. Please confirm.
        <FormError error={error} />
        <PopupButtons
          submitLabel="Close Program"
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onCancel={closePopup}
        />
      </form>
    </div>
  );
};

export default withFormik({
  displayName: "traderCloseForm",
  handleSubmit: (values, { props, setSubmitting }) => {
    props.submitPopup(setSubmitting);
  }
})(TraderClose);
