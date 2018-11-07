import "./create-program-settings.scss";

import { withFormik } from "formik";
import { GVButton } from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";
import { compose } from "redux";
import InputPhoto from "shared/components/form/input-photo/input-photo";
import UserIcon from "shared/media/user-avatar.svg";

import ProfileImageValidationSchema from "./profile-image.validators";

class ProfileImageForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.avatar) {
      props.setFieldValue("logo", {
        ...props.values.logo,
        src: props.avatar
      });
    }
  }

  get isSubmitDisabled() {
    const { avatar, errors, values, isSubmitting } = this.props;
    const value = values.logo;

    if (isSubmitting) return true;
    if (!value.isUpdated) return true;
    if (!value.cropped && !avatar) return true;
    if (errors.logo) return true;

    return false;
  }

  render() {
    const { isSubmitDisabled } = this;

    const {
      t,
      handleSubmit,
      values,
      setFieldValue,
      notifyError,
      errors
    } = this.props;

    const imageInputError =
      errors &&
      errors.logo &&
      (errors.logo.width || errors.logo.height || errors.logo.size);

    return (
      <div className="profile-image">
        <h3 className="profile-image__heading">
          {t("profile.settings.profile-image")}
        </h3>

        <div className="profile-image__requirements">
          {t("profile.settings.image-requirements")}
        </div>

        <InputPhoto
          name="logo"
          value={values.logo}
          defaultImage={UserIcon}
          onChange={setFieldValue}
          notifyError={notifyError}
          className="profile-image__input-image"
          alt="Program logo"
          error={imageInputError}
        />

        <GVButton
          color="primary"
          variant="outlined"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
          className="profile-image__submit-btn"
        >
          {t("profile.settings.save-photo")}
        </GVButton>
      </div>
    );
  }
}

export default compose(
  translate(),
  withFormik({
    displayName: "ProfileImageForm",
    mapPropsToValues: () => ({
      logo: {
        cropped: null,
        src: "",
        isDefault: true,
        isUpdated: false,
        width: undefined,
        height: undefined,
        size: undefined,
        filetype: undefined
      }
    }),
    validationSchema: ProfileImageValidationSchema,
    handleSubmit: (values, { props, setSubmitting, setFieldValue }) => {
      props.handleSubmit(values.logo.cropped, src => {
        setFieldValue("logo", { ...values.logo, isUpdated: false, src });
        setSubmitting(false);
      });
    }
  })
)(ProfileImageForm);
