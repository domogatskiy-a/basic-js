const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let elementSum = 0;
  let zeroArrSave = []; 
  for(let i = 0; i < matrix.length; i++){
    let zeroArr = zeroArrSave.slice();
    zeroArrSave = []; 
    for(let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] == 0){
        zeroArrSave.push(j);
      }
      //console.log(j, !zeroArr.includes(j));
      if(!zeroArr.includes(j)){
        elementSum += matrix[i][j];
      }
    }
  }
  return elementSum;
}

module.exports = {
  getMatrixElementsSum
};

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
 ];
 
console.log( getMatrixElementsSum(matrix));