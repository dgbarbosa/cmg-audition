import { getProductHeader } from "./get-product-header";

describe("get-product-header", () => {
  it("should return header correctly", () => {
    const result = getProductHeader("thermometer temp-1");
    expect(result).toEqual({ productName: "thermometer", title: "temp-1" });
  });
});
