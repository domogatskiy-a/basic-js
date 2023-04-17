const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true){
    this.reverse = reverse;
  }
  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!(message && key)){
      throw new Error('Incorrect arguments!');
    }
    let res = '',
        count = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for(let ind = 0; ind < message.length; ind++) {
      const simbol = message[ind];

      const simbolCode = simbol.charCodeAt();

      if(simbolCode >= 65 && simbolCode <= 90) {
        if(!key[count]) 
          count = 0;

        const keyCode = key[count++].charCodeAt();
        //count++;        

        const code = simbolCode + keyCode;  
        
        res += String.fromCharCode(code % 26 + 65); 
        
      } else {
        res += simbol;
      }
    }
    return !this.reverse ? res.split('').reverse().join('') : res;
  }  
    
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!(message && key)){
      throw new Error('Incorrect arguments!');
    }
    let res = '',
        count = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for(let ind = 0; ind < message.length; ind++) {
      const simbol = message[ind];

      const simbolCode = simbol.charCodeAt();

      if(simbolCode >= 65 && simbolCode <= 90) {
        if(!key[count]) 
          count = 0;

        const keyCode = key[count++].charCodeAt();
        //count++;        

        const code = 26 + simbolCode - keyCode;  
        
        res += String.fromCharCode(code % 26 + 65); 
        
      } else {
        res += simbol;
      }
    }
    return !this.reverse ? res.split('').reverse().join('') : res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
