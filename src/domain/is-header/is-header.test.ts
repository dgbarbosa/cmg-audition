import { isHeader } from "./is-header";

describe("is-header", () => {
  it("should say if is a valid header correctly", () => {
    const result = isHeader("thermometer temp-1");
    expect(result).toBeTruthy();
  });

  it("should say if is a not valid header correctly", () => {
    const result = isHeader("reference 70.0 45.0 6");
    expect(result).toBeFalsy();
  });
});
