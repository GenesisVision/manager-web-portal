import PropTypes from "prop-types";
import React, { Component } from "react";

import { profileApiProxy } from "../../services/api-client/profile-api";
import authService from "../../services/auth-service";
import AboutForm from "./about-form";

class About extends Component {
  state = {
    isPending: false,
    errorMessage: null
  };
  handleSubmit = values => {
    profileApiProxy.v10ProfileUpdatePost(authService.getAuthArg(), {
      model: values
    });
  };
  render() {
    return (
      <AboutForm
        onSubmit={this.handleSubmit}
        {...this.props}
        errorMessage={this.state.errorMessage}
        disabled={this.state.isPending}
      />
    );
  }
}

About.propTypes = {
  userName: PropTypes.string,
  about: PropTypes.string
};

export default About;
