import "./app.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import platformActions from "../actions/platform-action";
import MobileNavContainer from "../components/mobile-nav/mobile-nav-container";
import PopupContainer from "../modules/popup/components/popup-container";
import AlertMessageList from "../shared/modules/alert-message/components/alert-message-list/alert-message-list";
import store from "../store/index";
import history from "../utils/history";
import AppRoutes from "./app.routes";
import Header from "./header/header";

class App extends Component {
  componentDidMount() {
    const { fetchPlatformSettings } = this.props;
    fetchPlatformSettings();
  }

  render() {
    return (
      <div className="app">
        <Route component={Header} />
        <MobileNavContainer />
        <div className="app__main">
          <div className="app__body">
            <AppRoutes />
          </div>
        </div>
        <AlertMessageList />
        <PopupContainer />
      </div>
    );
  }
}

const ConnectedApp = connect(
  null,
  dispatch => ({
    fetchPlatformSettings: () => dispatch(platformActions.fetchPlatformSettings)
  }),
  null,
  {
    pure: false
  }
)(App);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedApp />
    </ConnectedRouter>
  </Provider>
);

export default Root;
