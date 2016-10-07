deleteFromLinkedList = node => {
  node.value = node.next.value
  node.next = node.next.next
  return node
}

makeList = (value, next) => ({value, next})
test = (expected, actual) => console.log(expected, actual)

list123 = makeList(1, makeList(2, makeList(3)))
list13 = makeList(1, makeList(3))
test(list13, (deleteFromLinkedList(list123.next), list123))
list12 = makeList(1, makeList(2))
list1 = makeList(1)
// test(list1, (deleteFromLinkedList(list12.next), list12))
