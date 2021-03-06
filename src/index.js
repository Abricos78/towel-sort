
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  if (matrix) {
    matrix.forEach((el, index) => {
      index % 2 !== 0 ? result.push(...[...el].reverse()) : result.push(...el)
    });
  }
  console.log(matrix)
  return result
}
