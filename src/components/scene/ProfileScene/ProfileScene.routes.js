import { Switch } from "react-router-dom";
import React from "react";

import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ProfileFormContainer from "./ProfileFormContainer/ProfileFormContainer";
import routes from "../../../utils/constants/routes";
import Route from "react-router-dom/Route";

const ProfileRoutes = () => (
  <Switch>
    <Route exact path={routes.profile} component={ProfileContainer} />
    <Route path={`${routes.profile}/edit`} component={ProfileFormContainer} />
  </Switch>
);

export default ProfileRoutes;
