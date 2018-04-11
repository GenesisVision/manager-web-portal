import React from "react";
import "./program-deal-detail.css";
import moment from "moment";
import NumberFormat from "react-number-format";

const ProgramDealDetailMT4 = ({ deal }) => {
  return (
    <div className="program-deal-detail">
      <div className="program-deal__cell">
        <div className="metric">
          <div className="metric__value">{deal.ticket}</div>
          <div className="metric__description">Ticket</div>
        </div>
      </div>
      <div className="program-deal__cell">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={deal.priceOpen}
              // decimalScale={2}
              displayType="text"
            />
          </div>
          <div className="metric__description">Price Open</div>
        </div>
      </div>
      {deal.priceClose && (
        <div className="program-deal__cell">
          <div className="metric">
            <div className="metric__value">
              <NumberFormat
                value={deal.priceClose}
                // decimalScale={2}
                displayType="text"
              />
            </div>
            <div className="metric__description">Price Close</div>
          </div>
        </div>
      )}
      <div className="program-deal__cell">
        <div className="metric">
          <div className="metric__value">
            {moment(deal.dateOpen).format("L")}
          </div>
          <div className="metric__description">Date Open</div>
        </div>
      </div>
      {deal.dateClose && (
        <div className="program-deal__cell">
          <div className="metric">
            <div className="metric__value">
              {moment(deal.dateClose).format("L")}
            </div>
            <div className="metric__description">Date Close</div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProgramDealDetailMT5 = ({ deal }) => {
  return (
    <div className="program-deal-detail">
      <div className="program-deal__cell">
        <div className="metric">
          <div className="metric__value">{deal.ticket}</div>
          <div className="metric__description">Ticket</div>
        </div>
      </div>
      <div className="program-deal__cell">
        <div className="metric">
          <div className="metric__value">
            <NumberFormat
              value={deal.price}
              //decimalScale={2}
              displayType="text"
            />
          </div>
          <div className="metric__description">Price</div>
        </div>
      </div>
      <div className="program-deal__cell">
        <div className="metric">
          <div className="metric__value">{moment(deal.date).format("L")}</div>
          <div className="metric__description">Date</div>
        </div>
      </div>
      <div className="program-deal__cell">
        <div className="metric">
          <div className="metric__value">{deal.entry}</div>
          <div className="metric__description">Entry</div>
        </div>
      </div>
    </div>
  );
};

const ProgramDealDetail = ({ deal, serverType }) => {
  if (serverType === "MetaTrader4") return <ProgramDealDetailMT4 deal={deal} />;
  return <ProgramDealDetailMT5 deal={deal} />;
};

export default ProgramDealDetail;
