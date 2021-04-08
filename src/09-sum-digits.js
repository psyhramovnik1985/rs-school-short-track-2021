/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr;
  let result;
  function sumDigit (x) {
    arr = String(x).split('');

    function sum(res, elem) {
      return Number(res) + Number(elem);
    }

    result = arr.reduce(sum, 0);

    if (String(result).length > 1) {
      sumDigit(result);
    }
  }

  sumDigit(n);
  return result;
}

module.exports = getSumOfDigits;
