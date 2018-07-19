import { connect } from "react-redux";

import loginService from "../../modules/login/service/login-service";
import Navigation from "./navigation";

const mapStateToProps = state => ({
  isAuthenticated: state.authData.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(loginService.logout());
  }
});

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Navigation);

export default NavigationContainer;
