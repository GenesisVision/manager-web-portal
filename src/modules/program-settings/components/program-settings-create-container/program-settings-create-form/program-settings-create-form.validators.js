import Yup from "yup";

const programCreateFormValidationSchema = Yup.object().shape({
  tradePlatformPassword: Yup.string()
    .matches(
      /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){1,}).{8,16}$/,
      "Password must be at least 8 digits long. It must include at least one char and at least one number."
    )
    .max(16, "Password is very long")
    .required("Password is required"),
  confirmTradePlatformPassword: Yup.string()
    .oneOf([Yup.ref("tradePlatformPassword")], "Passwords don't match.")
    .required("Confirm Password is required"),
  brokerTradeServerId: Yup.string().required("Server is required"),
  leverage: Yup.string().required("Leverage is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  depositAmount: Yup.number()
    .typeError("Deposit Amount must be a number")
    .positive("Deposit Amount must be a positive number")
    .required("Deposit Amount is required"),
  tokenName: Yup.string().required("Token Name is required"),
  tokenSymbol: Yup.string().required("Token Symbol is required"),
  period: Yup.string().required("Period is required"),
  dateFrom: Yup.object().nullable(),
  feeSuccess: Yup.number()
    .typeError("Success Fee must be a number")
    .positive("Success Fee must be a positive number"),
  feeManagement: Yup.number()
    .typeError("Management Fee must be a number")
    .positive("Management Feet must be a positive number")
});

export default programCreateFormValidationSchema;
