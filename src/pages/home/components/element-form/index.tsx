import React from "react";

import { Box, Button, Input, Text } from "components";
import { StyledForm, StyledErrorText, StyledSelect } from "./styled";

import { useHandleData } from "./hooks";

import { ElementFormProps } from "./types";

const ElementForm: React.FC<ElementFormProps> = ({
  action,
  callback,
  item,
}) => {
  const {
    fieldProps,
    errors,
    touched,
    values,
    fruitValues,
    isValid,
    handleSubmit,
    onSelectChange,
  } = useHandleData({ action, callback, item });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Box>
        <Input mb="14px" placeholder={"Enter Name"} {...fieldProps("name")} />

        {errors.name && touched.name ? (
          <StyledErrorText>{errors.name}</StyledErrorText>
        ) : null}
      </Box>

      <Box>
        <Input
          mb="14px"
          placeholder={"Enter Quantity"}
          {...fieldProps("quantity")}
        />

        {errors.quantity && touched.quantity ? (
          <StyledErrorText>{errors.quantity}</StyledErrorText>
        ) : null}
      </Box>

      <Box>
        <Text textAlign="start" width="100%" mb="14px">
          Enter Category
        </Text>

        <StyledSelect
          name="category"
          value={values.category}
          onChange={(e) => onSelectChange(e)}
        >
          {fruitValues.map((key) => {
            return (
              <option value={key} key={key}>
                {key}
              </option>
            );
          })}
        </StyledSelect>

        {errors.category && touched.category ? (
          <StyledErrorText>{errors.category}</StyledErrorText>
        ) : null}
      </Box>

      <Button width="100%" type="submit" disabled={!isValid}>
        Save
      </Button>
    </StyledForm>
  );
};

export default ElementForm;
