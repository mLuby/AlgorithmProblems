"use strict"
let debug = false
let rect1 = {
  'x': 1,
  'y': 5,
  'w': 4,
  'h': 5
}
let rect2 = {
  'x': 2,
  'y': 3,
  'w': 1,
  'h': 4
}
let rect3 = {
  'x': 1,
  'y': 1,
  'w': 1,
  'h': 1
}
let rect4 = {
  'x': 2,
  'y': 2,
  'w': 1,
  'h': 1
}

function intersectionArea(r1, r2) {
  const r_xi = Math.max(r1.x, r2.x)
  const r_yi = Math.max(r1.y, r2.y)
  const r_xf = Math.min(r1.x+r1.w, r2.x+r2.w)
  const r_yf = Math.min(r1.y+r1.h, r2.y+r2.h)
  if(debug)console.log(`r_xi:${r_xi} r_yi:${r_yi} r_xf:${r_xf} r_yf:${r_yf} `)
  return (r_xf-r_xi)*(r_yf-r_yi)
}

console.log(intersectionArea(rect1, rect2), 2)
console.log(intersectionArea(rect2, rect1), 2)
console.log(intersectionArea(rect3, rect3), 1)
console.log(intersectionArea(rect3, rect4), 0)
// 12m
