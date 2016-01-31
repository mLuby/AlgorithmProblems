'use strict'

// O(logn) S(1)
function findLargestKeyLessThan(key, node){
   let largestKey = node.v < key ? node.v : null
   while(node.l || node.r){
      // traverse bst
      if(node.r && node.r.v < key){
         largestKey = node.r.v > largestKey ? node.r.v : largestKey
         node = node.r
      } else if(node.l && node.l.v < key){
         largestKey = node.l.v > largestKey ? node.l.v : largestKey
         node = node.l
      } else {
         node = {l: false, r: false} // end loop
      }
   }
   return largestKey
}

// their solution
// function findLargestSmallerKey(root, x):
//    result = null
//    while (root != null):
//       if (root.key < x):
//          result = root.key
//          root = root.right
//       else
//          root = root.left
//    return result

function makeNode (parent, value) {
  return {
    v: value,
    p: parent,
    l: null,
    r: null
  }
}

let bst0 = makeNode(null, 7)
bst0.l = makeNode(bst0, 3)
bst0.l.l = makeNode(bst0.l, 2)
bst0.l.r = makeNode(bst0.l, 5)
bst0.r = makeNode(bst0, 13)
bst0.r.l = makeNode(bst0.r, 11)
bst0.r.r = makeNode(bst0.r, 17)
console.log(findLargestKeyLessThan(19, bst0), 17)

let bst1 = makeNode(null, 7)
console.log(findLargestKeyLessThan(19, bst1), 7)

let bst2 = makeNode(null, 27)
console.log(findLargestKeyLessThan(19, bst2), null)
