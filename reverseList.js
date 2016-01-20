"use strict"
let debug = false
function reverseList(currNode) {
  // [{@1 ->2}, {2 ->3}, {3, ->4}, {4 ->}]
  // {@1 ->null}, {2 ->1}
  // @3->4, 4->null => 3->2, 4->3

  let prevNode = null
  while(currNode){
    // c = 1, c.n=2
    // want 2.n=1, c.n=null
    let nextNode = currNode.n // 2
    currNode.n = prevNode // null
    prevNode = currNode // 1
    currNode = nextNode // 2
    if(debug)console.log(`currNode ${currNode ? currNode.v : null}, prevNode ${prevNode ? prevNode.v : null}, nextNode ${nextNode ? nextNode.v : null}`)
  }
  return prevNode
}

function makeList(value) {
  return {
    n: null,
    v: value
  }
}

function printList(node) {
  let values = []
  while(node){
    values.push(node.v)
    node = node.n
  }
  return values
}

let list1 = makeList(0)

let list2 = makeList(1)
list2.n = makeList(2)
list2.n.n = makeList(3)
list2.n.n.n = makeList(4)

console.log(printList(list2), [1,2,3,4])
console.log(printList(reverseList(list1)), [0])
console.log(printList(reverseList(list2)), [4,3,2,1])
// 15m
