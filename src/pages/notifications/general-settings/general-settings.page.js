import Page from "components/page/page";
import NotificationSettingsContainer from "modules/notification-settings/notification-settings-container";
import React from "react";
import { translate } from "react-i18next";

import NavigationBackButton from "../../../modules/navigation-back-button/navigation-back-button";

const NotificationsPage = ({ t }) => {
  return (
    <Page title={t("notifications.title")}>
      <NavigationBackButton />
      <h1>{t("notifications.title")}</h1>
      <NotificationSettingsContainer />
    </Page>
  );
};
export default translate()(NotificationsPage);
