const { NotImplementedError } = require('../extensions/index.js');

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
  let strN = '' + n;
  let arrN = [];
  for(let i = 0 ; i < strN.length; i++){
    arrN.push(+(strN.slice(0, i) + strN.slice(i+1, strN.length)));
  }
  console.log(Math.max(...arrN));
  return Math.max(...arrN);
}

module.exports = {
  deleteDigit
};


deleteDigit(152);