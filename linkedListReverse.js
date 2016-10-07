"use strict"
// reverse :: LinkedList -> LinkedList
const reverse = (current, prev) => {
  const next = current.next
  current.next = prev
  return next ? reverse(next, current) : current
}

// There's also an iterative approach…

const makeList = (value, next) => ({value, next})
const printList = node => {
  let result = ""
  while (node) {
    result += " -> " + node.value
    node = node.next
  }
  return result
}
const test = (expected, actual) => console.log(expected, actual)

const listA = makeList(1, makeList(2, makeList(3)))
const aList = makeList(3, makeList(2, makeList(1)))
test(printList(aList), printList(reverse(listA)))
// -> 3 -> 2 -> 1  -> 3 -> 2 -> 1
const listB = makeList(1)
const bList = makeList(1)
test(printList(bList), printList(reverse(listB)))
// -> 1  -> 1
const listC = makeList(1, makeList(2, makeList(3, makeList(4))))
const cList = makeList(4, makeList(3, makeList(2, makeList(1))))
test(printList(cList), printList(reverse(listC)))
// -> 4 -> 3 -> 2 -> 1  -> 4 -> 3 -> 2 -> 1
