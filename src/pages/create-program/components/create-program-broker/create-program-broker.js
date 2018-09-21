import "./create-program-broker.scss";

import Surface from "components/surface/surface";
import { GVButton } from "gv-react-components";
import React from "react";
import { translate } from "react-i18next";

import BrokerCard from "./broker-card/broker-card";

const CreateProgramBroker = ({
  t,
  brokers,
  navigateToSettings,
  choosedBroker,
  chooseBroker
}) => (
  <div className="create-program-broker">
    <div className="create-program-broker__list">
      {brokers.map(broker => (
        <BrokerCard
          broker={broker}
          isActive={broker === choosedBroker}
          onChoose={chooseBroker}
        />
      ))}
    </div>
    <Surface className="create-program-broker__description">
      <div className="create-program-broker__description-heading">
        {choosedBroker.name}
      </div>
      <div className="create-program-broker__about">
        <div className="create-program-broker__info-title">
          {t("create-program-page.broker-info.about")}
        </div>
        <div className="create-program-broker__info-text">
          {choosedBroker.description}
        </div>
      </div>
      <div className="create-program-broker__terms">
        <div className="create-program-broker__info-title">
          {t("create-program-page.broker-info.terms")}
        </div>
        <div className="create-program-broker__info-text">
          {choosedBroker.terms}
        </div>
      </div>
      <div className="create-program-broker__leverage">
        <div className="create-program-broker__info-title">
          {t("create-program-page.broker-info.leverage")}
        </div>
        <div className="create-program-broker__info-text">1:2 - 1:1000</div>
      </div>
      <div className="create-program-broker__fee">
        <div className="create-program-broker__info-title">
          {t("create-program-page.broker-info.fee")}
        </div>
        <div className="create-program-broker__info-text">2.5%</div>
      </div>
      <div className="create-program-broker__assets">
        <div className="create-program-broker__info-title">
          {t("create-program-page.broker-info.assets")}
        </div>
        <div className="create-program-broker__info-text">USD, BTC, ETH</div>
      </div>
    </Surface>
    <div className="create-program-broker__navigation">
      <GVButton color="primary" type="contained" onClick={navigateToSettings}>
        {t("buttons.continue")}
      </GVButton>
    </div>
  </div>
);

export default translate()(CreateProgramBroker);
