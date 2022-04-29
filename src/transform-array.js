const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  console.log(arr);
  let discardNext = false;
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let resultArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === `--double-prev`){
      if(!discardNext && resultArr.length > 0){
        resultArr.push(resultArr[resultArr.length - 1]);
      }
    } else if (arr[i] === `--double-next`){
      if(arr.length > i + 1){
        resultArr.push(arr[i + 1]);
      }
    } else if (arr[i] === `--discard-next`){
      if(arr.length > i + 1){
        i++;
        discardNext = true;
      }
    } else if (arr[i] === `--discard-prev`){
      if(!discardNext && resultArr.length > 0){
        resultArr.pop();
      }
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

module.exports = {
  transform
};

console.log(transform([1, 2, 3, '--double-next', 4, 5]), `=> [1, 2, 3, 4, 4, 5]`);
console.log(transform([1, 2, 3, '--discard-prev', 4, 5]), `=> [1, 2, 4, 5]`);