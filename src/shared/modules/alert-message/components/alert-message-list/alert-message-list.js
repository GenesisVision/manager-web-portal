import { Alert } from "reactstrap";
import { connect } from "react-redux";
import React, { Component } from "react";
import classnames from "classnames";
import "./alert-message-list.css";

import { alertMessageActions } from "../../actions/alert-message-actions";
import history from "../../../../../utils/history";
import Button from "../../../../../components/button/button";

const ClearAllButton = ({ onClick }) => (
  <div className="alert-message__clear-all">
    <Button secondary label="Clear" onClick={onClick} />
  </div>
);

const AlertMessage = ({ text, messageClass, onDismiss }) => (
  <Alert
    className={classnames("alert-message", messageClass)}
    color=""
    toggle={onDismiss}
  >
    <div>{text}</div>
  </Alert>
);

export class AlertMessageList extends Component {
  componentDidMount() {
    history.listen((location, action) => {
      this.props.clearAllMessages();
    });
  }

  render() {
    const { messages, removeMessage, clearAllMessages } = this.props;

    if (messages.length === 0) {
      return null;
    }

    const renderClearAllButton = messages.length > 1 && (
      <ClearAllButton onClick={clearAllMessages} />
    );
    const messageComponents = messages.map(message => (
      <AlertMessage
        key={message.id}
        messageClass={message.className}
        text={message.text}
        onDismiss={removeMessage(message.id)}
      />
    ));

    return (
      <div className="alert-message-list">
        {renderClearAllButton}
        {messageComponents}
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const messages = state.alertMessages;
  return { messages };
};

export const mapDispatchToProps = dispatch => ({
  removeMessage: id => () => {
    dispatch(alertMessageActions.remove(id));
  },
  clearAllMessages: () => {
    dispatch(alertMessageActions.clearAll());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessageList);
