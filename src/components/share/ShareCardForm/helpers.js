import * as Yup from "yup";
import valid from "card-validator";

export const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  cardNumber: Yup.string()
    .required("required")
    .test(
      "is-valid-card",
      // eslint-disable-next-line
      "${path} is not valid",
      (value) => valid.number(value).isValid
    ),
  expireDate: Yup.string()
    .required("required")
    .matches(/^(?:0[1-9]|1[012])\/(?:0[1-9]|[12][0-9]|3[01])/, " do not match"),
  cvc: Yup.number().required("required"),
});
