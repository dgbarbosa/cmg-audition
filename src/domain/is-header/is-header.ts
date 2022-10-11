import { splitBySpace } from "../../utils";
import { productNames } from "../constants";
import { PRODUCT_NAMES } from "../enums/ProductNames";

export const isHeader = (value: string): boolean => {
    const productName = splitBySpace(value)[0] as PRODUCT_NAMES;
    return productNames.includes(productName);
  };