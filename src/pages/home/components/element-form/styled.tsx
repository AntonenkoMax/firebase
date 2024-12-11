import styled from "styled-components";
import { Text } from "components";

export const StyledForm = styled.form`
  width: 288px;
`;

export const StyledErrorText = styled(Text)`
  color: red;
  text-align: start;
  width: 100%;
  margin-bottom: 14px;
  font-size: 12px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  margin-bottom: 14px;
  height: 44px;
  border-radius: 8px;
  padding: 0 10px 0 10px;
  font-size: 14px;
`;
