"use strict"
function makeStack(){
  return {
    storage: [],
    maxValues: [],
    push (value) {
      this.storage.push(value)
      this.maxValues.push(this.max() > value ? this.max() : value)
    },
    pop (value) {
      this.maxValues.pop()
      return this.storage.pop()
    },
    max () {
      return this.maxValues[this.maxValues.length-1]
    }
  }
}

let stack1 = makeStack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
console.log(stack1.max(), 3)
console.log(stack1.pop(), 3)
console.log(stack1.max(), 2)
stack1.push(5)
stack1.push(4)
console.log(stack1.max(), 5)
stack1.pop()
console.log(stack1.max(), 5)
stack1.pop()
console.log(stack1.max(), 2)
// 10m
