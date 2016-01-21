"use strict"
let debug = false

function groupAnagrams(wordList) {
  let anagramMap = wordList.reduce(addToAnagramMap, {})

  return listFromMap(anagramMap).filter(list => list.length > 1)

  function addToAnagramMap(anagramMap, word){
    const sortedWord = alphabetize(word)
    anagramMap[sortedWord] = Array.isArray(anagramMap[sortedWord]) ? anagramMap[sortedWord].concat([word]) : [word]
    return anagramMap
  }
}

let input = ["debitcard", "elvis", "silent", "badcredit", "lives", "freedom", "listen", "levis", "money"]
let output = [["debitcard", "badcredit"],["elvis", "lives", "levis"],["silent", "listen"]]
console.log(groupAnagrams(input), output)

function alphabetize(word){
  return word.split('').sort().join('')
}
if(debug)console.log(alphabetize('acb'), 'abc')
if(debug)console.log(alphabetize('acbac'), 'aabcc')

function listFromMap(map){
  return Object.keys(map).map(key => map[key])
}
if(debug)console.log(listFromMap({a:1, b:2, c:3}), [1,2,3])
if(debug)console.log(listFromMap({a:[1], b:[2], c:[3]}), [[1],[2],[3]])

// 20m
