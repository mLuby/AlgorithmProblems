"use strict"
const debug = true

function solveTowerOfHanoi(n) {
  let initialState = [generateTowers(n)]

  return initialState
}

function generateTowers(n) {
  return [Array.apply(null, Array(n)).map((_,i)=>i+1).reverse(), [], []]
}

function printSolution(solution) {
  solution.forEach((x,i) => console.log(i+1, x))
}

let soln = [
  [
    [3,2,1],
    [],
    []
  ],[
    [3,2],
    [],
    [1]
  ],[
    [3],
    [2],
    [1]
  ],[
    [3],
    [2,1],
    []
  ],[
    [],
    [2,1],
    [3]
  ],[
    [1],
    [2],
    [3]
  ],[
    [1],
    [],
    [3,2]
  ],[
    [],
    [],
    [3,2,1]
  ]
]
// printSolution(soln)
// printSolution([generateTowers(3)])

// printSolution(solveTowerOfHanoi(1))
// printSolution(solveTowerOfHanoi(2))
// printSolution(solveTowerOfHanoi(3))
// printSolution(solveTowerOfHanoi(4))

function moveStack(numRings, start, end, tmp) {
  if(numRings === 1){
    return `${start}->${end}`
  } else { // numRings > 1
    return `${moveStack(numRings-1, start, tmp, end)}
${moveStack(1, start, end, tmp)}
${moveStack(numRings-1, tmp, end, start)}`
  }
}
console.log('1:\n'+moveStack(1,'left','rite','midd'))
console.log('2:\n'+moveStack(2,'left','rite','midd'))
console.log('3:\n'+moveStack(3,'left','rite','midd'))

// 50m
