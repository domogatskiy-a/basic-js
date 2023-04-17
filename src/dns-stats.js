const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats( domains ) {

  const res = {};
  
  domains
    .map(a => a.split('.').reverse())
    .sort((a,b) => b.length - a.length)
    .map((adress) => {
      adress
      .reduce((s,i) => {
        const key = `${s}.${i}`;
        res[key] = res[key] ? res[key] + 1 : 1;
        return key;
      },'')
      });

  return res;

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

console.log(getDNSStats(['epam.com', 'info.epam.com']));

module.exports = {
  getDNSStats
};
