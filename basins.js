"use strict" // https://www.careercup.com/question?id=15380670

// basins :: Terrain -> [Cell]
basinTests().forEach(function (testData) { test(basins, [testData.input], testData.output) })
function basins (terrain) {
  const convertedTerrain = convertToCells(terrain) // mutation
  let sinkedTerrain
  for (let y = 0; y < convertedTerrain.length; y++) {
    for (let x = 0; x < convertedTerrain[y].length; x++) {
      const cell = convertedTerrain[y][x]
      findSink(convertedTerrain, cell) // mutation
    }
  }
  return sinkSizes(convertedTerrain)
}

// convertToCells :: Terrain -> Terrain
test(convertToCells, [[[1]]], [[{alt: 1, x: 0, y: 0}]])
function convertToCells (terrain) {
  const convertedTerrain = []
  for (let y = 0; y < terrain.length; y++) {
    for (let x = 0; x < terrain[y].length; x++) {
      if (!convertedTerrain[y]) {
        convertedTerrain[y] = []
      }
      convertedTerrain[y][x] = {alt: terrain[y][x], x: x, y: y}
    }
  }
  return convertedTerrain
}

// findSink :: Terrain -> Cell -> String
test(findSink, [
  [
    [{alt: 2, x:0, y:0}, {alt: 2, x:1, y:0}],
    [{alt: 1, x:0, y:1}, {alt: 0, x:1, y:1}]
  ],
  {alt: 2, x:0, y:0}
], "11")
function findSink (terrain, cell) {
  if (!cell.sink) {
    const lowestNeighbor = findLowestNeighbor(terrain, cell)
    if (lowestNeighbor) { // find its sink
      cell.sink = findSink(terrain, lowestNeighbor)
    } else { // is sink
      cell.sink = sinkName(cell)
    }
  }
  return cell.sink
}

// sinkName :: Cell -> String
test(sinkName, [{x:0, y:1}], "01")
function sinkName(cell) { return "" + cell.x + cell.y }

// findLowestNeighbor :: Terrain -> Cell -> Cell
test(findLowestNeighbor, [[[{}, {alt: 3}], [{alt: 2}]], {alt: 5, x: 0, y: 0}], {alt: 2})
function findLowestNeighbor (terrain, cell) {
  const neighbors = []
  if (terrain.length > cell.y+1) { neighbors.push(terrain[cell.y+1][cell.x+0]) }
  if (terrain.length > cell.x+1) { neighbors.push(terrain[cell.y+0][cell.x+1]) }
  if (-1 < cell.y-1) { neighbors.push(terrain[cell.y-1][cell.x+0]) }
  if (-1 < cell.x-1) { neighbors.push(terrain[cell.y+0][cell.x-1]) }
  return neighbors.filter(isLower(cell.alt)).sort(function (a, b) { return a.alt - b.alt })[0]
}

// isLower :: Number -> Cell -> Boolean
test(isLower, [3, {alt: 2}], true)
test(isLower, [1, {alt: 2}], false)
function isLower (alt) { return function filterLower (cell) { return cell.alt < alt } }

// sinkSizes :: Terrain -> [Number]
test(sinkSizes, [
  [
    [{sink: "b"}, {sink: "c"}],
    [{sink: "a"}, {sink: "b"}]
  ]
], [2, 1, 1])
function sinkSizes (terrain) {
  const sinks = {}
  flatten(terrain).forEach(function (cell) {
    sinks[cell.sink] = sinks[cell.sink] ? sinks[cell.sink] + 1 : 1
  })
  return values(sinks).sort().reverse()
}

// values :: {k: v} -> [v]
test(values, [{a: 2, b: 3}], [2, 3])
function values (obj) { return Object.keys(obj).map(function (key) { return obj[key] }) }

// flatten :: Terrain -> [Cell]
test(flatten, [[[1,2], [3,4]]], [1,2,3,4])
function flatten (terrain) {
  return terrain.reduce(function (flatTerrain, y) {
    flatTerrain = flatTerrain.concat(y)
    return flatTerrain
  }, [])
}

// test :: (a -> b) -> [a] -> b -> IO ()
function test (func, input, expected) { console.log(func.name, "\n  got:", applyMaybeCurriedArgs(func, input), "\n  exp:", expected) }

// applyMaybeCurriedArgs :: f -> [a] -> b
test(applyMaybeCurriedArgs, [function (a,b) { return function (c) { return [a,b,c] } }, [1,2,3]], [1,2,3])
function applyMaybeCurriedArgs (func, args) {
  let result = func
  let mutableArgs = args.slice()
  while (args.length) {
    const currentArgs = args.slice(0,func.length)
    args = args.slice(func.length)
    result = result.apply(null, currentArgs)
  }
  return result
}

function basinTests () { return [
  {
    input: [
      [1,5,2],
      [2,4,7],
      [3,6,9]
    ],
    output: [7,2]
    // The basins, labeled with A’s and B’s, are:
    // A A B
    // A A B
    // A A A
  },
  {
    input: [[10]],
    output: [1]
    // There is only one basin in this case.
  },
  {
    input: [
      [1,0,2,5,8],
      [2,3,4,7,9],
      [3,5,7,8,9],
      [1,2,5,4,2],
      [3,3,5,2,1]
    ],
    output: [11,7,7]
    // The basins, labeled with A’s, B’s, and C’s, are:
    // A A A A A
    // A A A A A
    // B B A C C
    // B B B C C
    // B B C C C
  },
  {
    input: [
      [0,2,1,3],
      [2,1,0,4],
      [3,3,3,3],
      [5,5,2,1]
    ],
    output: [7,5,4]
    // The basins, labeled with A’s, B’s, and C’s, are:
    // A A B B
    // A B B B
    // A B B C
    // A C C C
  }
]}