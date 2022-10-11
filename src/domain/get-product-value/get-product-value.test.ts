import { getProductValue } from "./get-product-value";

describe("get-product-value", () => {
  it("should return product value correctly", () => {
    const result = getProductValue("2007-04-05T22:00 72.4");
    expect(result).toEqual({ time: "2007-04-05T22:00", value: 72.4 });
  });
});
