import { connect } from "react-redux";
import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const AuthButtons = ({ match, isAuthenticated }) => {
  const routes = {
    login: "/login",
    signup: "/signup"
  };
  const authRoutes = [routes.login, routes.signup];
  if (authRoutes.some(x => match.url.match(x))) {
    return null;
  }

  if (isAuthenticated) {
    return <LogoutButton />;
  }
  return <LoginButton />;
};

const mapStateToProps = state => {
  const { authData } = state;
  const { isAuthenticated } = authData;

  return {
    isAuthenticated
  };
};

export default connect(mapStateToProps)(AuthButtons);
