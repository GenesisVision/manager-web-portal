import Page from "components/page/page";
import React from "react";
import { translate } from "react-i18next";

import NavigationBackButton from "../../../modules/navigation-back-button/navigation-back-button";
import ProgramNotificationsContainer from "../../../modules/program-notifications/program-notifications-container";

const ProgramNotificationPage = ({ t, match }) => {
  const { id } = match.params;
  return (
    <Page title={t("notifications.program.title")}>
      <NavigationBackButton />
      <h1>{t("notifications.program.title")}</h1>
      <ProgramNotificationsContainer id={id} />
    </Page>
  );
};

export default translate()(ProgramNotificationPage);
