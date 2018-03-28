import Yup from "yup";

import {
  emailValidator,
  passwordValidator
} from "../../../../shared/utils/validators/validators";

const confirmPasswordValidator = Yup.string()
  .oneOf([Yup.ref("password")], "Passwords don't match.")
  .required("Confirm Password is required");

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "User Name allowed from 3 to 20 characters")
    .max(20, "User Name allowed from 3 to 20 characters")
    .required("User Name is required"),
  email: emailValidator,
  password: passwordValidator,
  confirmPassword: confirmPasswordValidator
});

export default validationSchema;
