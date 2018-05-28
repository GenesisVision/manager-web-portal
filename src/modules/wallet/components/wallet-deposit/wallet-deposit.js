import { connect } from "react-redux";
import copy from "copy-to-clipboard";
import React from "react";

import QRCode from "qrcode.react";

import { alertMessageActions } from "../../../../shared/modules/alert-message/actions/alert-message-actions";
import walletActions from "../../actions/wallet-actions";
import Button from "../../../../components/button/button";

import "./wallet-deposit.css";

const WalletDeposit = ({
  isPending,
  address,
  fetchWalletAddress,
  showSuccessCopyMessage
}) => {
  if (isPending) {
    return null;
  }

  if (address === undefined) {
    fetchWalletAddress();
    return null;
  }

  const handleCopyAddress = () => {
    copy(address.address);
    showSuccessCopyMessage();
  };

  return (
    <div className="wallet-deposit d-flex flex-column align-items-center">
      <h1 className="m-4">Deposit</h1>
      <div className="m-3">
        <QRCode value={address} size={400} />
      </div>
      <h2>Your wallet address</h2>
      <p>{address.address}</p>
      <Button label="Copy" primary onClick={handleCopyAddress} />
    </div>
  );
};

const mapStateToProps = state => {
  const { isPending, data } = state.walletData.address;
  let address;
  if (data) {
    address = data;
  }
  return { isPending, address };
};

const mapDispatchToProps = dispatch => ({
  fetchWalletAddress: () => {
    dispatch(walletActions.fetchWalletAddress());
  },
  showSuccessCopyMessage: () => {
    dispatch(
      alertMessageActions.success(
        "Your wallet-pane number was copied to the clipboard successfully."
      )
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletDeposit);
