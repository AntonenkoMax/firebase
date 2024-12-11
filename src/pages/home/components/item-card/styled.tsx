import styled from "styled-components";
import { Text } from "components";
import { baseColors } from "styles/colors";

export const StyledItemCard = styled.div<{ isPurchased: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid ${baseColors.primary};
  border-radius: 12px;
  background-color: ${({ isPurchased }) =>
    isPurchased ? `${baseColors.regular}20` : baseColors.white};
  box-shadow: 5px 5px 5px ${baseColors.primary}30;
`;

export const StyledValueNameText = styled(Text)`
  color: ${baseColors.regular};
  text-align: start;
`;
