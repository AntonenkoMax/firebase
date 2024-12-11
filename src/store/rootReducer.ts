import { combineReducers } from "@reduxjs/toolkit";
import shoppingList from "./shopping-list";

export const rootReducer = combineReducers({
  [shoppingList.name]: shoppingList.reducer,
});

export default rootReducer;
