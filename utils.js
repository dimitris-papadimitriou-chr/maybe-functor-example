import { Some, None } from "./maybe.js"

export let firstOrNone = function (array) {
  return array.length > 0 ? Some(array[0]) : None()
}
