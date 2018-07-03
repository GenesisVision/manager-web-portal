import "./program-avatar.css";

import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const ProgramAvatar = ({ url, level, isTournament, className }) => {
  return (
    <div className={classnames("program-avatar", className)}>
      {isTournament && (
        <span className="program-avatar__label program-avatar__label--tournament">
          <i className="fas fa-trophy" />
        </span>
      )}
      <img className="program-avatar__image" src={url} alt="Trader Avatar" />
      <span className="program-avatar__label program-avatar__label--level">
        {level}
      </span>
    </div>
  );
};

ProgramAvatar.protoTypes = {
  url: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  isTournament: PropTypes.bool,
  className: PropTypes.string
};

export default ProgramAvatar;
