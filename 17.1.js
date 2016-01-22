"use strict"

const st = {name:'st.', points:2}
const fg = {name:'fg.', points:3}
const td = {name:'td.', points:7}
function waysToScore(total){
  let ways = []
  tryWay(total, '', st)
  tryWay(total, '', fg)
  tryWay(total, '', td)
  let seen = {}
  return ways.map(consolidate).filter(unique)
  function tryWay (total, currentWay, wayToTry) {
    // if an option reduces total to zero, include that way and done.
    if(total - wayToTry.points === 0) { ways.push(currentWay+wayToTry.name) }
    // if an option reduces total to above zero, recurse with new total
    else if(total - wayToTry.points > 0) {
      tryWay(total - wayToTry.points, currentWay+wayToTry.name, st)
      tryWay(total - wayToTry.points, currentWay+wayToTry.name, fg)
      tryWay(total - wayToTry.points, currentWay+wayToTry.name, td)
    }
    // if an option reduces total below zero, done.
  }

  function consolidate(string){
    return string.split('.').filter(str => str).reduce(countByStr, {})
    function countByStr(obj, str){
      if(obj[str]){
        obj[str]++
      } else {
        obj[str] = 1
      }
      return obj
    }
  }

  function unique(obj){
    if(seen[`st${obj.st}fg${obj.fg}td${obj.td}`]){
      return false
    } else {
      seen[`st${obj.st}fg${obj.fg}td${obj.td}`] = true
      return true
    }
  }
}
console.log(waysToScore(2), ['1st'])
console.log(waysToScore(3), ['1fg'])
console.log(waysToScore(5), ['1st 1fg'])
console.log(waysToScore(7), ['2st 1fg', '1td'])
console.log(waysToScore(9), ['1st 1td'])
console.log(waysToScore(12), ['6st', '4fg', '1st 1fg 1td', '3st 2fg'])

// 35m
