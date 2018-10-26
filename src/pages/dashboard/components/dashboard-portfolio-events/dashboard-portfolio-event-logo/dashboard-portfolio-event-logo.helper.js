export const EventLogoType = {
  profit: "Profit",
  loss: "Loss",
  reinvest: "Reinvest",
  cancelled: "Cancelled",
  invest: "Invest",
  withdraw: "Withdraw",
  ended: "Ended"
};

export const composeEventLogoType = eventType => {
  const profitTypes = ["Withdraw", "Profit", "Cancelled", "Ended"];
  const lossTypes = ["Invest", "Loss"];
  if (profitTypes.includes(eventType)) return EventLogoType.profit;
  if (lossTypes.includes(eventType)) return EventLogoType.loss;
  return EventLogoType.reinvest;
};
