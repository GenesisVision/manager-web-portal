import React, { Component } from "react";
import { connect } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import AlertMessageList from "../shared/modules/alert-message/components/alert-message-list/alert-message-list";
import Header from "./header/header";
import history from "../utils/history";
import PopupContainer from "../modules/popup/components/popup-container";
import Sidebar from "./sidebar/sidebar";
import store from "../store/index";

import "./app.css";
import AppRoutes from "./app.routes";

import { updatePlatformStatus } from "../actions/platform-status-action";

class App extends Component {
  componentWillMount() {
    const { updatePlatformStatus } = this.props;
    updatePlatformStatus();
  }

  render() {
    return (
      <div>
        <Route component={Header} />
        <div className="app__main">
          <div className="app__sidebar">
            <Sidebar />
          </div>
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

const ConnectedApp = connect(undefined, { updatePlatformStatus })(App);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedApp />
    </ConnectedRouter>
  </Provider>
);

export default Root;
