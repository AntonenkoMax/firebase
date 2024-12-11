import { ShoppingElement } from "store/shopping-list/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export type ElementFormProps = {
  action: ActionCreatorWithPayload<ShoppingElement>;
  callback?: () => void;
  item?: ShoppingElement;
};
