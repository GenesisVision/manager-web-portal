import { withFormik, Field } from "formik";
import React from "react";

import FormError from "../../../../shared/components/form/form-error/form-error";
import InputText from "../../../../shared/components/form/input-text/input-text";

import programCreateFormValidationSchema from "./program-create-form.validators";

const ProgramCreateForm = ({
  programForm,
  isSubmitting,
  handleSubmit,
  error,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  dirty
}) => {
  const brokerList = () => {
    const list = programForm.brokers.map(x => (
      <option key={x.id} value={x.id}>
        {x.name} ({x.host})
      </option>
    ));

    list.unshift(
      <option key="" value="" disabled hidden>
        Choose sever
      </option>
    );

    return list;
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Create Investment Program</h1>
      <div>
        <h2>Trader Settings</h2>
        <div className="row">
          <div className="col-2">Password</div>
          <div className="col-10">
            <Field
              type="password"
              name="tradePlatformPassword"
              placeholder="Trading Account Password"
              addon="fas fa-lock"
              component={InputText}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">Broker</div>
          <div className="col-10">
            <Field name="brokerTradeServerId" component="select">
              {brokerList()}
            </Field>
            {errors["brokerTradeServerId"] && (
              <div className="">{errors["brokerTradeServerId"]}</div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h2>Description</h2>
        <div className="row">
          <div className="col-md-4">Upoad Avatar</div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-2">Title</div>
              <div className="col-10">
                <Field
                  name="title"
                  placeholder="Title"
                  addon="fas fa-frown"
                  component={InputText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2">Description</div>
              <div className="col-10">
                <Field
                  component="textarea"
                  cols="80"
                  rows="4"
                  name="description"
                  placeholder="Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h2>Program Settings</h2>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">Reporting Period Length</div>
              <div className="col-6">
                <Field
                  type="number"
                  name="period"
                  placeholder="Reporting Period Length"
                  addon="fas fa-calendar"
                  component={InputText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">Date Start</div>
              <div className="col-6">
                <Field
                  type="date"
                  name="dateFrom"
                  placeholder="Date Start"
                  addon="fas fa-calendar-alt"
                  component={InputText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">Date End</div>
              <div className="col-6">
                <Field
                  type="date"
                  name="dateTo"
                  placeholder="Date End"
                  addon="fas fa-calendar-alt"
                  component={InputText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">Success Fee</div>
              <div className="col-6">
                <Field
                  type="number"
                  name="feeSuccess"
                  placeholder="Success Fee"
                  addon="fas fa-money-bill-alt"
                  component={InputText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">Management Fee</div>
              <div className="col-6">
                <Field
                  type="number"
                  name="feeManagement"
                  placeholder="Management Fee"
                  addon="fas fa-money-bill-alt"
                  component={InputText}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">Deposit Amount</div>
              <div className="col-6">
                <Field
                  type="number"
                  name="depositAmount"
                  placeholder="Deposit Amount"
                  addon="fas fa-question"
                  component={InputText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">Token Name</div>
              <div className="col-6">
                <Field
                  name="tokenName"
                  placeholder="Token Name"
                  addon="fas fa-question"
                  component={InputText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">Token Symbol</div>
              <div className="col-6">
                <Field
                  name="tokenSymbol"
                  placeholder="Token Symbol"
                  addon="fas fa-question"
                  component={InputText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormError error={error} />
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        Create Program
      </button>
    </form>
  );
};

export default withFormik({
  displayName: "programCreateForm",
  mapPropsToValues: () => ({
    tradePlatformPassword: "",
    brokerTradeServerId: "",
    title: "",
    description: "",
    depositAmount: "",
    tokenName: "",
    tokenSymbol: "",
    period: "",
    dateFrom: "",
    dateTo: "",
    feeSuccess: "",
    feeManagement: ""
  }),
  validationSchema: programCreateFormValidationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(ProgramCreateForm);
