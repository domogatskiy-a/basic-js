const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight( arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const sortFilterArr = arr.filter(a => a > 0).sort((a,b) => a - b);
  let i = -1;
  return arr.map(a => a === -1 ? a : typeof i++ === 'number' && sortFilterArr[i])
}

module.exports = {
  sortByHeight
};
