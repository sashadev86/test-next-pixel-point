import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .email("Incorrect email format")
      .required("Email is a required field"),
  })
  .required();
