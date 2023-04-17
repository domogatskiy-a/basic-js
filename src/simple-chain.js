const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
  err: false,
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.res.length;
  },
  addLink( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.res.push('( ' + value + ' )');
    return this;
  },
  removeLink( position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 
      || !(Number.isInteger(position)) 
      || position > this.res.length) {
      this.res = [];
      this.err = true;
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.res.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.res.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const result = this.res.join('~~');

    if(this.err) {
      this.res.length = 0;
    }
    return result;
  }
};

module.exports = {
  chainMaker
};
