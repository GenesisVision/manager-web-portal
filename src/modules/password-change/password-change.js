import "./password-change.scss";

import authActions from "actions/auth-actions";
import PasswordChangeForm from "modules/password-change/password-change-form";
import { SETTINGS_ROUTE } from "pages/profile/profile.constants";
import React, { Component } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { compose } from "redux";
import { authApiProxy } from "services/api-client/auth-api";
import authService from "services/auth-service";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";

class PasswordChange extends Component {
  state = {
    isPending: false,
    data: null,
    errorMessage: null
  };

  success = text => {
    const { dispatch } = this.props;
    dispatch(alertMessageActions.success(text));
  };

  updateToken = token => {
    authService.storeToken(token);
    this.props.dispatch(authActions.updateToken());
    this.props.dispatch(push(SETTINGS_ROUTE));
    this.success(this.props.t("password-change.success-alert"));
  };

  handleSubmit = model => {
    this.setState({ isPending: true, errorMessage: null });
    authApiProxy
      .v10AuthPasswordChangePost(authService.getAuthArg(), {
        model
      })
      .then(({ data }) => {
        this.updateToken(data);
        this.setState({ isPending: false });
      })
      .catch(data => {
        this.setState({ ...data });
      });
  };

  render() {
    return (
      <PasswordChangeForm
        onSubmit={this.handleSubmit}
        isPending={this.state.isPending}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default compose(connect(), translate())(PasswordChange);
