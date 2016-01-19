"use strict"

function v0parity(binaryNumber) { // O(n)
  return binaryNumber.toString().split("").map(Number).filter(isOne).reduce(sum) % 2
}

function isOne(n) {return n === 1}

function sum(agg, num) { return agg + num }

console.log(parity(1011), 1)
console.log(parity(10001000), 0)
