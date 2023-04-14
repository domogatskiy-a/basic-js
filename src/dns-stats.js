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
  let i = 0,
    key = '';

  if ( domains.length == 0) return {};
  
  domains
    .map(a => a.split('.').reverse())
    .sort((a,b) => b.length - a.length)[0]
    .forEach((adress, i, arr) => {
      console.log(adress, arr)
      key = key == '' ? adress : `${key}.${adress}`;
      res[key] = arr.reduce((acc, adr) => console.log(acc, adr, adr.length, adress, adr.length > (i + 1) && adress == adr[i] ? acc++ : acc), 0);
    });

  return res;

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

console.log(getDNSStats(['epam.com', 'info.epam.com']));

module.exports = {
  getDNSStats
};
