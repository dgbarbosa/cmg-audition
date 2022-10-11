import { PRODUCT_NAMES } from "../enums/ProductNames"
import { findReference } from "./find-reference"

describe('find-reference', () => {
    const references = [1,2,3]

    it('should return right reference for thermometer', () => {
        const result = findReference(PRODUCT_NAMES.Thermometer,references)
        expect(result).toEqual(1)
    })

    it('should return right reference for humidity', () => {
        const result = findReference(PRODUCT_NAMES.Humidity,references)
        expect(result).toEqual(2)
    })

    it('should return right reference for monoxide', () => {
        const result = findReference(PRODUCT_NAMES.Monoxide,references)
        expect(result).toEqual(3)
    })
})