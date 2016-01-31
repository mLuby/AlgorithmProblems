// naive O(n2) O(1)
// function weightPackage(p) {
//    for(var i = 0; i < p.arr.length; i++){
//       for(var j = i + 1; j < p.arr.length; j++){
//          if(p.arr[i] + p.arr[j] === p.limit) return [i, j]
//       }
//    }
//    return -1;
// }

const weightLimit = 20
const items = [10, 12, 5, 8] // weights
function findTwoItemsThatFit() { // time:O(n^2) space:O(1)
   // find a pair that matches
   let solutionPair = []
   items.forEach(function(weight1, index1){
      items.forEach(function(weight2, index1){
         if(index1 !== index2 && weight1+weight2 === weightLimit){
            return [index1, index2]
         }
      })
   })

   return solutionPair.length ? solutionPair : -1 // an exact pair doesn't exist
}

// naive O(n2) O(n)
function weightPackage(p){
   var weights = {};
   for(var i = 0; i < p.arr.length; i++){
      var currentWeight = p.arr[i]; //2 //1
      if(currentWeight > p.limit) continue;
      var desiredWeight = p.limit - currentWeight;
      if(weights[desiredWeight]) return [weights[desiredWeight], i];
      weights[currentWeight] = i;
   }
   return -1;
}

var package1 = {limit: 10, arr: [2,4,5,6,7,8]}
console.log(weightPackage(package1), [0,5]);

var package2 = {limit: 10, arr: [1,3,5,6,7,8]}
console.log(weightPackage(package2), [1,4]);

var package3 = {limit: 10, arr: [1,3,5,8]}
console.log(weightPackage(package3), -1);

var package4 = {limit: 10, arr: [1,3,5,8,5]}
console.log(weightPackage(package4), [2,4]);
