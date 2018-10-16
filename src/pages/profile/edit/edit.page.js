import Page from "components/page/page";
import ProfileContainer from "modules/profile/profile-container";
import ProfileForm from "modules/profile/profile-form";
import React from "react";
import { translate } from "react-i18next";

import NavigationBackButton from "../../../modules/navigation-back-button/navigation-back-button";

const ProfileEditPage = ({ t }) => {
  return (
    <Page title={t("profile.title")}>
      <NavigationBackButton />
      <ProfileContainer>
        <ProfileForm />
      </ProfileContainer>
    </Page>
  );
};

export default translate()(ProfileEditPage);
