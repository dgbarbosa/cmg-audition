import { splitBySpace } from "../../utils";

export type ProductValue = { time: string, value: number }

export const getProductValue = (value: string): ProductValue => ({
    time: splitBySpace(value)[0],
    value: Number(splitBySpace(value)[1])
});
