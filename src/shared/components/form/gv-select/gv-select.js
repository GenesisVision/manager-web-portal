import React from "react";
import Select from "react-select";
import "./gv-select.css";
const GVSelect = ({
  field,
  label,
  onChange = val => {},
  onBlur,
  form: { touched, errors, setFieldValue },
  ...other
}) => {
  const handleChange = value => {
    const newValue = value ? value.value : "";
    setFieldValue(field.name, newValue);
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
      <div>{label}</div>
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
