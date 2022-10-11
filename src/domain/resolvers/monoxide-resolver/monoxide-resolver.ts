import { Log } from "../../normalize-data"

export const monoxideResolver = (
    reference: number,
    logs: Array<Log>
  ) => {
    let result = 'keep'
    const values = logs.map(element => element.value)
  
    values.some((value) => {
      if(value - reference > 3) {
        result = 'discard'
        return true
      }
    })
  
    return result
  }