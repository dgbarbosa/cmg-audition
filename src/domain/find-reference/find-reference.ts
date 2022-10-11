import { productNames } from "../constants"
import { PRODUCT_NAMES } from "../enums/ProductNames"

export const findReference = (productName: PRODUCT_NAMES, references: number[]): number => {
    const index = productNames.findIndex((value) => value === productName)
    return references[index]
  }