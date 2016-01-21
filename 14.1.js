"use strict"
let debug = false

function uniqueIntersection(list1, list2){
  let index = 0
  return list1.reduce(reducer, [])
  function reducer(intersectionList, item1) {
    while(index < list2.length){
      let item2 = list2[index]
      if(item1 == item2) {
        if(debug)console.log(`item1 ${item1} == item2 ${item2}; found intersection`)
        if(intersectionList[intersectionList.length-1] !== item1){ intersectionList.push(item1) }
        return intersectionList
      } else if(item1 < item2) {
        if(debug)console.log(`item1 ${item1} < item2 ${item2}; getting next item1`)
        return intersectionList // item1 cannot be in list2
      } else { // item1 > item2
        if(debug)console.log(`item1 ${item1} > item2 ${item2}; incrementing index`)
        index = index + 1
      }
    }
    return intersectionList
  }
}

const l1 = [2,3,3,5,5,6,7,7,8,12]
const l2 = [5,5,6,8,8,9,10,10]
const output = [5,6,8]
console.log(uniqueIntersection(l1, l2), output)

// 25m
