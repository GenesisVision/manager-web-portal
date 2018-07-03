import "./wallet-buttons.css";

import React from "react";

import Button from "../../../../../../../components/button/button";

const WalletButtons = () => {
  return (
    <div className="wallet-buttons">
      <Button label="Deposit" primary disabled />
      <Button label="Withdraw" secondary disabled />
    </div>
  );
};

export default WalletButtons;
