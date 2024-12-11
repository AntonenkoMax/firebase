import React, { useState } from "react";

import { Button, Flex, Text } from "components";
import { StyledItemCard, StyledValueNameText } from "./styled";
import { ElementForm } from "../index";

import { useAppDispatch } from "store/store";
import { editItem, removeItem, setIsPurchased } from "store/shopping-list";

import { ItemCardProps } from "./types";

const ItemCard: React.FC<ItemCardProps> = ({ listElement }) => {
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const removeElement = () => {
    dispatch(removeItem(listElement.id));
  };

  const setIsPurchasedHandler = () => {
    dispatch(setIsPurchased(listElement.id));
  };
  return (
    <StyledItemCard isPurchased={listElement.isPurchased}>
      <Flex flexDirection="column">
        <Flex gap="12px" alignItems="center" mb="12px">
          <StyledValueNameText> Name:</StyledValueNameText>
          <Text> {listElement.name}</Text>
        </Flex>

        <Flex gap="12px" alignItems="center" mb="12px">
          <StyledValueNameText> Quantity:</StyledValueNameText>
          <Text> {listElement.quantity}</Text>
        </Flex>

        <Flex gap="12px" alignItems="center" mb="12px">
          <StyledValueNameText> Category:</StyledValueNameText>
          <Text> {listElement.category}</Text>
        </Flex>

        <Flex gap="12px" alignItems="center" mb="12px">
          <StyledValueNameText> Purchased:</StyledValueNameText>
          <input
            type="checkbox"
            onChange={setIsPurchasedHandler}
            checked={listElement.isPurchased}
          />
        </Flex>
      </Flex>

      {isEditing ? (
        <Flex mb="24px">
          <ElementForm
            action={editItem}
            callback={() => setIsEditing(false)}
            item={listElement}
          />
        </Flex>
      ) : null}

      <Flex gap="12px">
        <Button
          width="100%"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          Edit
        </Button>

        <Button width="100%" color="red" onClick={removeElement}>
          Delete
        </Button>
      </Flex>
    </StyledItemCard>
  );
};

export default ItemCard;
