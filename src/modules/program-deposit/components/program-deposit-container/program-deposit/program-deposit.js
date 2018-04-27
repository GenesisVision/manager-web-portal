import { withFormik, Field } from "formik";
import React from "react";
import Yup from "yup";

import DaysLeftWidget from "../../../../../components/days-left-widget/days-left-widget";
import FormError from "../../../../../shared/components/form/form-error/form-error";
import InputText from "../../../../../shared/components/form/input-text/input-text";
import PopupButtons from "../../../../popup/components/popup-buttons/popup-buttons";
import PopupHeader from "../../../../popup/components/popup-header/popup-header";
import TraderAvatar from "../../../../../components/program-avatar/program-avatar";

import "./program-deposit.css";

const ProgramDeposit = ({
  values,
  programDeposit,
  isSubmitting,
  handleSubmit,
  closePopup,
  error
}) => {
  const calculateManagerCurrency = () => {
    return ((+values.amount || 0) * programDeposit.gvtRate).toFixed(2);
  };
  return (
    <div className="popup">
      <PopupHeader header="Deposit" onClose={closePopup} />
      <form id="programDepositForm" onSubmit={handleSubmit}>
        <div className="program-deposit__info">
          <div className="program-deposit__info-cell">
            <div className="program-deposit__trader">
              <div className="trader-deposit__avatar">
                <TraderAvatar
                  imgUrl={programDeposit.logo}
                  level={programDeposit.level}
                />
              </div>
              <div className="program-deposit__name">
                {programDeposit.title}
              </div>
            </div>
          </div>
          <div className="program-deposit__info-cell">
            <div className="program-deposit__days-left">
              <DaysLeftWidget
                start={programDeposit.startOfPeriod}
                duration={programDeposit.periodDuration}
              />
            </div>
          </div>
          <div className="program-deposit__info-cell program-deposit__available">
            <div className="metric">
              <div className="metric__value">
                {programDeposit.gvtWalletAmount}
              </div>
              <div className="metric__description">Available GVT</div>
            </div>
          </div>
        </div>
        <div className="program-deposit__calculator">
          <div className="program-deposit__calculator-cell input-gvt">
            <div className="input-gvt__value">
              <Field
                number
                name="amount"
                placeholder="0"
                controllClass="input-gvt__amount"
                component={InputText}
                decimalScale={2}
                allowNegative={false}
              />
            </div>
            <div className="input-gvt__description">Enter GVT amount</div>
          </div>
          <div className="program-deposit__calculator-cell calculated-usd">
            <div className="metric">
              <div className="metric__value label-usd__value">
                {calculateManagerCurrency()}
              </div>
              <div className="metric__description">
                Amount in {programDeposit.currency}
              </div>
            </div>
          </div>
        </div>

        <FormError error={error} />
        <PopupButtons
          submitLabel="Deposit"
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onCancel={closePopup}
          submitButtonId="programDepositSubmit"
        />
      </form>
    </div>
  );
};

export default withFormik({
  displayName: "traderDepositForm",
  mapPropsToValues: () => ({
    amount: ""
  }),
  validationSchema: ({ programDeposit: { gvtWalletAmount } }) => {
    const scheme = Yup.object().shape({
      amount: Yup.number()
        .typeError("Amount must be a number.")
        .moreThan(0, "Amount must be greater than zero")
        .max(
          gvtWalletAmount,
          "Amount must be less than or equal to Available GVT"
        )
        .required("Amount is required.")
    });
    return scheme;
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    props.submitPopup(values, setSubmitting);
  }
})(ProgramDeposit);
