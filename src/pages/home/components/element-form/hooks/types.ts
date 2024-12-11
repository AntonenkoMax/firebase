import { CategoryEnum } from "store/shopping-list/types";

export type InitialValuesType = {
  name: string;
  quantity: string;
  category: CategoryEnum | string;
};
