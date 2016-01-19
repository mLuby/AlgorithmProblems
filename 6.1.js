"use strict"

function partition(array, index){
  const valueAtIndex = array[index]
  var buckets = {
    lower: [],
    equal: [],
    greater: []
  }
  array.forEach(assignToBucket)
  return buckets.lower.concat(buckets.equal, buckets.greater)

  function assignToBucket (item) {
    if(item === valueAtIndex) buckets.equal.push(item)
    else if(item < valueAtIndex) buckets.lower.push(item)
    else buckets.greater.push(item)
  }
}

console.log(partition([2,3,1], 0), [1,2,3])
console.log(partition([3,1,7,2,5,4,6], 5), [3,1,2,4,7,5,6])
