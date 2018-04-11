import classnames from "classnames";
import moment from "moment";
import NumberFormat from "react-number-format";
import React, { Component } from "react";

import ExpandIcon from "./expand-icon";
import ProgramDealDetail from "./program-deal-detail/program-deal-detail";

import "./program-deal.css";

class ProgramDeal extends Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { deal, serverType, currency } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="program-deal">
        <div className="program-deal__short-info">
          <div
            className={classnames({
              "program-deal__expand": true,
              "program-deal__expand--open": isOpen
            })}
            onClick={this.toggleOpen}
          >
            <ExpandIcon />
          </div>
          <div className="program-deal__info">
            <div className="program-deal__cell">
              <div className="metric">
                <div className="metric__value">{deal.symbol}</div>
                <div className="metric__description">Symbol</div>
              </div>
            </div>
            <div className="program-deal__cell">
              <div className="metric">
                <div className="metric__value">{deal.volume}</div>
                <div className="metric__description">Volume</div>
              </div>
            </div>
            <div className="program-deal__cell">
              <div className="metric">
                <div className="metric__value">
                  <NumberFormat
                    value={deal.profit}
                    // decimalScale={2}
                    displayType="text"
                  />
                  <div className="metric__bubble">{currency}</div>
                </div>
                <div className="metric__description">Profit</div>
              </div>
            </div>
            <div className="program-deal__cell">
              <div className="metric">
                <div className="metric__value">{deal.direction}</div>
                <div className="metric__description">Direction</div>
              </div>
            </div>
          </div>
          <div className="program-deal__date">
            {deal.date && moment(deal.date).format("MMM Do YYYY")}
            {deal.dateOpen && moment(deal.dateOpen).format("MMM Do YYYY")}
          </div>
        </div>
        {isOpen && (
          <div className="program-deal__detail">
            <ProgramDealDetail deal={deal} serverType={serverType} />
          </div>
        )}
      </div>
    );
  }
}

export default ProgramDeal;
