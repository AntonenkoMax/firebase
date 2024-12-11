import { ErrorResult } from "services/types";

export interface ShoppingListState {
  error: ErrorResult | null;
  pending: boolean;
  shoppingList: ShoppingElement[] | [];
}

export interface ShoppingElement {
  id: number;
  name: string | null;
  quantity: number;
  category: CategoryEnum;
  isPurchased: boolean;
}

export enum CategoryEnum {
  FRUITS = "Fruits",
  DAIRY = "Dairy",
  VEGETABLES = "Vegetables",
}
