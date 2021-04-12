/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const arrBuffer = [];
  const obj = {};

  let indexLongElem = 0;

  if (domains.length === 0 || domains === undefined || !Array.isArray(domains)) { return obj; }

  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.'));
  }

  if (arr.length === 1) {
    arrBuffer.push(0);
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length >= arr[i + 1].length) {
        arrBuffer.push(i);
      } else {
        arrBuffer.push(i + 1);
      }
    }
  }

  for (let x = 0; x < arrBuffer.length; x++) {
    let str = '';
    indexLongElem = arrBuffer[x];
    for (let j = arr[indexLongElem].length - 1; j >= 0; j--) {
      str += `.${arr[indexLongElem][j]}`;
      obj[str] = 0;
      for (let i = 0; i < domains.length; i++) {
        if (domains[i].indexOf(arr[indexLongElem][j]) !== -1) {
          obj[str] += 1;
        }
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
