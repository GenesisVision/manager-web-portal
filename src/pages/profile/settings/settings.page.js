import "./settings.scss";

import Page from "components/page/page";
import TwoFactorAuthContainer from "modules/2fa/2fa-container";
import React from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";

import About from "../../../modules/about/about";
import { PASSWORD_ROUTE } from "../profile.constants";
import ProfileImageContainer from "./profile-image/profile-image-container";

const SettingsPage = ({ t }) => {
  return (
    <Page title={t("profile.settings.title")}>
      <h1>Settings</h1>
      <div className="profile-settings__content">
        <TwoFactorAuthContainer />
        <ProfileImageContainer />
        <Link to={PASSWORD_ROUTE} className={"profile-settings__password"}>
          {`${t("profile.settings.change-password")} >`}
        </Link>
      </div>
    </Page>
  );
};

SettingsPage.propTypes = {};

export default translate()(SettingsPage);
