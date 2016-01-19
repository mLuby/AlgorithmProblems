"use strict"

function stringToNum (str) {
  if(str[0] === "-"){
    return -1 * posStringToNum(str.slice(1))
  } else {
    return posStringToNum(str)
  }
}
function posStringToNum (str) {
  const charDigitMap = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
  }

  return str.split("").reverse().map(charToDigit).reduce(digitsToNumber)

  function charToDigit (char) {
    return charDigitMap[char]
  }

  function digitsToNumber(num, digit, index) {
    const place = Math.pow(10, index)
    return num + digit * place
  }
}

function numToString (num) {
  if(num < 0){
    return -1 * posNumToString(-1 * num)
  } else {
    return posNumToString(num)
  }
}
function posNumToString (num) {
  const digitCharMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  const places = num ? Math.floor(Math.log10(num))+1 : 1

  let array = Array.apply(null, Array(places))

  return array.map(insertDigit).reverse().join("")

  function insertDigit(_, index) {
    return Math.floor(num / Math.pow(10, index) % 10)
  }
}

console.log(stringToNum("0"), 0)
console.log(stringToNum("1"), 1)
console.log(stringToNum("1234"), 1234)
console.log(stringToNum("-1"), -1)
console.log(stringToNum("-1234"), -1234)
console.log(numToString(0), "0")
console.log(numToString(1), "1")
console.log(numToString(1234), "1234")
console.log(numToString(-1), "-1")
console.log(numToString(-1234), "-1234")

function numToString1(num){
  const places = num ? Math.floor(Math.log10(num)) : 0
  let array = Array.apply(num, Array(places+1))

  return array.reduce(digitsToString, 0)

  function digitsToString(str, num, index) {
    return
  }
}

// console.log(stringToNum1("0"), 0)
// console.log(stringToNum1("1"), 1)
// console.log(stringToNum1("1234"), 1234)
// console.log(stringToNum1("-1"), -1)
// console.log(stringToNum1("-1234"), -1234)
console.log(numToString1(0), "0")
console.log(numToString1(1), "1")
console.log(numToString1(1234), "1234")
console.log(numToString1(-1), "-1")
console.log(numToString1(-1234), "-1234")
