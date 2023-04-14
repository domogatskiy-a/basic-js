const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const sample = typeof sampleActivity === 'string' ? +sampleActivity : false;
  
  if(typeof sample === 'number' &&  sample > 0 && sample < 15) {
    
    return Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD));
  
  }
  
  return false;
}


module.exports = {
  dateSample
};
