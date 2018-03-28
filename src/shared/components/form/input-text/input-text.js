import classnames from "classnames";
import React from "react";

import "./input-text.css";

const InputText = ({
  field, // { name, value, onChange, onBlur }
  addon,
  label,
  controllClass,
  material,
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const showError = () =>
    touched[field.name] &&
    errors[field.name] && (
      <div className="field-input__invalid">{errors[field.name]}</div>
    );

  const renderAddon = () => {
    if (addon) {
      return (
        <div className="input-group-prepend">
          <span className="input-group-text">
            <span className={`${addon} field-input__addon`} />
          </span>
        </div>
      );
    }
    return null;
  };
  const validationClass = touched[field.name]
    ? errors[field.name] ? "is-invalid" : "is-valid"
    : "";

  const hasError = touched[field.name] && errors[field.name];

  const renderMaterialInput = () => (
    <div className="input-text input-text--material">
      <input
        type="text"
        className={classnames(
          "input-text__input",
          "input-text__input--material",
          { "input-text__input--filled": field.value.length > 0 },
          { "input-text__input--error": hasError }
        )}
        autoComplete="off"
        {...field}
        {...props}
      />

      <label
        className={classnames(
          "input-text__label",
          "input-text__label--material",
          {
            "input-text__label--regular":
              touched[field.name] && !hasError && field.value.length > 0
          },
          { "input-text__label--error": hasError }
        )}
      >
        {label}
      </label>
      <hr className="input-text__hr-placeholder" />
      <hr
        className={classnames(
          "input-text__hr",
          hasError ? "input-text__hr--error" : "input-text__hr--regular"
        )}
      />
      {hasError && (
        <div className="input-text__error-message">{errors[field.name]}</div>
      )}
    </div>
  );

  const renderInput = () => (
    <div className="form-group">
      <div className="input-group">
        {renderAddon()}
        <input
          type="text"
          className={`${controllClass || "form-control"} ${validationClass}`}
          autoComplete="off"
          {...field}
          {...props}
        />
        {showError()}
      </div>
    </div>
  );

  return material ? renderMaterialInput() : renderInput();
};

export default InputText;
