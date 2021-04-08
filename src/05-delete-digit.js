/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let bufferStr = '';
  const strArr = str.split('');
  const resultArr = [];

  for (let i = 0; i < strArr.length; i++) {
    bufferStr = '';
    for (let j = 0; j < strArr.length; j++) {
      if (i !== j) {
        bufferStr += strArr[j];
      }
    }
    resultArr.push(bufferStr);
  }

  function compare (a, b) {
    return (a - b);
  }

  resultArr.sort(compare);

  return Number(resultArr[resultArr.length - 1]);
}

module.exports = deleteDigit;
