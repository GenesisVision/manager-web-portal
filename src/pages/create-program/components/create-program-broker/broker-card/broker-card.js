import "./broker-card.scss";

import classnames from "classnames";
import React from "react";
import { translate } from "react-i18next";

const BrokerCard = ({ t, broker, onChoose, isActive, isComingSoon }) => {
  const className = classnames("broker-card", {
    "broker-card--active": isActive,
    "broker-card--coming-soon": isComingSoon
  });
  let logoClassName = classnames("broker-card__logo", {
    ["broker-card__logo--" + broker.name]: isComingSoon
  });

  return (
    <div
      className={className}
      onClick={!isComingSoon && onChoose.bind(null, broker)}
    >
      <img
        className={logoClassName}
        src={
          broker.logo ||
          "https://forex-scam.net/wp-content/uploads/2016/07/alpari-3.png"
        }
        alt={broker.name}
      />
      {isComingSoon && (
        <div className="broker-card__coming-soon-text">
          {t("create-program-page.broker-card.coming-soon")}
        </div>
      )}
      {isActive && <div className="broker-card__active-mark"> &#10004;</div>}
    </div>
  );
};

export default translate()(BrokerCard);
