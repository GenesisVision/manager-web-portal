import "./create-program-broker.scss";

import React from "react";
import { translate } from "react-i18next";

const CreateProgramBroker = ({ brokers, handleGoToSettings }) => (
  <div className="create-program-broker">
    <div className="create-program-broker__list" />
    <div className="create-program-broker__description">
      <div className="create-program-broker__description-title">alpari</div>
    </div>
  </div>
);

export default translate()(CreateProgramBroker);
