import "./broker-card.scss";

import classnames from "classnames";
import React from "react";
import { translate } from "react-i18next";

const BrokerCard = ({ broker, onChoose, isActive, disabled }) => {
  const className = classnames("broker-card", {
    "broker-card--active": isActive,
    "broker-card--disabled": disabled
  });

  return (
    <div
      className={className}
      onClick={!disabled && onChoose.bind(null, broker)}
    >
      <img
        src={
          broker.logo ||
          "https://forex-scam.net/wp-content/uploads/2016/07/alpari-3.png"
        }
        alt={broker.name}
      />
      {isActive && <div className="broker-card__active-mark"> &#10004;</div>}
    </div>
  );
};

export default translate()(BrokerCard);
