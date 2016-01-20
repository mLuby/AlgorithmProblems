"use strict"
let debug = false

function findFirstOccurrence(array, target){
  let index = Math.floor(array.length/2)
  let searchArea = array.length/4
  while(searchArea > 0) {
    const value = array[index]
    const isFirstItem = index === 0
    const prevItemBelowTarget = index-1 >= 0 ? array[index-1] < target : null
    const foundTarget = value === target
    // console.log(`looking for target=${target} at index=${index} w value=${value} searchArea=${searchArea}`)
    if(foundTarget && (isFirstItem || prevItemBelowTarget)){
      // stop, found first occurrence
      return index
    } else {
      // keep searching; pick new index
      if(value > target){ // too high, try lower index
        if(debug)console.log(`value=${value} too high ${target}, index = ${index}-${Math.round(searchArea)}`)
        index = index - Math.round(searchArea)
      } else if(value < target) { // too low, try higher index
        if(debug)console.log(`value=${value} too low ${target}, index = ${index}+${Math.round(searchArea)}`)
        index = index + Math.round(searchArea)
      } else {
        if(debug)console.log(`value=${value} eq ${target} but one exists before=${array[index-1]}, index = ${index}-${Math.round(searchArea)}`)
        index = index - Math.round(searchArea)
      }
      if(Math.round(searchArea) === 0) {
        return -1 // not found
      }
      searchArea = searchArea/2
    }
  }
}

let sorted1 = [1]
console.log(findFirstOccurrence(sorted1, 1), 0)

let sorted2 = [2,2,2,2,2]
console.log(findFirstOccurrence(sorted2, 2), 0)

let sorted3 = [2,2,2,3,3,3,3,3]
console.log(findFirstOccurrence(sorted3, 3), 3)

let sorted4 = [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401]
console.log(findFirstOccurrence(sorted4, 108), 3)
console.log(findFirstOccurrence(sorted4, 285), 6)

let sorted5 = [6]
console.log(findFirstOccurrence(sorted5, 5), -1)

// 65m
