import "./create-program-settings.scss";

import { GVButton } from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";

const CreateProgramSettings = ({ t, navigateToBroker }) => (
  <div className="create-program-settings">
    <div className="create-program-settings__list">settings</div>
    <div className="create-program-settings__navigation">
      <GVButton variant="text" onClick={navigateToBroker}>
        &larr; {t("buttons.back")}
      </GVButton>
    </div>
  </div>
);

export default translate()(CreateProgramSettings);
