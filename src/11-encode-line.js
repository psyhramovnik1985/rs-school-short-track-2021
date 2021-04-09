/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const Mas = str.split('');
  let z = 1;
  for (let i = 0; i < Mas.length; i++) {
    if (Mas[i] === Mas[i + 1]) {
      z += 1;
      Mas.splice(i + 1, 1);
      i -= 1;
    } else if (z > 1) {
      Mas.splice(i, 0, z);
      i += 1;
      z = 1;
    }
  }
  const strCompress = Mas.join('');
  return strCompress;
}

module.exports = encodeLine;
