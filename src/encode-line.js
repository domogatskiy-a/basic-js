const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(str == '') return '';
  const res = [],
    names = str.split('');
  let name = names.length > 0 && names[0],
  count = 1;
  for (let i = 1; i < names.length; i++){
    console.log(res, name, count, i);
    if(names[i] == name){ 
      count++;
    } else{
      res.push(count > 1 ? count + name: name);
      if(i < names.length){
        count = 1;
        name = names[i];
        //i++;
      }
    }
  }
  res.push(count > 1 ? count + name: name);
  
  return res.join('');;
}

console.log(encodeLine(''), '');

module.exports = {
  encodeLine
};
