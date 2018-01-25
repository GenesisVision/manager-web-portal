//@flow
import React, { Component } from "react";

import LinkButton from "../../../../common/LinkButton/LinkButton";
import type { IProfileFullProps } from "./Profile.type";

class Profile extends Component<IProfileFullProps> {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const { isFetching, profile } = this.props;
    if (!profile || isFetching) return null;

    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="rounded img-fluid"
          />
        </div>
        <div className="col-sm-6 col-md-8">
          <h1>{profile.name}</h1>
          <div>Birthday: {profile.birthday}</div>
          <div className="mb-4">Passport No: {profile.passportNo}</div>
          <LinkButton to={"/profile/edit"} className="btn btn-primary">
            Edit Profile
          </LinkButton>
        </div>
      </div>
    );
  }
}

export default Profile;
