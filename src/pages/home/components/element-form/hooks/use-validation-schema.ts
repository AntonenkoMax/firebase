import * as yup from "yup";

import { InitialValuesType } from "./types";
import { CategoryEnum } from "store/shopping-list/types";

export const initialValues: InitialValuesType = {
  name: "",
  quantity: "",
  category: CategoryEnum.FRUITS,
};

const useValidationSchema = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must contain more than 3 character")
      .required("This field is required"),
    quantity: yup
      .number()
      .integer("Must be an integer")
      .min(1, "Must be a positive number")
      .required("This field is required"),
    category: yup.string().required("This field is required"),
  });

  return { validationSchema, initialValues };
};

export default useValidationSchema;
