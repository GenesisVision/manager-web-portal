import { NavLink } from "react-router-dom";
import React from "react";
import "./mobile-nav.css";

import { DASHBOARD_ROUTE } from "../../modules/dashboard/dashboard.constants";
import { TRADERS_ROUTE } from "../../modules/traders/traders.constants";
import { WALLET_ROUTE } from "../../modules/wallet/wallet.constants";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <NavLink className="mobile-nav__item" title="Programs" to={TRADERS_ROUTE}>
        Programs
      </NavLink>
      <NavLink
        className="mobile-nav__item"
        title="Dashboard"
        to={DASHBOARD_ROUTE}
      >
        Dashboard
      </NavLink>
      <NavLink className="mobile-nav__item" title="Dashboard" to={WALLET_ROUTE}>
        Wallet
      </NavLink>
    </div>
  );
};

export default MobileNav;
