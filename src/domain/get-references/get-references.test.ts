import { getReferences } from "./get-references";

describe("get-references", () => {
  it("should return references correctly", () => {
    const result = getReferences("reference 70.0 45.0 6");
    expect(result).toEqual([70, 45, 6]);
  });
});
