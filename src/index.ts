import { getReferences, normalizeData } from "./domain";
import { PRODUCT_NAMES } from "./domain/enums/ProductNames";
import { thermometerResolver,humidityResolver } from "./domain/resolvers";
import { monoxideResolver } from "./domain/resolvers/monoxide-resolver";
import { splitByLine } from "./utils";



export function evaluateLogFile(logContentsStr: string) {
  const logsByLine = splitByLine(logContentsStr);
  const references = getReferences(logsByLine.shift() as string) || [];
  const normalizedData = normalizeData(logsByLine, references);
  return normalizedData.reduce((prev, curr) => {
    if(curr.productName === PRODUCT_NAMES.Thermometer) {
      return {
        ...prev,
        [curr.title]: thermometerResolver(curr.reference,curr.logs)
      }
    }

    if(curr.productName === PRODUCT_NAMES.Humidity) {
      return {
        ...prev,
        [curr.title]: humidityResolver(curr.reference,curr.logs)
      }
    }

    if(curr.productName === PRODUCT_NAMES.Monoxide) {
      return {
        ...prev,
        [curr.title]: monoxideResolver(curr.reference,curr.logs)
      }
    }

    return prev

    
  },{});
}
