// given list of ints with 3+ ints, find highest product from three
// TODO last test doesn't pass with this version.
"use strict"
function highestProduct(nums) {
  const bestThreeInts = nums.slice(0,3).sort()
  const bestWithNegatives = nums.slice(0,3).sort((a,b) => Math.abs(a) - Math.abs(b))
  for (let index = 3; index < nums.length; index++) {
    const num = nums[index]
    if (num > bestThreeInts[0]) {
      bestThreeInts[0] = num
      bestThreeInts.sort()
    }
    if (Math.abs(num) > Math.abs(bestWithNegatives[0])){
      if (num < 0 && bestWithNegatives[1] < 0 && bestWithNegatives[2] < 0) {
        continue
      } else {
        bestWithNegatives[0] = num
        bestWithNegatives.sort((a,b) => Math.abs(a) - Math.abs(b))
      }
    }
  }

  return Math.max(times(bestThreeInts), times(bestWithNegatives))
}

function times (list) { return list.reduce((product, num) => product * num, 1) }

// // soln
// function highestProductOf3(arrayOfInts) {
//   if (arrayOfInts.length < 3) {
//       throw new Error('Less than 3 items!');
//   }
//   var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
//   var lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);
//
//   var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
//   var lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];
//   var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
//   for (var i = 2; i < arrayOfInts.length; i++) {
//       var current = arrayOfInts[i];
//       highestProductOf3 = Math.max(
//           highestProductOf3,
//           current * highestProductOf2,
//           current * lowestProductOf2
//       );
//       highestProductOf2 = Math.max(
//           highestProductOf2,
//           current * highest,
//           current * lowest
//       );
//       lowestProductOf2 = Math.min(
//           lowestProductOf2,
//           current * highest,
//           current * lowest
//       );
//       highest = Math.max(highest, current);
//       lowest = Math.min(lowest, current);
//   }
//
//   return highestProductOf3;
// }

console.log(6, highestProduct([1,2,3]))
console.log(60, highestProduct([5,2,3,2,4]))
console.log(0, highestProduct([1,1,-1,0]))
console.log(300, highestProduct([-10,-10,1,3,2]))
console.log(300, highestProduct([-10,-10,3,-5]))
console.log(30, highestProduct([-3,-2,-1,-5,2]))
console.log(81, highestProduct([-9,1,1,1,-9]))
