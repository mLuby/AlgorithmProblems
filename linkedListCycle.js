"use strict"
// hasCycle :: Node -> Boolean
const hasCycle = node => {
  let slowNode = node
  let fastNode = node
  while (fastNode && fastNode.next) {
    slowNode = slowNode.next
    fastNode = fastNode.next.next
    if (slowNode === fastNode) {
      return true
    }
  }
  return false
}

const makeList = (value, next) => ({value, next})
const test = (expected, actual) => console.log(expected, actual)

const noCycle = makeList(1, makeList(2))
const hiCycle = makeList(1)
hiCycle.next = makeList(2, hiCycle)

const miniCycle = makeList(1)
miniCycle.next = miniCycle

console.log(noCycle)
console.log(hiCycle)

test(false, hasCycle(noCycle))
test(true, hasCycle(hiCycle))
test(true, hasCycle(miniCycle))
