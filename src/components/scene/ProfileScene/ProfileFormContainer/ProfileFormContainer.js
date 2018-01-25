import { connect } from "react-redux";
import { SubmissionError } from "redux-form";
import React from "react";

import { profileEditActions } from "../../../../actions/profileActions/profileEditActions";
import { profileViewActions } from "../../../../actions/profileActions/profileViewActions";
import ProfileForm from "./ProfileForm/ProfileForm";

const ProfileFormContainer = props => {
  return <ProfileForm {...props} />;
};

const mapStateToProps = state => {
  const { isFetching, profile } = state.profileData;
  return { isFetching, profile };
};

const mapDispatchToProps = dispatch => ({
  getProfile: async () => {
    const profile = await dispatch(profileViewActions.getProfile());
    return { profile };
  },
  handleSave: async profile => {
    try {
      await dispatch(profileEditActions.updateProfile(profile));
    } catch (e) {
      throw new SubmissionError({
        _error: e.message
      });
    }
  },
  handleCancel: () => {
    profileEditActions.cancelChanges();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileFormContainer
);
