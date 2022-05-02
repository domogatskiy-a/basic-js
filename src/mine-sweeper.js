const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let sweeper = [];
  matrix.forEach(element => {
    sweeper.push(element.slice().fill(0)); //заполняем поле нулями
  }); 
  //console.log(sweeper); 
  for(let i = 0; i < matrix.length; i++ ){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j]){
        if(i-1 >= 0             && j-1 >= 0               ){sweeper[i-1][j-1]++};
        if(i-1 >= 0                                       ){sweeper[i-1][j  ]++};
        if(i-1 >= 0             && j+1 <  matrix[i].length){sweeper[i-1][j+1]++};
        if(                        j-1 >= 0               ){sweeper[i  ][j-1]++};
        if(                        j+1 <  matrix[i].length){sweeper[i  ][j+1]++};
        if(i+1 <  matrix.length && j-1 >= 0               ){sweeper[i+1][j-1]++};
        if(i+1 <  matrix.length && j   >= 0               ){sweeper[i+1][j  ]++};
        if(i+1 <  matrix.length && j+1 <  matrix[i].length){sweeper[i+1][j+1]++};
        console.log(i,j,sweeper);
      }
    }
  }
  return sweeper;
}

module.exports = {
  minesweeper
};

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
 ];
 
console.log( minesweeper(matrix));
