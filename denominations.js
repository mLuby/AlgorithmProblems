// best approach
  // numWaysToMakeWith :: Int -> [Int] -> Int
  function numWaysToMakeWith(amount, denominations) {
      // intialize an array of zeros with indices up to amount
      var waysOfDoingNcents = []
      for (let i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0
      }
      waysOfDoingNcents[0] = 1 // one way to create amount = zero

      denominations.forEach(coin => {
        for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
          let higherAmountRemainder = higherAmount - coin
          waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder]
        }
      })

      return waysOfDoingNcents[amount]
  }

// // iterative approach
  // // numWaysToMakeWith :: Int -> [Int] -> Int
  // function numWaysToMakeWith (amount, denominations) {
  //   const ways = [] // final results
  //   let possibleCombos = [[]]
  //   let newCombos = [true] // to get into while loop
  //   while (newCombos.length) {
  //     newCombos = []
  //     possibleCombos.forEach(baseCombo => {
  //       const potentialCombos = denominations.map(d => baseCombo.concat(d))
  //       potentialCombos.forEach(pCombo => {
  //         const comboSum = sum(pCombo)
  //         if (comboSum === amount) {
  //           ways.push(pCombo)
  //         } else if (comboSum < amount) {
  //           newCombos.push(pCombo)
  //         }
  //       })
  //     })
  //     possibleCombos = newCombos
  //   }
  //   return unique(ways).length
  // }

// // recursive approach
  // // numWaysToMakeWith :: Int -> [Int] -> Int
  // function numWaysToMakeWith (amount, denominations) {
  //   const results = []
  //   recurse([], denominations)
  //   return unique(results).length
  //
  //   // recurse :: [d] -> [d] -> [[d]]
  //   function recurse (combo, choices) {
  //     if (sum(combo) === amount) {
  //       results.push(combo)
  //     } else if (sum(combo) < amount) {
  //       choices.forEach(choice => {
  //         recurse(combo.concat([choice]), choices)
  //       })
  //     }
  //   }
  // }

// sum :: [Int] -> Int
function sum (list) { return list.reduce((agg, value) => agg + value, 0) }

// flatten :: [[a]] -> [a]
function flatten (list) { return list.reduce((agg, item) => agg.push(item))}

// unique :: [[a]] -> [[a]]
function unique (list) {
  const uniques = {}
  list.forEach(l => uniques[l.sort().join("")] = l)
  return Object.keys(uniques).map(k => uniques[k])
}

function test (expected, actual) { console.log(expected === actual ? "√" : "X", expected, actual) }

test(0, numWaysToMakeWith(3, []))
test(0, numWaysToMakeWith(3, [2]))
test(1, numWaysToMakeWith(3, [1]))
test(2, numWaysToMakeWith(3, [1,3]))
test(2, numWaysToMakeWith(4, [1,3]))
test(4, numWaysToMakeWith(4, [1,2,3]))
test(5, numWaysToMakeWith(5, [1,2,3]))
test(8, numWaysToMakeWith(7, [1,2,3]))
