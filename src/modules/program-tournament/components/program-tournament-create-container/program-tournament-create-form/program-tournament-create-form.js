import { translate } from "react-i18next";
import { withFormik, Field } from "formik";
import React from "react";

import FormError from "../../../../../shared/components/form/form-error/form-error";
import GVTextarea from "../../../../../shared/components/form/gv-textarea/gv-textarea";
import InputFile from "../../../../../shared/components/form/input-file/input-file";
import InputText from "../../../../../shared/components/form/input-text/input-text";
import managerAvatar from "../../../../../shared/media/manager-avatar.png";
import validateSchema from "./program-tournament-create-form.validators";
import "./program-tournament-create-form.css";

const ProgramTournamentCreateForm = ({
  t,
  isSubmitting,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  error,
  values,
  touched,
  errors
}) => {
  return (
    <form
      id="createProgramForm"
      onSubmit={handleSubmit}
      className="create-program-form tournament-form"
      noValidate
    >
      <div className="create-program-form__header">Create Program</div>
      <div className="create-program-form__program-detail">
        <div className="create-program-form__program-description">
          <Field
            name="logo"
            label="Program Logo"
            className="create-program-form__program-image"
            component={InputFile}
            defaultImage={managerAvatar}
          />
          <Field
            material
            name="title"
            label="Program Title"
            component={InputText}
          />
          <Field
            name="description"
            label="Description"
            component={GVTextarea}
          />
        </div>
        <div className="create-program-form__program-settings">
          <h3>Сontest conditions:</h3>
          <p>
            The competition will take place from May 14, 2018, to June 10, 2018,
            with registration slots being available from May 7 until June 3.
          </p>
          <p>
            It will consist of 4 week-long rounds. Each round will have 3
            different winners, making a total of 12 lucky managers. Registration
            for each round is permitted until 23:59 UTC on the day before it
            commences, with each round starting at 9:00 UTC.<br />If a
            participant is late for a particular round, he can still participate
            in the upcoming ones
          </p>
          <ul>
            <li>
              Participants will need to register a personal manager account and
              open a competitive program.
            </li>
            <li>
              If you already have an account, you can open a competitive program
              in your existing manager's account.
            </li>
            <li>It is prohibited to have multiple manager trading accounts.</li>
            <li>
              A manager can have up to 3 trading programs within a single
              manager account.
            </li>
            <li>
              A manager can participate in multiple rounds, in case he didn't
              win any of the previous ones. A manager can only win once.
            </li>
            <li>
              It is necessary to have an avatar and a description of the trading
              strategy you are applying to the trading account.
            </li>
            <li>
              The account will be created on Just2Trade broker, using the
              MetaTrader 5.
            </li>
            <li>The leverage is 1:10</li>
            <li>
              A fixed amount of $ 10,000 is credited to each participant's
              account.
            </li>
            <li>All of the participants start from the first level.</li>
            <li>Investors can invest in managers on general grounds.</li>
            <li>
              The use of automatic trading systems (Expert advisers - EA) is
              allowed.
            </li>
            <li>
              A manager must close or perform at least 20 trades on the
              competitive program.
            </li>
            <li>A reporting period is fixed and equals one single day. </li>
          </ul>
          <p>
            <strong>
              If you want to learn more information about the contest and the
              determination of winners, please familiarize yourself with{" "}
              <a href="">this article</a>.
            </strong>
          </p>
        </div>
      </div>
      <FormError error={error} />
      <button
        type="submit"
        id="createProgramSubmit"
        disabled={isSubmitting}
        className="btn btn-primary create-program-form__submit tournament-form__submit"
      >
        Create Tournament Account
      </button>
    </form>
  );
};

export default translate()(
  withFormik({
    mapPropsToValues: () => ({
      logo: {
        src: managerAvatar,
        filename: "image.png",
        filetype: "image/png",
        cropped: null
      },
      title: "",
      description: ""
    }),
    validationSchema: validateSchema,
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(values, setSubmitting);
    }
  })(ProgramTournamentCreateForm)
);
