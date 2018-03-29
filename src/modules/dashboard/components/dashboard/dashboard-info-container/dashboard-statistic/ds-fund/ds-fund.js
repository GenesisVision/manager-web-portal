import React from "react";

const DSFund = ({ funds }) => {
  return (
    <div className="dashboard-card__body card-body">
      <div className="dashboard-card__header">Funds</div>
      <div className="dashboard-card__image">Image</div>
      <div className="dashboard-card__value">{funds[0].title}</div>
    </div>
  );
};

export default DSFund;
