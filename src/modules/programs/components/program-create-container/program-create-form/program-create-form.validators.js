import Yup from "yup";

import { passwordValidator } from "../../../../../shared/utils/validators/validators";

const programCreateFormValidationSchema = Yup.object().shape({
  password: passwordValidator
});

export default programCreateFormValidationSchema;
