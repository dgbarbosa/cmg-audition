import { splitBySpace } from "../../utils";

type References = Array<number>

export const getReferences = (references: string): References => {
    const values = splitBySpace(references);
    values.shift();
  
    return values.map((value) => Number(value));
  };