import "./filter-pane.css";

import classnames from "classnames";
import React from "react";

const FilterPane = ({ isOpen, children, className, onBackdropClick }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <React.Fragment>
      <div className={classnames("filter-pane", className)}>{children}</div>
      <div className="filter-pane-backdrop" onClick={onBackdropClick} />
    </React.Fragment>
  );
};

export default FilterPane;
