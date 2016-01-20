"use strict"
let debug = false
function isTreeBalanced (node) {
  let minHeight = Infinity
  let maxHeight = 0

  getHeight(node, 0)

  return maxHeight - minHeight <= 1

  // get height of each leaf
  function getHeight (node, height) {
    height = height+1
    if(!node.l && !node.r){
      if(debug)console.log(`${node.v} isa leaf w height ${height}`)
      // is leaf
      minHeight = height < minHeight ? height : minHeight
      maxHeight = height > maxHeight ? height : maxHeight
    } else {
      if(debug)console.log(`${node.v} not leaf`)
      // recurse
      if(node.l) getHeight(node.l, height)
      if(node.r) getHeight(node.r, height)
    }
  }
}

function addNode(parent, value) {
  return {
    v: value,
    p: parent,
    l: null,
    r: null
  }
}

/*
  1
2   3
 4
*/
let tree1 = addNode(null, 1)
tree1.l = addNode(tree1, 2)
tree1.r = addNode(tree1, 3)
tree1.l.r = addNode(tree1.l, 4)
console.log(isTreeBalanced(tree1), true)

/*
 1
2 3
   4
    5
*/
let tree2 = addNode(null, 1)
tree2.l = addNode(tree2, 2)
tree2.r = addNode(tree2, 3)
tree2.r.r = addNode(tree2.r, 4)
tree2.r.r.r = addNode(tree2.r.r, 5)
console.log(isTreeBalanced(tree2), false)
// 15m
