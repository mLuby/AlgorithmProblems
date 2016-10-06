// Given
input = {
  xs: [12, 12, 12],
  sm: [4, 4, 4],
  md: [8, 2, 2],
  lg: [9, 2, 1]
}
// Expected
output = [
  { xs: 12, sm: 4, md: 8, lg: 9 },
  { xs: 12, sm: 4, md: 2, lg: 2 },
  { xs: 12, sm: 4, md: 2, lg: 1 }
]

// My initial generalized Ramda solution
columnsToRows = input => R.addIndex(R.map)(
  (row, index) => R.reduce(
    (newRow, key) => R.set(R.lensProp(key), R.view(R.lensPath([key, index]), input), newRow),
    {},
    R.keys(input)
  ),
  R.map(() => ({}), R.head(R.values(input)))
)

// A better (pointfree) generalized Ramda solution (from ramda gitter)
columnsToRows = converge(map, [compose(zipObj, keys), compose(transpose, values)])
