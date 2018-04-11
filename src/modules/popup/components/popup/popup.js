import { Modal } from "reactstrap";
import React from "react";

import "./popup.css";

import {
  TRADER_DEPOSIT_POPUP,
  TRADER_WITHDRAW_POPUP,
  TRADER_CLOSE_POPUP
} from "../../actions/popup-actions.constants";

import TraderDepositContainer from "../../../program-deposit/components/program-deposit-container/program-deposit-container";
import TraderWithdrawContainer from "../../../program-withdraw/components/program-withdraw-container/program-withdraw-container";
import TraderCloseContainer from "../../../program-close/components/program-close-container/program-close-container";
const POPUP_COMPONENTS = {
  [TRADER_DEPOSIT_POPUP]: TraderDepositContainer,
  [TRADER_WITHDRAW_POPUP]: TraderWithdrawContainer,
  [TRADER_CLOSE_POPUP]: TraderCloseContainer
};

const Popup = ({ isOpen, type, onSubmitPopup, onClosePopup, popupProps }) => {
  const SpecificPopup = POPUP_COMPONENTS[type];
  return (
    <Modal isOpen={isOpen} toggle={onClosePopup} className="popup-dialog">
      <SpecificPopup
        submitPopup={onSubmitPopup}
        closePopup={onClosePopup}
        {...popupProps}
      />
    </Modal>
  );
};

export default Popup;
