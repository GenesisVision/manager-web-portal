import { Link } from "react-router-dom";
import React from "react";

import { PROGRAM_ROUTE } from "../../../modules/program/program.constants";
import replaceParams from "../../../utils/replace-params";

import "./ti-buttons.css";

const TIButtons = ({
  isAuthenticated,
  programId,
  isInvestEnable,
  openInvestPopup
}) => {
  const traderRoute = replaceParams(PROGRAM_ROUTE, {
    ":programId": programId
  });
  return (
    <div className="ti-buttons">
      <Link className="ti-button gv-btn gv-btn-secondary" to={traderRoute}>
        View Profile
      </Link>
    </div>
  );
};

export default TIButtons;
