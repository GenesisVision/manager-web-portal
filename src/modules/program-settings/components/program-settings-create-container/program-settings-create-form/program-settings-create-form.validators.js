import Yup from "yup";

const programCreateFormValidationSchema = Yup.object().shape({
  tradePlatformPassword: Yup.string()
    .matches(
      /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){1,}).{8,16}$/,
      "Password must be at least 8 digits long. It must include at least one char and at least one number."
    )
    .max(16, "Password is very long")
    .required("Password is required"),
  brokerTradeServerId: Yup.string().required("Server is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  depositAmount: Yup.number().required("Deposit Amount is required"),
  tokenName: Yup.string().required("Token Name is required"),
  tokenSymbol: Yup.string().required("Token Symbol is required"),
  period: Yup.string().required("Period is required"),
  dateFrom: Yup.date(),
  dateTo: Yup.date(),
  feeSuccess: Yup.number(),
  feeManagement: Yup.number()
});

export default programCreateFormValidationSchema;
