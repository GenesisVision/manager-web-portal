import React from "react";
import Select from "react-select";
import "./gv-select.css";
const GVSelect = ({
  field,
  setFieldValue,
  onChange,
  onBlur,
  form: { touched, errors },
  ...other
}) => {
  const handleChange = value => {
    setFieldValue(field.name, value);
    const newValue = value ? value.value : "";
    onChange(newValue);
  };

  const handleBlur = () => {
    onBlur(field.name, true);
  };

  const showError = () =>
    touched[field.name] &&
    errors[field.name] && (
      <div className="gv-select__invalid">{errors[field.name]}</div>
    );

  return (
    <div className="gv-select">
      <Select
        id={field.name}
        name={field.name}
        onChange={handleChange}
        onBlur={handleBlur}
        {...other}
      />
      {showError()}
    </div>
  );
};

export default GVSelect;
