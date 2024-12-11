import React, { useEffect } from "react";
import { toast } from "react-toastify";

import { useValidationSchema } from "./index";
import useForm from "hooks/use-form";

import { useAppDispatch } from "store/store";
import { CategoryEnum } from "store/shopping-list/types";
import { ElementFormProps } from "../types";

export const useHandleData = ({ action, callback, item }: ElementFormProps) => {
  const dispatch = useAppDispatch();

  const fruitValues = Object.values(CategoryEnum);

  const { validationSchema, initialValues } = useValidationSchema();

  const {
    fieldProps,
    handleSubmit,
    errors,
    isValid,
    touched,
    values,
    setFieldValue,
    setFieldTouched,
    resetForm,
  } = useForm({
    initialValues,
    validationSchema,
    onSubmit(values) {
      dispatch(
        action({
          name: values.name,
          quantity: +values.quantity,
          category: values.category as CategoryEnum,
          id: item ? item.id : Date.now(),
          isPurchased: item ? item.isPurchased : false,
        }),
      );

      resetForm();
      callback?.();

      toast.success("Success!!!");
    },
  });

  useEffect(() => {
    const setValues = async () => {
      if (item) {
        await setFieldValue("name", item.name);
        await setFieldTouched("name", true);

        await setFieldValue("quantity", item.quantity);
        await setFieldTouched("quantity", true);

        await setFieldValue("category", item.category);
        await setFieldTouched("category", true);
      }
    };

    setValues();
  }, [item, setFieldTouched, setFieldValue]);

  const onSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    await setFieldValue("category", event.target.value);
  };

  return {
    fieldProps,
    errors,
    touched,
    values,
    fruitValues,
    isValid,
    handleSubmit,
    onSelectChange,
  };
};
