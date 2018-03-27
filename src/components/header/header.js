import LoadingBar from "react-redux-loading-bar";
import React from "react";

import AuthButtons from "./auth-buttons/auth-buttons";
import MenuLink from "./auth-buttons/menu-link";

const Header = props => {
  const { match } = props;
  const routes = {
    profile: "/profile",
    gvtWallet: "/wallet",
    traders: "/traders",
    investmentPrograms: "/investment-programs"
  };
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <span className="navbar-brand">Manager app</span>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <MenuLink url={routes.profile} name="Profile" match={match} />
            <MenuLink url={routes.traders} name="Traders" match={match} />
            <MenuLink
              url={routes.investmentPrograms}
              name="Investment Programs"
              match={match}
            />
            <MenuLink url={routes.gvtWallet} name="GVT Wallet" match={match} />
          </ul>
          <AuthButtons {...props} />
        </div>
      </nav>
      <LoadingBar style={{ backgroundColor: "#17a2b8" }} />
    </header>
  );
};

export default Header;