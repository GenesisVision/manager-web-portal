import Yup from "yup";

import { passwordValidator } from "../../../../../shared/utils/validators/validators";

const programCreateFormValidationSchema = Yup.object().shape({
  tradePlatformPassword: passwordValidator,
  brokerTradeServerId: Yup.string().required("Server is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  depositAmount: Yup.number().required("Deposit Amount is required"),
  tokenName: Yup.string().required("Token Name is required"),
  tokenSymbol: Yup.string().required("Token Symbol is required"),
  period: Yup.number().required("Period is required"),
  dateFrom: Yup.date().required("Date From is required"),
  dateTo: Yup.date().required("Date To is required"),
  feeEntrance: Yup.number().required("Enterance Fee is required"),
  feeSuccess: Yup.number().required("Success Fee is required"),
  feeManagement: Yup.number().required("Management Fee is required"),
  investMinAmount: Yup.number().required("Invest Min Amount is required"),
  investMaxAmount: Yup.number().required("Invest Max Amount is required")
});

export default programCreateFormValidationSchema;
