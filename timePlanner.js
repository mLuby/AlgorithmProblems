"use strict"
// function meet(cal1, cal2, duration){
//   let startTime = 400
//   return startTime ? [startTime, startTime+duration] : []
// }

// let min = Math.min
// let max = Math.max

// function meet(calendar, calendar1, meeting_dur) {
//   // if(min(cal1[i], s[i+1]2) - max(cale1, e2)
//     // e1 - min(s
//   for(var i =0 ; i < calendar.length; i++){
//     let meeting = []
//     if (calendar[i][1]-calendar1[i+1][0] >= meeting_dur &&
//         calendar[i][1]-calendar[i+1][0] >= meeting_dur &&
//         calendar[i][1]-calendar[i+1][0] >= meeting_dur ){
//       meeting = [calendar[i][1], calendar[i][1]+meeting_dur]
//     }else if(calendar1[i][1]-calendar[i+1][0] >= meeting_dur &&
//              calendar1[i][1]-calendar1[i+1][0] >= meeting_dur &&
//              calendar[i][1]-calendar[i+1][0] >= meeting_dur ) {
//       meeting = [calendar1[i][1], calendar1[i][1]+meeting_dur]
//     }else{
//       meeting = []
//     }
//     return meeting
//   }
// }

function meet(calendar1, calendar2, meeting_dur) {
  let i1 = 0
  let i2 = 0
  while(calendar1.length < i1 && calendar2.length < i2){
    let meetingStart = Math.max(calendar1[i1][0], calendar2[i2][0])
    let meetingEnd = Math.min(calendar1[i1][1], calendar2[i2][1])
    if(meetingStart + meeting_dur < meetingEnd){
       return [meetingStart, meetingStart + meeting_dur]
    } else {
       if(calendar1[i1][1] < calendar2[i2][1]){
          i1 = i1 + 1
       } else {
          i2 = i2 + 1
       }
    }
  }
  return []
}

const dur = 50
const cal1 = [[0,100], [200,300], [500,550]]
const cal2 = [[0,200], [250,350],  [350,400]]
console.log(meet(cal1, cal2, dur))

// const calA1 = [[0,200], [200, 300], [350, 400], [500, 550]]
// const calA2 = [[0,100], [250, 350], [350, 400], [700, 750]]
// const durA = 50
// console.log([400, 450], meet(calA1, calA2, durA))

// const calB1 = [[0,100], [200, 300], [700, 800]]
// const calB2 = [[100,200], [200, 500], [600, 700]]
// const durB = 100
// console.log([500, 600], meet(calB1, calB2, durB))
