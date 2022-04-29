const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log(options);
  let strRepit = '';
  let additionRepeat = '';
  if(options.separator === undefined){options.separator = '+'};
  if(options.additionSeparator === undefined){options.additionSeparator = '|'};
  if(options.addition === undefined){options.addition = ''};

  for(let i = 0; i < options.additionRepeatTimes; i++){
    additionRepeat += '' + options.addition;
    i < options.additionRepeatTimes - 1 ? additionRepeat += options.additionSeparator : '' ; 
  }
  additionRepeat.length == 0 ? additionRepeat += '' + options.addition : '';
  for(let i = 0; i < options.repeatTimes; i++){
    strRepit += str + additionRepeat;
    i < options.repeatTimes - 1 ? strRepit += options.separator : '';
  }
  return strRepit.length != 0 ? strRepit : str + additionRepeat;
}

module.exports = {
  repeater
};

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', 
 addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
 
 console.log(repeater('STRING', {separator: '**', 
 addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
