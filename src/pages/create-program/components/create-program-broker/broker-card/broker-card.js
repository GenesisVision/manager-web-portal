import "./broker-card.scss";

import classnames from "classnames";
import React from "react";
import { translate } from "react-i18next";

const BrokerCard = ({ broker, onChoose, isActive }) => {
  const className = classnames("broker-card", {
    "broker-card--active": isActive
  });

  return (
    <div className={className} onClick={onChoose.bind(null, broker)}>
      {broker.name}
      {isActive && <div className="broker-card__active-mark"> &#10004;</div>}
    </div>
  );
};

export default translate()(BrokerCard);
