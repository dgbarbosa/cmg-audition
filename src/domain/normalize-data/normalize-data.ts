import { PRODUCT_NAMES } from "../enums/ProductNames";
import { findReference } from "../find-reference";
import { getProductHeader } from "../get-product-header";
import { getProductValue } from "../get-product-value";
import { isHeader } from "../is-header";

export type Log = { time: string; value: number };

export type NormalizedData = Array<{
  productName: PRODUCT_NAMES;
  title: string;
  reference: number;
  logs: Array<Log>;
}>;

export const normalizeData = (
  logs: Array<string>,
  references: Array<number>
): NormalizedData => {
  let currentProduct = {};
  let currentIndex = -1;

  return logs.reduce((prev, curr) => {
    if (isHeader(curr)) {
      currentIndex++;
      const { productName, title } = getProductHeader(curr);
      currentProduct = { productName, title, logs: [] };
      const reference = findReference(productName, references);

      prev[currentIndex] = { productName, title, reference, logs: [] };

      return prev;
    }

    prev[currentIndex].logs.push(getProductValue(curr));

    return prev;
  }, [] as NormalizedData);
};
