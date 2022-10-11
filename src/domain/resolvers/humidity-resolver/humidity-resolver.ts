import { Log } from "../../normalize-data";

export const humidityResolver = (
    reference: number,
    logs: Array<Log>
  ) => {
  
    let result = 'keep'
  
    const values = logs.map(element => element.value)
  
    values.some((value) => {
      if(reference - value > 1) {
        result = 'discard'
        return true
      }
    })
  
    return result
  };