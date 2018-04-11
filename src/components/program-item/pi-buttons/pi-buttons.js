import { Link } from "react-router-dom";
import React from "react";

import { PROGRAM_ROUTE } from "../../../modules/program/program.constants";
import replaceParams from "../../../utils/replace-params";

import "./pi-buttons.css";

const PIButtons = ({
  isAuthenticated,
  programId
}) => {
  const traderRoute = replaceParams(PROGRAM_ROUTE, {
    ":programId": programId
  });
  return (
    <div className="pi-buttons">
      <Link className="pi-button gv-btn gv-btn-secondary" to={traderRoute}>
        View Profile
      </Link>
    </div>
  );
};

export default PIButtons;
