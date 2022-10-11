export const getStandardDeviation = (values: number[], mean: number) =>
  Math.sqrt(
    values.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) /
      values.length
  );
