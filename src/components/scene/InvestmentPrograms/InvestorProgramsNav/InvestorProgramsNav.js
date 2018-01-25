import { NavLink, withRouter } from "react-router-dom";
import React from "react";

import investmentProgramsTabUrls from "../InvestmentProgram.constants";

const InvestmentProgramsNav = ({ match }) => (
  <nav className="nav nav-tabs">
    <NavLink
      className="nav-item nav-link"
      to={`${match.url}/${investmentProgramsTabUrls.active}`}
    >
      Active
    </NavLink>
    <NavLink
      className="nav-item nav-link"
      to={`${match.url}/${investmentProgramsTabUrls.history}`}
    >
      History
    </NavLink>
    <NavLink
      className="nav-item nav-link"
      to={`${match.url}/${investmentProgramsTabUrls.new}`}
    >
      New Program
    </NavLink>
  </nav>
);

export default withRouter(InvestmentProgramsNav);
