/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  function func (e, i, arr) {
    e.forEach((elem, index) => {
      if ((i === 0) || (arr[i - 1][index] !== 0)) {
        sum += elem;
      }
    });
  }

  matrix.forEach(func);
  return sum;
}

module.exports = getMatrixElementsSum;
