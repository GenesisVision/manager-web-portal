import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./pi-bookmark.css";

const PIBookmark = ({
  isFavorite,
  toggleFavorite = () => {
    console.info(arguments);
  }
}) => {
  return (
    <i
      onClick={toggleFavorite}
      className={classnames("fas fa-bookmark", "pi-bookmark", {
        "pi-bookmark_active": isFavorite
      })}
    />
  );
};

PIBookmark.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default PIBookmark;
