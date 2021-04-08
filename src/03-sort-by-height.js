/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
  }

  function sortSort (a, b) {
    return a - b;
  }

  arr.sort(sortSort);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.shift();
      i -= 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== -1) {
      arr2[i] = arr[index];
      index += 1;
    }
  }
  return arr2;
}

module.exports = sortByHeight;
