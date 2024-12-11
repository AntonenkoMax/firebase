import React, { useState, useEffect } from "react";

import { Flex, Text } from "components";
import { ElementForm, ItemCard } from "./components";
import { StyledListWrapper, StyledFormWrapper } from "./styled";
import { StyledSelect } from "./components/element-form/styled";

import { useAppSelector } from "store/store";
import { addItem } from "store/shopping-list";
import { CategoryEnum } from "store/shopping-list/types";

const Home: React.FC = () => {
  const list = useAppSelector((state) => state.shoppingList.shoppingList);

  const [selectOption, setSelectOption] = useState("All");
  const [filteredList, setFilteredList] = useState(list);

  const fruitValues = ["All", ...Object.values(CategoryEnum)];

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(e.target.value);

    if (Object.values(CategoryEnum).includes(e.target.value as CategoryEnum)) {
      const res = list.filter((item) => item.category === e.target.value);

      setFilteredList(res);
    } else {
      setFilteredList(list);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
      py="20px"
    >
      <Text mb="12px" as="h2">
        Add to shopping list
      </Text>

      <StyledFormWrapper>
        <ElementForm action={addItem} />
      </StyledFormWrapper>

      <Text mb="12px" as="h2">
        Shopping list
      </Text>

      <Flex width="320px" flexDirection="column" gap="8px">
        <label htmlFor="category" style={{ width: "100%" }}>
          Choose category
        </label>

        <StyledSelect
          name="category"
          value={selectOption}
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
      </Flex>

      <StyledListWrapper>
        {filteredList.length ? (
          filteredList.map((item, index) => {
            return <ItemCard key={item.id} listElement={item} />;
          })
        ) : (
          <Flex height="300px" justifyContent="center" alignItems="center">
            <Text as="h2">Ooops list is empty</Text>
          </Flex>
        )}
      </StyledListWrapper>
    </Flex>
  );
};

export default Home;
