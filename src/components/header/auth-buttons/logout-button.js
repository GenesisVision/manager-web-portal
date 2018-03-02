import { connect } from "react-redux";
import React from "react";

import loginActions from "../../../modules/login/actions/login-actions";

const LogoutButton = ({ username, logoutUser }) => (
  <div>
    <span>{username}</span>
    <button
      className="btn btn-outline-success my-2 my-sm-0"
      onClick={() => {
        logoutUser();
      }}
    >
      Log Out
    </button>
  </div>
);

const mapStateToProps = state => {
  const { username } = state.authData;
  return { username };
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(loginActions.logoutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
