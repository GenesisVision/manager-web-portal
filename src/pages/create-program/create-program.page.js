import "./program-details-history.scss";

import Surface from "components/surface/surface";
import React, { Component } from "react";
import { translate } from "react-i18next";

import CreateProgramContainer from "./create-program.container";

class CreateProgramPage extends Component {
  render() {
    return (
      <Surface className="program-details-history">
        <div className="program-details-history__header">
          <h2>History</h2>
        </div>
        <CreateProgramContainer />
      </Surface>
    );
  }
}

export default translate()(CreateProgramPage);
