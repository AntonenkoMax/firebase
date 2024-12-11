import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryEnum, ShoppingElement, ShoppingListState } from "./types";

const LSJson = localStorage.getItem("shop-list");

const setLS = (data: ShoppingElement[] | []) => {
  localStorage.setItem("shop-list", JSON.stringify(data));

  return data;
};

export const initialShoppingList = [
  {
    id: 1,
    name: "Orange",
    quantity: 2,
    category: CategoryEnum.FRUITS,
    isPurchased: false,
  },
  {
    id: 21,
    name: "Banana",
    quantity: 5,
    category: CategoryEnum.FRUITS,
    isPurchased: false,
  },
];

const initialState: ShoppingListState = {
  error: null,
  pending: false,
  shoppingList: LSJson ? setLS(JSON.parse(LSJson)) : setLS(initialShoppingList),
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetShoppingList: () => {
      return initialState;
    },
    addItem: (state, action: PayloadAction<ShoppingElement>) => {
      const newItem: ShoppingElement = {
        ...action.payload,
      };

      const LS = localStorage.getItem("shop-list");

      if (LS) {
        state.shoppingList = setLS([...JSON.parse(LS), newItem]);
      }
    },
    removeItem: (state, action: PayloadAction<ShoppingElement["id"]>) => {
      const LS = localStorage.getItem("shop-list");

      if (LS) {
        const newList = JSON.parse(LS).filter(
          (item: ShoppingElement) => item.id !== action.payload,
        );

        state.shoppingList = setLS(newList);
      }
    },
    editItem: (state, action: PayloadAction<ShoppingElement>) => {
      const LS = localStorage.getItem("shop-list");

      if (LS) {
        const newList = JSON.parse(LS).map((item: ShoppingElement) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          }
          return item;
        });

        state.shoppingList = setLS(newList);
      }
    },
    setIsPurchased: (state, action: PayloadAction<ShoppingElement["id"]>) => {
      const LS = localStorage.getItem("shop-list");

      if (LS) {
        const newList = JSON.parse(LS).map((item: ShoppingElement) => {
          if (item.id === action.payload) {
            return { ...item, isPurchased: !item.isPurchased };
          }
          return item;
        });

        state.shoppingList = setLS(newList);
      }
    },
  },
});

export const {
  resetShoppingList,
  addItem,
  removeItem,
  editItem,
  setIsPurchased,
} = shoppingListSlice.actions;

export default shoppingListSlice;
