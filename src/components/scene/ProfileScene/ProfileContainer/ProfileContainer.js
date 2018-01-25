//@flow
import { connect } from "react-redux";
import React from "react";

import { profileViewActions } from "../../../../actions/profileActions/profileViewActions";
import Profile from "./Profile/Profile";
import type {
  IProfileFullProps,
  IProfileProps,
  IProfileActions
} from "./Profile/Profile.type";

const ProfileContainer = (props: IProfileFullProps) => {
  return <Profile {...props} />;
};

const mapStateToProps = (state): IProfileProps => {
  const { isFetching, profile } = state.profileData;
  return { isFetching, profile };
};

const mapDispatchToProps = (dispatch): IProfileActions => ({
  fetchProfile: async () => dispatch(profileViewActions.fetchProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
