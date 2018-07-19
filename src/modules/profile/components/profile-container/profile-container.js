import React, { Component } from "react";
import { connect } from "react-redux";

import profileActions from "../../actions/profile-actions";
import Profile from "./profile/profile";
import ProfileModel, { constructFromObject } from "./profile/profile.model";
import {
  IProfileActions,
  IProfileFullProps,
  IProfileProps
} from "./profile/profile.type";

class ProfileContainer extends Component<IProfileFullProps> {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const { isPending, profile } = this.props;
    if (isPending || profile === undefined) {
      return null;
    }

    return (
      <div>
        <h1>Profile</h1>
        <Profile profile={profile} />
      </div>
    );
  }
}

const mapStateToProps = (state): IProfileProps => {
  const { isPending } = state.profileData.view;
  const profile = constructFromObject(
    new ProfileModel(),
    state.profileData.view.data
  );
  return { isPending, profile };
};

const mapDispatchToProps = (dispatch): IProfileActions => ({
  fetchProfile: () => {
    dispatch(profileActions.fetchProfile());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
