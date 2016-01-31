"use strict"
let debug = true
function isBst(node) {
  const noLeftChild = !node.l
  const noRightChild = !node.r
  // const leftChildLesser = node.l.v >= node.v // WHY CAN'T YOU BE LAZY?!
  // const rightChildGreater = node.r.v >= node.v
  if(noLeftChild && noRightChild){
    return true
  } else if(noRightChild && node.l.v <= node.v) {
    return isBst(node.l)
  } else if(noLeftChild && node.r.v >= node.v) {
    return isBst(node.r)
  } else if(node.l.v <= node.v && node.r.v >= node.v){ 
    return isBst(node.l) && isBst(node.r)
  } else {
    return false
  }
}

function makeNode (parent, value) {
  return {
    v: value,
    p: parent,
    l: null,
    r: null 
  }
}

let bst = makeNode(null, 7)
bst.l = makeNode(bst, 3)
bst.l.l = makeNode(bst.l, 2)
bst.l.r = makeNode(bst.l, 5)
bst.r = makeNode(bst, 13)
bst.r.l = makeNode(bst.r, 11)
bst.r.r = makeNode(bst.r, 17)
console.log(isBst(bst), true)
/*
    7
  3    13
2  5 11  17
*/
let nonBst = makeNode(null, 4)
nonBst.l = makeNode(nonBst, 3)
nonBst.r = makeNode(nonBst, 5)
nonBst.r.l = makeNode(nonBst.l, 9)
console.log(isBst(nonBst), false)
/*
  4
3   5
   9
*/
let closeBst = makeNode(null, 7)
closeBst.l = makeNode(closeBst, 3)
closeBst.l.l = makeNode(closeBst.l, 2)
closeBst.l.r = makeNode(closeBst.l, 5)
closeBst.r = makeNode(closeBst, 13)
closeBst.r.l = makeNode(closeBst.r, 4)
closeBst.r.r = makeNode(closeBst.r, 17)
console.log(isBst(closeBst), false)
/*
    7
  3    13
2  5  4  17
*/

// 25m
