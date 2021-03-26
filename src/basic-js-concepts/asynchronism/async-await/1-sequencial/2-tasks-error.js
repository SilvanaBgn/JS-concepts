const util = require('util'); // node module
const sleep = util.promisify(setTimeout); // converts setTimeout in a promise

module.exports = {
  
  async taskOne() {
    throw new Error('There has been an Error')
    sleep(4000);
    return 'ONE VALUE';
  },

  async taskTwo() {
    sleep(2000);
    return 'TWO VALUE';
  }
}

// With this implementation, if there's an error, EXECUTION EXPLOTES, cause there is no error handlering 

