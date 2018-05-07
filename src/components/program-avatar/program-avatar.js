import classnames from "classnames";
import React from "react";

import "./program-avatar.css";
import avatarStub from "../../shared/media/manager-avatar.png";

const ProgramAvatar = ({ imgUrl, level, className }) => {
  return (
    <div className={classnames("program-avatar", className)}>
      <img
        className="program-avatar__image"
        src={imgUrl || avatarStub}
        alt="Trader Avatar"
      />
      <span className="program-avatar__level">{level}</span>
    </div>
  );
};

export default ProgramAvatar;
