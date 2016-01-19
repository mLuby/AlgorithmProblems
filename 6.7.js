"use strict"

function maxProfit(array) {
  return array.reduce(carryMaxDiff, {maxDiff: 0, lowestPrice: Infinity}).maxDiff

  function carryMaxDiff(o, currentPrice) {
    o.lowestPrice = currentPrice < o.lowestPrice ? currentPrice : o.lowestPrice
    const currentDiff = currentPrice - o.lowestPrice
    o.maxDiff = currentDiff > o.maxDiff ? currentDiff : o.maxDiff
    return o
  }
}

console.log(maxProfit([20, 30, 10, 50]), 40)
console.log(maxProfit([310, 315, 275, 295, 260, 270, 290, 230, 255, 250]), 30)
