export const getMean = (values: number[]) =>
  values.reduce((prev, curr) => prev + curr, 0) / values.length;