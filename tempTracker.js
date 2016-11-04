// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ of all temps we've seen so far (if multiple, pick one)

function makeTempTracker () {
  let min = Infinity
  let max = -Infinity
  let numTemps = 0
  let mean = 0
  const counts = {}
  let mode = null
  return {
    insert: temp => { //records a new temperature
      min = min < temp ? min : temp
      max = max > temp ? max : temp
      mean = (mean * numTemps + temp)/(numTemps + 1)
      numTemps = numTemps + 1
      counts[temp] = counts[temp] ? counts[temp] + 1 : 1
      mode = Number(Object.keys(counts).reduce((max, key) => counts[max] > counts[key] ? max : key))
    },
    getMax: () => max, //returns the highest temp we've seen so far
    getMin: () => min, //returns the lowest temp we've seen so far
    getMean: () => mean, //returns the mean ↴ of all temps we've seen so far
    getMode: () => mode //returns a mode ↴ of all temps we've seen so far
  }
}

const t = makeTempTracker()
expect(t.getMax(), -Infinity, "getMax")
expect(t.getMin(), Infinity, "getMin")
expect(t.getMean(), 0, "getMean")
expect(t.getMode(), null, "getMode")
t.insert(70)
expect(t.getMax(), 70, "getMax")
expect(t.getMin(), 70, "getMin")
expect(t.getMean(), 70, "getMean")
expect(t.getMode(), 70, "getMode")
t.insert(60)
expect(t.getMax(), 70, "getMax")
expect(t.getMin(), 60, "getMin")
expect(t.getMean(), 65, "getMean")
expect(t.getMode(), 70, "getMode") // 60 or 70 both valid
t.insert(80)
expect(t.getMax(), 80, "getMax")
expect(t.getMin(), 60, "getMin")
expect(t.getMean(), 70, "getMean")
expect(t.getMode(), 80, "getMode") // 60 70 80 all valid
t.insert(70)
expect(t.getMax(), 80, "getMax")
expect(t.getMin(), 60, "getMin")
expect(t.getMean(), 70, "getMean")
expect(t.getMode(), 70, "getMode")

function expect (actual, expected, message) { console.log(actual === expected ? "√" : "X", message || "", actual, expected) }
