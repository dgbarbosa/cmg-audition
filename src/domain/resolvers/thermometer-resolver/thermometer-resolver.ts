import { getMean, getStandardDeviation } from "../../../utils";
import { Log } from "../../normalize-data";

const standards = [
  {
    label: "ultra precise",
    resolve: (mean: number, standardDeviation: number) =>
      mean <= 0.5 && standardDeviation < 3,
  },
  {
    label: "very precise",
    resolve: (mean: number, standardDeviation: number) =>
      mean <= 0.5 && standardDeviation < 5,
  },
  {
    label: "precise",
    resolve: () => true
  }
];

export const thermometerResolver = (
    reference: number,
    logs: Array<Log>
  ) => {
  
    let result
  
    const values = logs.map(el => el.value)
    const mean = getMean(values)
    const standardDeviation =getStandardDeviation(values,mean)
  
  
    standards.some((level) => {
      if(level.resolve(reference - mean,standardDeviation) === true) {
        result = level.label
        return true
      } 
    })
  
    return result;
  };