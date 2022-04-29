const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth( arr ) {

    //console.log(arr);

    if(!Array.isArray(arr)){
      //console.log(arr);
      return 0;
    }
    let depth = 0;
    for (let i = 0 ; i < arr.length; i++){
      //console.log(arr[i]);
      depth = Math.max(depth, this.calculateDepth(arr[i]));
    }
    //console.log(depth);
    return depth + 1;
  }
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])); //` => `1`

console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));//` => `2`

console.log(depthCalc.calculateDepth([[[]]]));//` => `3`