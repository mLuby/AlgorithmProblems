"use strict"

const debug = false

function merge(list1, list2) {
  // choose list w smallest initial value
  let currentNode = list1.v < list2.v ? list1 : list2
  if(debug) console.log(`start@node ${printList(currentNode)}`)
  let mergedList = currentNode
  let otherNode =  list1.v >= list2.v ? list1 : list2

  // while initial list has next, see if other list's should be interposed
  while(currentNode){
    if(!currentNode.n && otherNode){
      if(debug) console.log(`main list empty, append other list ${printList(otherNode)}; done`)
      currentNode.n = otherNode
      currentNode = false
    } else if(!otherNode) {
      if(debug) console.log(`other list empty; ${printList(currentNode)} done`)
      currentNode = false
    } else if(otherNode.v >= currentNode.n.v) {
      if(debug) console.log(`main next  ${printList(currentNode)} < other node     ${printList(otherNode)}, next main node`)
      currentNode = currentNode.n
    } else if(otherNode.v < currentNode.n.v) {
      if(debug) console.log(`other node ${printList(otherNode)} < next main node ${printList(currentNode)}, interpose other node, next other node`)
      const newOtherNode = otherNode.n
      otherNode.n = currentNode.n
      currentNode.n = otherNode
      otherNode = newOtherNode
      currentNode = currentNode.n
    } else {
      throw "should never get here"
    }
  }
  return mergedList
}

console.log()

function printList (node) {
  let array = []
  while(node){
    array.push(node)
    node = node.n
  }
  return array.map(n=>n.v)
}

function createNode (value) {
  return {
    n: null,
    v: value
  }
}

let list1 = createNode(1)
list1.n = createNode(3)
list1.n.n = createNode(5)

let list2 = createNode(2)
list2.n = createNode(4)
list2.n.n = createNode(6)

if(debug)console.log(printList(list1))
if(debug)console.log(printList(list2))
console.log(printList(merge(list1, list2)), [1,2,3,4,5,6])

let list3 = createNode(1)
list3.n = createNode(2)
list3.n.n = createNode(3)
list3.n.n.n = createNode(4)
list3.n.n.n.n = createNode(7)

let list4 = createNode(0)
list4.n = createNode(3)
list4.n.n = createNode(5)
list4.n.n.n = createNode(6)

if(debug)console.log(printList(list3))
if(debug)console.log(printList(list4))
console.log(printList(merge(list3, list4)), [0,1,2,3,3,4,5,6,7])

// 45m