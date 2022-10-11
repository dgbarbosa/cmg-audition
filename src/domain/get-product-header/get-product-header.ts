import { splitBySpace } from "../../utils";
import { PRODUCT_NAMES } from "../enums/ProductNames";

export type ProductHeader = { title: string; productName: PRODUCT_NAMES };

export const getProductHeader = (value: string): ProductHeader => {
  const result = splitBySpace(value);
  return {
    title: result[1],
    productName: result[0] as PRODUCT_NAMES,
  };
};
